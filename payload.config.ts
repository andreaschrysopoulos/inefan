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

  secret: process.env.PAYLOAD_SECRET,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),

  collections: [
    {
      slug: 'articles',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'date', 'image'],
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
        mimeTypes: ['image/*'],
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
    {
      slug: 'boardMembers',
      admin: {
        defaultColumns: [
          'name',
          'role',
          'photo',
        ]
      },
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
