import type { Schema, Attribute } from '@strapi/strapi';

export interface CourseGallery extends Schema.Component {
  collectionName: 'components_course_galleries';
  info: {
    displayName: 'gallery';
    icon: 'landscape';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface CourseSpec extends Schema.Component {
  collectionName: 'components_horizontal_specs';
  info: {
    displayName: 'spec';
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
      'course.gallery': CourseGallery;
      'course.spec': CourseSpec;
    }
  }
}
