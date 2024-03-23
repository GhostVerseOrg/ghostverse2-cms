import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Links: Attribute.Component<'menu.link', true>;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Label: Attribute.String;
    Url: Attribute.String;
    Target: Attribute.Enumeration<['_blank', '_self']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
    }
  }
}
