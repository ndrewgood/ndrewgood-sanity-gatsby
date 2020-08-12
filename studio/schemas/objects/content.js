import {format} from 'date-fns'

export default {
  name: 'content',
  title: 'Content - Text',
  type: 'object',
  fields: [
    {
        title: 'Title',
        name: 'title',
        type: 'string'
    },
    {
        title: 'Text',
        name: 'text',
        type: 'projectPortableText'
    }
  ],
}