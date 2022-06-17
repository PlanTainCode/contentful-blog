// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IHomeFields {
  /** Заголовок */
  title?: string | undefined;

  /** Описание */
  description?: Document | undefined;

  /** Link1 */
  link?: string | undefined;

  /** Link2 */
  link2?: string | undefined;
}

export interface IHome extends Entry<IHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "home";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INoteFields {
  /** Title */
  title?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Content */
  content?: Document | undefined;

  /** Date */
  date?: string | undefined;
}

export interface INote extends Entry<INoteFields> {
  map(arg0: (note: any) => JSX.Element): import("react").ReactNode;
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "note";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPortfolioFields {
  /** Ttitle */
  ttitle?: string | undefined;
}

export interface IPortfolio extends Entry<IPortfolioFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "portfolio";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPostFields {
  /** Title */
  title: string;

  /** slug */
  slug?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Content */
  content: Document;

  /** Date */
  date?: string | undefined;

  /** Background */
  background?: Asset | undefined;

  /** Action */
  action: string;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "home" | "note" | "portfolio" | "post";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";