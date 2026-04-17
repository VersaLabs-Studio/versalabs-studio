// THIS FILE CAN BE SAFELY IMPORTED IN CLIENT COMPONENTS
// It only re-exports types and does NOT import server-side modules

export type { ProjectData, Project } from './types';

// Export ONLY client-safe code here
// The actual server-side functions are imported directly in server components
