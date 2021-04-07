import {AiOutlineTag} from 'react-icons/ai'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: AiOutlineTag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
