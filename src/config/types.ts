// THIS FILE CAN BE SAFELY IMPORTED IN CLIENT COMPONENTS
// It only contains type definitions - no server-side modules

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  systemFlow: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export type Project = ProjectData;
