import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gist',
  title: 'Gist',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'public',
      title: 'Visiablity',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        {
          type: 'code',
          options: {
            withFilename: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
