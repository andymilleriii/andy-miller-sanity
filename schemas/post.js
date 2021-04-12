import {AiOutlineFileText} from 'react-icons/ai'

export default {
  name: 'post',
  title: 'Article',
  type: 'document',
  icon: AiOutlineFileText,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'slug',
      title: 'URL Path',
      type: 'slug',
      description: 'What the URL for the article will be. Example: andymilleriii.com/articles/[this-article-name]',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'previewText',
      title: 'Preview Text',
      description: 'Preview of post that appears on other pages of the site and when shared. If left blank, an excerpt will be automatically generated.',
      type: 'text',
      validation: Rule => Rule.max(200)
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
