export default {
  name: 'hero',
  title: 'Hero title',
  type: 'object',
  fields: [
    {
      name: 'titleHighlighted',
      title: 'Title Highlighted',
      type: 'text',
    },
    {
      name: 'titleRegular',
      title: 'Title Regular',
      type: 'text',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonHref',
      title: 'Button Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'quoteText1',
      title: 'Quote Text 1',
      type: 'text',
    },
    {
      name: 'quoteText2',
      title: 'Quote Text 2',
      type: 'text',
    },
  ],
}
