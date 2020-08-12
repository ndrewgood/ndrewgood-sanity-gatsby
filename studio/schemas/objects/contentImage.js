import {format} from 'date-fns'

export default {
  name: 'contentImage',
  title: 'Content - Image',
  type: 'object',
  fields: [
    {
        title: 'Name',
        name: 'name',
        type: 'string'
    },
    {
        title: 'Size',
        name: 'size',
        type: 'string',
        options: {
            list: [
                'full-width',
                'cont-width',
                'auto'
            ]
        }

    },
    {
        title: 'Image',
        name: 'image',
        type: 'image'
    }
  ],
}