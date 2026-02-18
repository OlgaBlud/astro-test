export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      readonly: true,
      initialValue: 'Home',
    },
    {
      name: 'section',
      title: 'Sections',
      type: 'array',
      of: [{type: 'hero'}, {type: 'difference'}],
    },
  ],
}
