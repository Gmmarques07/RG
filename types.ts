
export interface DuoInfo {
  name: string;
  tagline: string;
  bio: string;
  whatsapp: string;
  spotify: string;
  youtube: string;
  instagram: string;
  profileImage: string;
  backgroundImages: string[];
}

export enum SocialType {
  WHATSAPP = 'WHATSAPP',
  SPOTIFY = 'SPOTIFY',
  YOUTUBE = 'YOUTUBE',
  INSTAGRAM = 'INSTAGRAM'
}
