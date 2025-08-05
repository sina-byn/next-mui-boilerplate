import { clsx, type ClassArray } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassArray) => twMerge(clsx(inputs));
