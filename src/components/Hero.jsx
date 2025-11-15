import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

// Replace with your own punchline/tagline if desired
const TAGLINES = [
  "Full Stack Web Developer.",
  "Generative AI Engineer.",
  "Software Developer.",
  "IOT Enthusiast.",
  "Final Year ECE Undergrad.",
  "Problem Solver."
];

export default function Hero() {
  const typedRef = useRef(null);

  const handleScrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      strings: TAGLINES,
      typeSpeed: 62,
      backSpeed: 35,
      backDelay: 1400,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      startDelay: 200,
    };
    typedRef.current = new Typed("#typed-title", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  // SVG down arrow for scroll cue
  const DownArrow = () => (
    <svg
      width="34"
      height="34"
      viewBox="0 0 20 20"
      fill="none"
      className="hero-down-arrow"
      onClick={handleScrollToAboutMe}
      style={{ cursor: "pointer", marginTop: "2.5rem" }}
    >
      <path
        d="M10 15L4 9.5l1.42-1.42L10 12.17l4.58-4.09L16 9.5z"
        fill="#b3d8e8"
      />
    </svg>
  );

  return (
    <section
      className="section-hero"
      style={{
        padding: "0",
        minHeight: "96vh",
        background: "linear-gradient(120deg, #121921 0%, #18212b 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="hero-content"
        style={{
          width: "100%",
          maxWidth: "660px",
          padding: "5.5rem 2.2rem 4.5rem 2.2rem",
          textAlign: "center",
          boxShadow: "0 1px 28px 0 rgba(31,49,64,.11),0 .5px 1.5px 0 #357fa735",
          borderRadius: "38px",
          background:
            "linear-gradient(120deg, rgba(20,28,41,0.88) 80%, rgba(53,127,167,0.09) 105%)",
        }}
      >
        <div
          style={{
            width: "68px",
            height: "4px",
            background: "linear-gradient(90deg, #357fa7 38%, #b3d8e8 100%)",
            borderRadius: "5px",
            margin: "0 auto 5.2rem auto",
          }}
        />
        <h1
  style={{
    fontSize: "clamp(2.4rem, 6vw, 4.8rem)",   // smaller on mobile
    fontWeight: 600,
    letterSpacing: "-0.5px",
    marginBottom: "0.8rem",
    color: "#f4eeee",
    lineHeight: "1.2",                        // tighter spacing prevents breaking
    wordBreak: "keep-all",                    // prevent splitting "Ketan Bajpai"
    whiteSpace: "nowrap",                     // keep on one line on mobile
  }}
>
          Hi, I&apos;m{" "}
          <span
            style={{
              color: "#b3d8e8",
              cursor: "pointer",
            }}
            onClick={handleScrollToAboutMe}
          >
            Ketan Bajpai
          </span>
        </h1>
        <p
          style={{
            fontSize: "2.3rem",
            fontWeight: 400,
            color: "#b3d8e8",
            minHeight: "32px",
            margin: "0 0 2.3rem 0",
            letterSpacing: "0.01em",
            display: "inline-block",
          }}
        >
          <span id="typed-title" />
        </p>
        <p
          style={{
            fontSize: "1.7rem",
            lineHeight: 1.7,
            color: "#e2ecf0c7",
          }}
        >
          Welcome to my portfolio. Explore my work, skills, and story below.
        </p>
        <DownArrow />
      </div>
    </section>
  );
}
