/** @jsx h */
import { h, ComponentChildren, Fragment } from 'preact';
import { tw } from '@twind';
import { css } from 'twind/css';

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  const customStyle = tw(css({ fontWeight: 'bold' }));

  return (
    <Fragment>
      <nav className={tw`bg-primary-dark p-5 sticky top-0 shadow-sm`}>
        <h1
          className={tw`text(3xl white bold) border(b-2 accent) inline ${customStyle}`}
        >
          DrinkItAll
        </h1>
      </nav>
      <main className={tw`p-3`}>{children}</main>
    </Fragment>
  );
}
