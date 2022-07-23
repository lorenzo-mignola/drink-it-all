/** @jsx h */
import { ComponentChildren, Fragment, h } from "preact";
import { tw } from "@twind";
import { css } from "twind/css";
import CocktailIcon from "./CocktailIcon.tsx";

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  const customStyle = tw(
    css({
      fontWeight: "bold",
      display: "flex",
      width: "fit-content",
      gap: "5px",
      cursor: "pointer",
      "&:hover": {
        fontWeight: 800,
      },
    }),
  );

  return (
    <Fragment>
      <nav class={tw`bg-primary-dark p-5 sticky top-0 shadow-sm z-10`}>
        <a href="/">
          <h1
            className={tw`text(3xl white hover:bold) border(b-2 accent) inline ${customStyle}`}
          >
            DrinkItAll <CocktailIcon />
          </h1>
        </a>
      </nav>
      <main>{children}</main>
    </Fragment>
  );
}
