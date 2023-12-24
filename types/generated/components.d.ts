import type { Schema, Attribute } from '@strapi/strapi';

export interface CourseAbstract extends Schema.Component {
  collectionName: 'components_course_abstracts';
  info: {
    displayName: 'Abstract';
    icon: 'bulletList';
  };
  attributes: {
    list: Attribute.Component<'shared.spec', true>;
  };
}

export interface CourseContent extends Schema.Component {
  collectionName: 'components_course_contents';
  info: {
    displayName: 'Content';
    icon: 'bulletList';
  };
  attributes: {
    list: Attribute.Component<'shared.spec', true>;
  };
}

export interface CourseCurriculum extends Schema.Component {
  collectionName: 'components_course_curricula';
  info: {
    displayName: 'Curriculum';
    icon: 'bulletList';
  };
  attributes: {
    sections: Attribute.Component<'shared.spec', true>;
  };
}

export interface CoursePoints extends Schema.Component {
  collectionName: 'components_course_points';
  info: {
    displayName: 'Points';
    icon: 'bulletList';
  };
  attributes: {
    list: Attribute.Component<'shared.spec', true>;
  };
}

export interface SharedGallery extends Schema.Component {
  collectionName: 'components_course_galleries';
  info: {
    displayName: 'gallery';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
  };
}

export interface SharedHeading extends Schema.Component {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.String;
    level: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 3;
      }>;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    source: Attribute.Media & Attribute.Required;
    caption: Attribute.Blocks;
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
    heading: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'course.abstract': CourseAbstract;
      'course.content': CourseContent;
      'course.curriculum': CourseCurriculum;
      'course.points': CoursePoints;
      'shared.gallery': SharedGallery;
      'shared.heading': SharedHeading;
      'shared.image': SharedImage;
      'shared.paragraph': SharedParagraph;
      'shared.pv': SharedPv;
      'shared.spec': SharedSpec;
    }
  }
}
