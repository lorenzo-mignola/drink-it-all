/** @jsx h */
import { h, ComponentChildren, Fragment } from 'preact';
import { tw } from '@twind';

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <div className={tw`bg-primary-dark p-4`}>
        <h1
          className={tw`text(3xl) border(b-2 accent) inline`}
          style={{ color: 'white', fontWeight: 'bold' }}
        >
          Header
        </h1>
      </div>
      {children}
    </Fragment>
  );
}
