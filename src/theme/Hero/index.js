import React from "react";
import clsx from "clsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Image from "@theme/IdealImage";

import screenshot from "@site/static/img/pages/light/homepage-screenshot.png";
import styles from "./styles.module.scss";

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <header id="hero" className={clsx("hero", styles.banner)}>
      <div className="container">
        <img
          src={useBaseUrl(`img/logo.svg`)}
          alt="Logo"
          className={styles.logo}
        />

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>

        {/* <div className={styles.buttons}>
          <AnchorLink
            className={clsx("button button--primary button--lg", styles.button)}
            href="#download"
          >
            Download
          </AnchorLink>
        </div> */}
      </div>

      {/* <video loop="" preload="metadata"  class="bg-video-html5 html-video" data-contentid="923053264" width="1512" height="850">
        <source src="https://cdn2.unrealengine.com/homepage-opener-5a55a50aaa4c.mp4">Your browser does not support HTML5 video.</source>
        </video> */}
      <Image img={screenshot} className={clsx("shadow-md", styles.image)} />
    </header>
  );
}

export default Hero;
