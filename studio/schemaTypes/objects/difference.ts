export default {
  name: 'difference',
  title: 'Section: What Makes Us Different',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'text', type: 'string', title: 'Text'},
            {name: 'highlight', type: 'boolean', title: 'Highlight'},
          ],
        },
      ],
      description: 'Заголовок з можливістю виділити слова',
    },
    {
      name: 'items',
      title: 'Difference Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Item Title'},
            {
              name: 'subtitle',
              type: 'string',
              title: 'Additional Text',
              options: {isHighlighted: false},
            },
            {name: 'text', type: 'text', title: 'Description'},
            {name: 'icon', type: 'image', title: 'Icon', options: {hotspot: true}},
          ],
        },
      ],
    },
  ],
}
