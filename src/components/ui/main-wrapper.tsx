import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

function MainWrapper({children}: Props) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-0">{children}</main>
  );
}

export default MainWrapper;
