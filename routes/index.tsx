/** @jsx h */
import { tw } from '@twind';
import { h } from 'preact';
import { css } from 'twind/css';
import Layout from '../components/Layout.tsx';

export default function Home() {
  const customStyle = tw(
    css({
      background: `url('/bg.jpg') no-repeat center center fixed`,
      backgroundSize: 'cover',
      height: 'calc(100vh - 230px)'
    })
  );
  return (
    <Layout>
      <div class={tw`w-screen h-1/2 bg-red-500 ${customStyle}`}></div>;
    </Layout>
  );
}
