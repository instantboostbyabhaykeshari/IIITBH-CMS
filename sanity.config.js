import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'
import faculty_directory from './schemaTypes/faculty_directory.js'
import faculty from './schemaTypes/faculty.js'

export default defineConfig({
  name: 'default',
  title: 'College-CMS',

  projectId: '965qwlry',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [faculty, faculty_directory]
  },
})
