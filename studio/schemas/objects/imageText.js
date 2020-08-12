import {format} from 'date-fns'

export default {
  name: 'imageText',
  title: 'Content - Image and Text',
  type: 'object',
  fields: [
    {
        title: 'Image Name',
        name: 'name',
        type: 'string'
    },
    {
        title: 'Layout',
        name: 'layout',
        type: 'string',
        options: {
            list: [
                'image-left',
                'image-right'
            ]
        }

    },
    {
        title: 'Image',
        name: 'image',
        type: 'image'
    },
    {
        title: 'Text',
        name: 'text',
        type: 'projectPortableText'
    },
  ],
}