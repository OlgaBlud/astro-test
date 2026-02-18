import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'astro-demo-cms',
  projectId: 'av8jlb2b',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'https://astro-o-first-test.netlify.app/',
        previewMode: {
          enable: '/api/preview/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
