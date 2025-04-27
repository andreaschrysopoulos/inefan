import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Debug logging to confirm environment variables
// console.log('BLOB_READ_WRITE_TOKEN:', process.env.BLOB_READ_WRITE_TOKEN)
// console.log('NODE_ENV:', process.env.NODE_ENV)
// console.log('DATABASE_URL:', process.env.DATABASE_URL)

export default buildConfig({
  editor: lexicalEditor(),
  admin: {},

  secret:
    process.env.PAYLOAD_SECRET ||
    (() => {
      throw new Error('PAYLOAD_SECRET is not defined')
    })(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

  collections: [
    // Articles
    {
      slug: 'articles',
      orderable: true,
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'date', 'image'],
        group: 'Website',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data && data.title && !data.slug) {
              // Handle Greek digraphs first
              const digraphMap = {
                'ου': 'ou',
                'αι': 'ai',
                'ει': 'ei',
                'οι': 'oi',
                'αυ': 'av',
                'ευ': 'ev',
                'ηυ': 'iv',
                'ού': 'ou',
                'αί': 'ai',
                'εί': 'ei',
                'οί': 'oi',
                'αύ': 'av',
                'εύ': 'ev',
                'ηύ': 'iv',
                // Add more as needed
              }
              let slug = data.title
              Object.entries(digraphMap).forEach(([gr, en]) => {
                slug = slug.replace(new RegExp(gr, 'gi'), (match) =>
                  match === match.toUpperCase() ? en.toUpperCase() : en
                )
              })

              // Then single Greek letters
              const greekMap = {
                α: 'a',
                β: 'v',
                γ: 'g',
                δ: 'd',
                ε: 'e',
                έ: 'e',
                ζ: 'z',
                η: 'i',
                ή: 'i',
                θ: 'th',
                ι: 'i',
                ϊ: 'i',
                ί: 'i',
                κ: 'k',
                λ: 'l',
                μ: 'm',
                ν: 'n',
                ξ: 'x',
                ο: 'o',
                ό: 'o',
                π: 'p',
                ρ: 'r',
                σ: 's',
                ς: 's',
                τ: 't',
                υ: 'y',
                ύ: 'y',
                φ: 'f',
                χ: 'ch',
                ψ: 'ps',
                ω: 'o',
                ώ: 'o',
                Α: 'a',
                Β: 'v',
                Γ: 'g',
                Δ: 'd',
                Ε: 'e',
                Ζ: 'z',
                Η: 'i',
                Θ: 'th',
                Ι: 'i',
                Κ: 'k',
                Λ: 'l',
                Μ: 'm',
                Ν: 'n',
                Ξ: 'x',
                Ο: 'o',
                Π: 'p',
                Ρ: 'r',
                Σ: 's',
                Τ: 't',
                Υ: 'y',
                Φ: 'f',
                Χ: 'ch',
                Ψ: 'ps',
                Ω: 'o',
              }
              const transliterate = (str: string) =>
                str.replace(/[\u0370-\u03FF]/g, (c) => greekMap[c] || '')

              data.slug = transliterate(slug)
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-') // Only allow a-z, 0-9, dash
                .replace(/(^-|-$)+/g, '')
            }
            return data
          },
        ],
        afterChange: [
          async ({ doc, operation }) => {
            if (['create', 'update'].includes(operation)) {
              try {
                await fetch(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/insights/${doc.slug}`
                )
                await fetch(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/insights`
                )
                // console.log(
                //   'revalidated due to change: ' + `/insights/${doc.slug}`
                // )
              } catch (err) {
                console.error('Revalidation (change) failed:', err)
              }
            }
          },
        ],
        afterDelete: [
          async ({ doc }) => {
            try {
              await fetch(
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/insights/${doc.slug}`
              )
              await fetch(
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/insights`
              )
              // console.log(
              //   'revalidated due to deletion: ' + `/insights/${doc.slug}`
              // )
            } catch (err) {
              console.error('Revalidation (delete) failed:', err)
            }
          },
        ],
      },
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
          defaultValue: () => new Date().toISOString().slice(0, 10), // Prefill with today's date
          admin: {
            position: 'sidebar',
            date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'eee, MMM dd, yyyy',
            },
          },
        },
        {
          name: 'category',
          type: 'select',
          options: ['International', 'Business', 'Financial', 'Economics'],
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'slug',
          type: 'text',
          unique: true,
          admin: {
            description: 'Auto-generated from title.',
            position: 'sidebar',
          },
        },
        {
          name: 'title',
          type: 'text',
          maxLength: 80,
          required: true,
        },

        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Shown in bigger font before the picture.',
          },
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor(),
          required: true,
        },
      ],
    },
    // Reports
    {
      slug: 'weeklyReports',
      orderable: true,
      admin: {
        defaultColumns: ['name', 'timePeriodStart', 'timePeriodEnd'],
        group: 'Website',
      },
      hooks: {
        afterChange: [
          async ({ doc, operation }) => {
            if (['create', 'update'].includes(operation)) {
              try {
                await fetch(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/reports`
                )
                await fetch(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/`
                )
                // console.log(
                //   'revalidated due to change: ' + `/insights/${doc.slug}`
                // )
              } catch (err) {
                console.error('Revalidation (change) failed:', err)
              }
            }
          },
        ],
        afterDelete: [
          async ({ doc }) => {
            try {
              await fetch(
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/reports`
              )
              await fetch(
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/`
              )

              // console.log(
              //   'revalidated due to deletion: ' + `/insights/${doc.slug}`
              // )
            } catch (err) {
              console.error('Revalidation (delete) failed:', err)
            }
          },
        ],
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'timePeriodStart',
              type: 'date',
              required: true,
            },
            {
              name: 'timePeriodEnd',
              type: 'date',
              required: true,
            },
          ],
        },
        {
          name: 'reportFile',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    // Board Members
    {
      slug: 'boardMembers',
      admin: {
        defaultColumns: ['name', 'inefanRole', 'photo'],
        group: 'Website',
        useAsTitle: 'name',
      },
      orderable: true,
      hooks: {
        afterChange: [
          async ({ operation }) => {
            if (['create', 'update'].includes(operation)) {
              try {
                await fetch(
                  `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/team`
                )
                // console.log("Revalidated due to change: /team");
              } catch (err) {
                console.error('Revalidation (change) failed:', err)
              }
            }
          },
        ],
        afterDelete: [
          async () => {
            try {
              await fetch(
                `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}&path=/team`
              )
              // console.log("Revalidated due to change: /team");
            } catch (err) {
              console.error('Revalidation (delete) failed:', err)
            }
          },
        ],
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'inefanRole',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'linkedin',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
          required: true,
        },
      ],
    },
    // Media
    {
      slug: 'media',
      admin: {
        defaultColumns: ['filename', 'createdAt'],
        group: 'Website',
      },
      upload: {
        mimeTypes: ['image/*', 'application/pdf'],
      },
      access: {
        read: () => true, // Public access to media files
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: false,
        },
      ],
    },
    // Users
    {
      slug: 'users',
      auth: true,
      admin: {
        group: 'Settings',
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'picture'],
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: false,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
          unique: true,
        },
      ],
    },
  ],

  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
    }),
  ],

  sharp,
})
