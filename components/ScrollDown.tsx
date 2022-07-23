/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { animation, css } from "twind/css";

const ScrollDown = () => {
  const scrollAnimation = animation("2s ease-out infinite", {
    "0%": {
      transform: "translateY(0)",
      opacity: 1,
    },
    "25%": {
      opacity: 1,
    },
    "75%": {
      transform: "translateY(0.75em)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0)",
      opacity: 0,
    },
  });

  const iconStyle = tw(
    css({
      display: "block",
      position: "relative",
      height: "3em",
      width: "1.5em",
      border: "0.25em solid #fff",
      borderRadius: "1em",
      opacity: 0.8,
    }),
  );
  const dotStyle = tw(
    css(scrollAnimation, {
      display: "block",
      position: "absolute",
      left: "50%",
      background: "#fff",
      height: "0.5em",
      width: "0.5em",
      top: "0.6em",
      marginLeft: "-0.25em",
      borderRadius: "50%",
      transformOrigin: "top center",
      backfaceVisibility: "hidden",
    }),
  );

  return (
    <span className={iconStyle}>
      <span className={dotStyle}></span>
    </span>
  );
};

export default ScrollDown;
