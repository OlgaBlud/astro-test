// Common types for Sanity content
export interface NavLink {
  label: string;
  href: string;
}
// Hero
export interface HeroType {
  _type: "hero";
  _key: string;
  titleHighlighted: string;
  titleRegular: string;
  text: string;
  buttonText: string;
  buttonHref?: string | null;
  image?: {
    asset?: {
      url: string;
    };
  };
  quoteText1?: string;
  quoteText2?: string;
}

// Difference
export interface HighlightWord {
  text: string;
  highlight: boolean;
}

export interface DifferenceItem {
  title: string;
  subtitle?: string;
  text: string;
  icon?: {
    asset?: {
      url: string;
    };
  };
}

export interface DifferenceType {
  _type: "difference";
  _key: string;
  title: HighlightWord[];
  items: DifferenceItem[];
}

// Home
export interface HomeType {
  section: (HeroType | DifferenceType)[];
}

// Header

export interface SiteSettingsType {
  navLinks: NavLink[];
  buttonText?: string;
  buttonHref?: string;
}

export const defaultSiteSettings: SiteSettingsType = {
  navLinks: [],
  buttonText: "",
  buttonHref: "#",
};
