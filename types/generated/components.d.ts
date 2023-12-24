import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedGallery extends Schema.Component {
  collectionName: 'components_course_galleries';
  info: {
    displayName: 'gallery';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface SharedParagraph extends Schema.Component {
  collectionName: 'components_course_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'bold';
    description: '';
  };
  attributes: {
    body: Attribute.Blocks;
  };
}

export interface SharedPv extends Schema.Component {
  collectionName: 'components_course_pvs';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    URL: Attribute.String;
  };
}

export interface SharedSpec extends Schema.Component {
  collectionName: 'components_horizontal_specs';
  info: {
    displayName: 'GalleryText';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.gallery': SharedGallery;
      'shared.paragraph': SharedParagraph;
      'shared.pv': SharedPv;
      'shared.spec': SharedSpec;
    }
  }
}
