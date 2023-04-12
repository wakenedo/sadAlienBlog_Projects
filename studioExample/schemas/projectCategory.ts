import { defineField, defineType } from 'sanity'

export default defineType({
  name: `projectCategory`,
  title: 'Project Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
  ],
})