/** @jsx h */
import { h, ComponentChildren, Fragment } from 'preact';
import { tw } from '@twind';
import { css } from 'twind/css';

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  const customStyle = tw(css({ color: 'white', fontWeight: 'bold' }));

  return (
    <Fragment>
      <div className={tw`bg-primary-dark p-4`}>
        <h1 className={tw`text(3xl) border(b-2 accent) inline ${customStyle}`}>
          Header
        </h1>
      </div>
      {children}
    </Fragment>
  );
}
