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
      title: 'Public',
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
            languageAlternatives: [
              {title: 'C#', value: 'csharp'},
              {title: 'CSS', value: 'css'},
              {title: 'Go', value: 'go'},
              {title: 'HTML', value: 'html'},
              {title: 'Java', value: 'java'},
              {title: 'JavaScript', value: 'javascript'},
              {title: 'JSON', value: 'json'},
              {title: 'JSX', value: 'jsx'},
              {title: 'PHP', value: 'php'},
              {title: 'Plain text', value: 'text'},
              {title: 'Python', value: 'python'},
              {title: 'Ruby', value: 'ruby'},
              {title: 'SASS', value: 'sass'},
              {title: 'SCSS', value: 'scss'},
              {title: 'Shell', value: 'sh'},
              {title: 'TSX', value: 'tsx'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'XML', value: 'xml'},
              {title: 'YAML', value: 'yaml'},
              {title: 'GraphQL', value: 'graphql', mode: 'graphqlschema'},
              {title: 'Swift', value: 'swift', mode: 'swift'},
            ],
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
