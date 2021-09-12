import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Navigation from "../components/Navigation";
import HomeJumbo from "../components/HomeJumbo";
import HomeHowItWorks from "../components/HomeHowItWorks";
import Fade from "react-reveal/Fade";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeFeatures from "../components/HomeFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const listener = (e) => {
      // Override the theme only if the user didn't specify a preference
      if (getStoredTheme() === null) {
        const darkModeOn = e.matches;
        document.documentElement.setAttribute(
          "data-theme",
          darkModeOn ? "dark" : "light"
        );
      }
    };
    darkModeMediaQuery.addEventListener("change", listener);
    return () => {
      darkModeMediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <div className={styles.home}>
      <Navigation />
      <HomeJumbo />
      <div className={styles["dark-area"]}>
        <Fade bottom>
          <HomeHowItWorks />
        </Fade>
        <HomeTestimonials />
      </div>
      <HomeFeatures />
    </div>
  );
}

function getStoredTheme() {
  var theme = null;
  try {
    theme = localStorage.getItem("theme");
  } catch (err) {}
  return theme;
}
