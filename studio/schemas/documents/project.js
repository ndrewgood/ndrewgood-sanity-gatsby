import {format} from 'date-fns'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean'
    },
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
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'collaborators',
      title: 'Collaborators',
      type: 'array',
      of: [ {
        type: 'reference',
        to: [
          {type: 'collaborators'}
        ]
      }]
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}]
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
      name: 'description',
      title: 'Description',
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
      title: 'Body Content',
      type: 'array',
      of: [
        {type: 'content'},
        {type: 'contentImage'},
        {type: 'imageText'},
        {type: 'contentBar'},
        {type: 'driveVideo'}
      ]
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
