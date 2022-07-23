/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { debounce } from "lodash";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { Drink } from "../types/Drink.ts";
import { CocktailService } from "../services/CocktailService.ts";

const loadSearchResult = async (
  searchValue: string,
  setResult: StateUpdater<Drink[]>,
) => {
  const searchFetch = await fetch(`/api/search?query=${searchValue}`);
  const searchResult = await searchFetch.json();
  setResult(searchResult);
};

const debouncedLoadSearch = debounce(loadSearchResult, 300);

export default function SearchInput() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState<Drink[]>([]);

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    setValue(target.value);
    debouncedLoadSearch(target.value, setSearchResult);
  };

  const showOptions = searchResult.length > 0;

  return (
    <Fragment>
      <input
        type="text"
        class={tw`b-0 p-5 rounded-lg w-11/12 md:w-7/12 opacity-90 focus-visible:outline-none text-xl`}
        placeholder="Search drink"
        // @ts-ignore
        onInput={handleChange}
        onBlur={() => setSearchResult([])}
        value={value}
        autofocus
        list=""
      />
      <ul
        class={tw`w-11/12 md:w-7/12 absolute block bg-white rounded-lg max-h-52 md:max-h-60 overflow-y-auto top-16 mt-2`}
      >
        {searchResult.map((drink) => (
          <li class={tw`p-4 text-xl hover:cursor-pointer hover:bg-gray-100`}>
            {drink.name}
          </li>
        ))}
      </ul>
      {
        /* <datalist
        id='searchResult'
        class={tw`w-11/12 md:w-7/12 absolute block bg-white rounded-lg max-h-1`}
        style={{
          top: 70
        }}
      >
        {val.map(v => (
          <option
            value='Boston'
            class={tw`p-4 hover:bg-pink  bg-white hover:cursor-pointer opacity-90`}
          >
            {v}
          </option>
        ))}
      </datalist> */
      }
    </Fragment>
  );
}
