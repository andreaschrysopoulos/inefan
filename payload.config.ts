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

  secret: process.env.PAYLOAD_SECRET!,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

  collections: [
    // Articles
    {
      slug: 'articles',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'date', 'image'],
      },
      hooks: {
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
          name: 'category',
          type: 'select',
          options: ['International', 'Business', 'Financial', 'Economics'],
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'date',
          type: 'date',
          required: true,
          admin: {
            position: 'sidebar',
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
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
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor(),
          required: true,
        },
      ],
    },
    // Media & PDFs
    {
      slug: 'media',
      admin: {
        defaultColumns: [
          'filename',
          'width',
          'height',
          'createdAt',
          'filesize',
        ],
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
    // Team
    {
      slug: 'boardMembers',
      admin: {
        defaultColumns: ['name', 'role', 'photo'],
      },
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
              name: 'role',
              type: 'text',
              required: true,
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
    // Weekly Reports
    {
      slug: 'weeklyReports',
      admin: {
        defaultColumns: ['name', 'timePeriodStart', 'timePeriodEnd'],
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
