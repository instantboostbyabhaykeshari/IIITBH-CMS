import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'
import faculty from './schemaTypes/faculty'

export default defineConfig({
  name: 'default',
  title: 'College-CMS',

  projectId: '965qwlry',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [faculty],
  },
})
