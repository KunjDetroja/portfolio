import { Project } from '@/types/project';
export const statusLabel = (status: Project['status']) => ({ completed: 'Completed', 'in-progress': 'In progress', archived: 'Archived' }[status || 'in-progress']);
