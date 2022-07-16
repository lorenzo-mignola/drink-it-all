/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export default function SearchInput() {
  return (
    <input
      type='text'
      className={tw`b-0 p-5 rounded-lg w-11/12 md:w-7/12 opacity-90 focus-visible:outline-none text-xl`}
      placeholder='Search drink'
    />
  );
}
