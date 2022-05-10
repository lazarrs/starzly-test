import {StarzlyError} from './error';

export interface Feed {
  id: number;
  url: string;
  thumbnail: string;
  likes: number;
  talent: {
    id: number;
    name_en: string;
    name_ar?: string;
    avatar_url: string;
    slug: string;
    bio_en: string;
    status: string;
    user: {
      id: number;
      avatar_url: string;
      intro_video_url: string;
      intro_video_thumbnail_url: string;
    };
  };
  occasion: {
    id: number;
    title_en: string;
    title_ar: string;
    image_emojy: string;
    description_en: string;
    description_ar: string;
    type: string;
    order: number;
    created_at: Date;
    updated_at: Date;
    image_url: string;
  };
}

export interface DiscoverState {
  loading: boolean;
  items: Array<Feed>;
  page: number;
  per_page: number;
  hasMore: boolean;
  error: StarzlyError | undefined;
}
