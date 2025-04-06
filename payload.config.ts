import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob' // Import the Vercel Blob adapter
import { buildConfig } from 'payload'

export default buildConfig({
  editor: lexicalEditor(),

  collections: [
    {
      slug: 'articles', // articles collection
      admin: {
        useAsTitle: 'title', // Display the 'title' field in the admin panel list view
        defaultColumns: ['title', 'category', 'date'], // Columns to show in the list view
      },
      fields: [
        {
          name: 'slug', // Slug URL
          type: 'text',
          required: true,
          unique: true, // Ensures slugs are unique (important for URL routing)
          admin: {
            position: 'sidebar', // Display in the sidebar in the admin panel
          },
        },
        {
          name: 'title', // Title
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle', // Subtitle
          type: 'text',
          required: true,
        },
        {
          name: 'category', // Category !! Should be a select
          type: 'text',
          required: true,
        },
        {
          name: 'date', // Date
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'image', // Image
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'content', // Content
          type: 'richText',
          required: true,
          editor: lexicalEditor(),
        },
      ],
    },
    {
      slug: 'media', // media collection
      upload: {
        staticDir: 'media', // Directory where files will be stored (relative to project root)
        mimeTypes: ['image/*'], // Restrict to images only
      },
      fields: [
        {
          name: 'alt', // Alt text for accessibility
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  plugins: [
    vercelBlobStorage({
      enabled: process.env.BLOB_READ_WRITE_TOKEN !== undefined, // Enable only if token is present
      collections: {
        media: true, // Apply Vercel Blob to the 'media' collection
      },
      token: process.env.BLOB_READ_WRITE_TOKEN, // Vercel Blob token
      clientUploads: true, // Enable client-side uploads to bypass Vercel server limits
    }),
  ],

  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
})
