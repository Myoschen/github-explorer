import {ComponentPropsWithoutRef} from 'react';
import {cn} from '@/utils/classnames';

interface Props extends ComponentPropsWithoutRef<'button'> {
  icon?: JSX.Element;
  text?: string;
}

function Button({icon, text, className, ...props}: Props) {
  return (
    <button
      className={cn(
        'text-mauve12 inline-flex cursor-default items-center gap-x-1 rounded-md bg-whiteA11 px-3 py-1 font-paragraph text-sm shadow-sm hover:bg-whiteA12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray6 dark:bg-whiteA5 dark:hover:bg-whiteA6 dark:focus-visible:outline-gray12',
        className
      )}
      {...props}
    >
      {icon}
      {text ? <span>{text}</span> : null}
    </button>
  );
}

export default Button;
