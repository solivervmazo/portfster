import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ProjectObj = {
  slug: string;
  title: string;
  type: string;
  link: string;
  date: string;
  content: {
    about?: string;
    tags?: Array<string>;
    gallery?: Array<string>;
  };
};

export type ProjectTagsArg = {
  text: string;
  icon?: IconDefinition;
  href?: string;
};

export type ProjectSubInfoArgs = {
  text: string;
  icon?: IconDefinition;
  href?: string;
  internal?: boolean;
};
