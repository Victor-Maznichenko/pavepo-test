import type { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import type { TypographyProps } from './types';
import styles from './styles.module.scss';

export const Typography = <E extends ElementType = 'p'>({
  as,
  children,
  className,
  variant = 'text_S',
  ...props
}: TypographyProps<E>) => {
  const Component = as ?? 'p';
  const computedProps = {
    className: clsx(styles[variant], className),
  } as ComponentProps<E>;

  return (
    <Component {...computedProps} {...props}>
      {children}
    </Component>
  );
};
