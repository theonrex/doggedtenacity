export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
     {
      name: 'subTitle',
      title: 'Sub-Title',
      type: 'string',
 validation: Rule => [
    Rule.required().min(120).error('A Sub Title of min. 20 characters is required'),
    Rule.max(160).warning('Shorter Sub Titles are usually better')
  ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
     {
  title: "Tags",
  name: "tags",
  type: "array",
  of: [{type: "string"}],
  options: {
    layout: "tags"
  }
},
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
   
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
