export default {
  name: 'normalizedText',
  title: 'Normalized Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Highlight', value: 'highlight'},
        ],
      },
    },
  ],
}
