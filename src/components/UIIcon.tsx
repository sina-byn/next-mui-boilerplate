import type { SVGAttributes } from 'react';

// * utils
import { cn } from '@/utils';

// * types
import type { Icon } from '@/types/icon';

type IconProps = { icon: Icon } & Omit<SVGAttributes<SVGElement>, 'children'>;

const UIIcon = ({ icon, className, ...props }: IconProps) => {
  return (
    <svg className={cn('icon', className)} {...props}>
      <use href={`/icons.svg#${icon}`} />
    </svg>
  );
};

export default UIIcon;
