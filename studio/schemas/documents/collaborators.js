import {format} from 'date-fns'

export default {
  name: 'collaborators',
  title: 'Collaborators',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
