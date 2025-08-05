import fs from 'fs';
import { moveFileSync } from 'move-file';

if (fs.existsSync('icon.ts')) moveFileSync('icon.ts', 'src/types/icon.ts');
if (fs.existsSync('icons.svg')) moveFileSync('icons.svg', 'public/icons.svg');
