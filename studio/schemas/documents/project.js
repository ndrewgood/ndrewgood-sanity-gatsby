import {format} from 'date-fns'

export default {
  name: 'project',
  title: 'project test',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Color used for background'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date project was finished',
      options: {
        dateFormat: 'MMM, YYYY'
      }
    },
    {
      name: 'thumbImg',
      title: 'Thumbnail Image',
      type: 'image'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      slug: 'slug',
      media: 'thumbImg'
    },
    prepare({title = 'No title', type, media}) {
      return {
        title,
        media,
        type
      }
    }
  }
}
