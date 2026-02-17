export const siteSettingsQuery = `
*[_type == "siteSettings"] | order(_updatedAt desc)[0]{
  "navLinks": coalesce(
    navLinks[]{
      "label": coalesce(label, ""),
      "href": coalesce(href, "/")
    },
    []
  ),
  "buttonText": coalesce(buttonText, ""),
  "buttonHref": coalesce(buttonHref, "#")
}
`;

export const homeQuery = `
*[_type == "home"][0]{
  section[]{
    _type,
    _key,

    _type == "hero" => {
      titleHighlighted,
      titleRegular,
      text,
      buttonText,
      buttonHref,
      quoteText1,
      quoteText2,
      image{
        asset->{
          url
        }
      }
    },

    _type == "difference" => {
      title[]{
        text,
        highlight
      },
      items[]{
        title,
        subtitle,
        text,
        icon{
          asset->{
            url
          }
        }
      }
    }
  }
}
`;
