import type React from 'react';

export interface Course {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
