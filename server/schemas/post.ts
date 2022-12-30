import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'techUsed',
      title: 'Technology Used',
      type: 'string',
      description: 'Type all the technologies used seperated with commas. ex, <astro, js, python>',
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'string',
      description: 'Enter the project github url | if not leave empty',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'string',
      description: 'Enter the project url - published sites | if not leave empty',
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'createdAt',
      title: 'Created at',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
