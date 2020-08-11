import {format} from 'date-fns'

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
        title: 'Name',
        name: 'name',
        type: 'string'
    },
    {
        title: 'URL',
        name: 'url',
        type: 'url'
    },
    {
        title: 'Important',
        name: 'important',
        type: 'boolean'
    }
  ],
}