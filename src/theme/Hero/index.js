import React from "react";
import clsx from "clsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Image from "@theme/IdealImage";

import screenshot1 from "@site/static/img/pages/light/s1.png";
import screenshot2 from "@site/static/img/pages/light/s2.png";
import screenshot3 from "@site/static/img/pages/light/s3.png";
import styles from "./styles.module.scss";

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <header id="hero" className={clsx("hero", styles.banner)}>
      <div className={clsx("shadow-md", styles.section)}>
        <div className={clsx("shadow-md", styles.sectionImgContainer)}>
          <Image
            img={screenshot1}
            className={clsx("shadow-md", styles.sectionImg)}
          />
        </div>
        <div className={clsx("shadow-md", styles.sectionContent)}>
          <h1 className={clsx("shadow-md", styles.sectionHeadline)}>
            场景搭建
          </h1>
          <h2 className={clsx("shadow-md", styles.sectionSub)}>
            从平台模型库通过拖拉拽的形式
            <br />
            快速完成模型场景搭建
          </h2>
        </div>
      </div>
      <div className={clsx("shadow-md", styles.section, styles.reverse)}>
        <div className={clsx("shadow-md", styles.sectionImgContainer)}>
          <Image
            img={screenshot2}
            className={clsx("shadow-md", styles.sectionImg)}
          />
        </div>
        <div className={clsx("shadow-md", styles.sectionContent)}>
          <h1 className={clsx("shadow-md", styles.sectionHeadline)}>
            数据面板加载
          </h1>
          <h2 className={clsx("shadow-md", styles.sectionSub)}>
            在前端插入可视化数据面板
            <br />
            用过多种样式图表实时
            <br />
            呈现数孪数据
          </h2>
        </div>
      </div>

      <div className={clsx("shadow-md", styles.section)}>
        <div className={clsx("shadow-md", styles.sectionImgContainer)}>
          <Image
            img={screenshot3}
            className={clsx("shadow-md", styles.sectionImg)}
          />
        </div>
        <div className={clsx("shadow-md", styles.sectionContent)}>
          <h1 className={clsx("shadow-md", styles.sectionHeadline)}>
            视角切换
          </h1>
          <h2 className={clsx("shadow-md", styles.sectionSub)}>
            通过下拉菜单的形式切换视图
            <br />
            切换正交透视视图更加
            <br />
            精准防止设备点位
          </h2>
        </div>
      </div>

      {/* <Image img={screenshot1} className={clsx("shadow-md", styles.image)} />
      <Image img={screenshot2} className={clsx("shadow-md", styles.image)} />
      <Image img={screenshot3} className={clsx("shadow-md", styles.image)} /> */}
    </header>
  );
}

export default Hero;
