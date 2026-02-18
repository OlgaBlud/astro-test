import {defineField, defineType} from 'sanity'

// --- Об'єкти для повторюваних елементів ---

const QuoteItem = defineType({
  name: 'quoteItem',
  title: 'Quote Item',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Text', type: 'text'}),
    defineField({name: 'author', title: 'Author / Label', type: 'string'}),
  ],
})

const WhyItem = defineType({
  name: 'whyItem',
  title: 'Why Item',
  type: 'object',
  fields: [
    defineField({name: 'number', title: 'Number', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'text', title: 'Text', type: 'text'}),
  ],
})

const DifferenceItem = defineType({
  name: 'differenceItem',
  title: 'Difference Item',
  type: 'object',
  fields: [
    defineField({name: 'icon', title: 'Icon', type: 'image'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'text', title: 'Text', type: 'text'}),
  ],
})

// --- Документ головної сторінки ---

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // --- Hero Section ---
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string'}),
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text'}),
    defineField({name: 'heroButtonText', title: 'Hero Button Text', type: 'string'}),
    defineField({name: 'heroButtonHref', title: 'Hero Button Link', type: 'url'}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image'}),

    // --- Quote Block ---
    defineField({
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [{type: 'quoteItem'}],
    }),

    // --- Why Section ---
    defineField({name: 'whyTitle', title: 'Why Section Title', type: 'string'}),
    defineField({name: 'whyDescription', title: 'Why Section Description', type: 'text'}),
    defineField({
      name: 'whyItems',
      title: 'Why Items',
      type: 'array',
      of: [{type: 'whyItem'}],
    }),

    // --- Difference Section ---
    defineField({name: 'differenceTitle', title: 'Difference Section Title', type: 'string'}),
    defineField({
      name: 'differenceItems',
      title: 'Difference Items',
      type: 'array',
      of: [{type: 'differenceItem'}],
    }),
  ],
})
export const schemaTypes = [QuoteItem, WhyItem, DifferenceItem, homePage]
