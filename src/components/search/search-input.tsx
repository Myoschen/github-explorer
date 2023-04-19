import {ChangeEventHandler} from 'react';
import {Cross2Icon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import {motion} from 'framer-motion';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onReset: () => void;
}

function SearchInput({value, onChange, onReset}: Props) {
  return (
    <motion.div
      layoutId="search-input"
      className="flex flex-1 rounded-md  bg-white text-gray2 shadow-sm focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gray6 dark:bg-gray1 dark:text-white dark:focus-within:outline-gray12"
    >
      <label
        className="inline-flex items-center rounded-l-md px-2 "
        htmlFor="search"
      >
        <MagnifyingGlassIcon />
      </label>
      <input
        className="-ml-px block w-full flex-1 rounded-r-md border-none bg-inherit pl-0 font-paragraph text-inherit focus:outline-none focus:ring-0 focus-visible:outline-none sm:text-sm"
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
      {value.trim().length > 0 ? (
        <button
          className="inline-flex items-center justify-center px-2"
          type="reset"
          onClick={onReset}
        >
          <Cross2Icon />
        </button>
      ) : null}
    </motion.div>
  );
}

export default SearchInput;
