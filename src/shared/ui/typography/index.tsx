import type { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import type { TypographyProps } from './types';
import styles from './styles.module.scss';

export const Typography = <E extends ElementType = 'p'>({
  as,
  glitch,
  children,
  className,
  variant = 'text_S',
  ...props
}: TypographyProps<E>) => {
  const Component = as ?? 'p';
  const computedProps = {
    className: clsx(styles[variant], glitch && styles.glitch, className),
    'data-text': glitch ? children : undefined,
  } as ComponentProps<E>;

  return (
    <Component {...computedProps} {...props}>
      {children}
    </Component>
  );
};
