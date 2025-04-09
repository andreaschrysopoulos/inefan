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
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
        {
          name: 'date',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor(),
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      slug: 'media',
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
