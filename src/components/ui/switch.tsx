import * as SwitchPrimitive from '@radix-ui/react-switch';

interface Props {
  id: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function Switch({id, leftIcon, rightIcon, checked, onCheckedChange}: Props) {
  return (
    <div
      className="flex items-center gap-x-2"
      style={{display: 'flex', alignItems: 'center'}}
    >
      {leftIcon ? (
        <label className="leading-none" htmlFor={id}>
          {leftIcon}
        </label>
      ) : null}
      <SwitchPrimitive.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="dark:bg-dark-secondary relative h-[25px] w-[50px] rounded-full bg-gray8 outline-none focus:outline focus:outline-gray6 dark:focus:outline-gray12"
      >
        <SwitchPrimitive.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow transition-[background-color_transform] will-change-transform data-[state=checked]:translate-x-[27px]" />
      </SwitchPrimitive.Root>
      {rightIcon ? (
        <label className="leading-none" htmlFor={id}>
          {rightIcon}
        </label>
      ) : null}
    </div>
  );
}

export default Switch;
