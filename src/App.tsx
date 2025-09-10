import React, { useEffect, useState } from "react";
import { GlassElement } from "./GlassElement/GlassElement";
import "./styles.css";

/**
 * /!\ You need a chromium-based browser to see the effect /!\
 */

export default function App() {
  const [vw, setVw] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = vw <= 640;
  const pagePadding = 32;
  const gap = 16;
  const socialCount = 4;
  const socialSize = Math.max(
    48,
    Math.min(96, Math.floor((vw - pagePadding * 2 - gap * (socialCount - 1)) / socialCount))
  );
  const titleWidth = Math.max(280, Math.min(700, vw - pagePadding * 2));
  const titleHeight = isMobile ? 110 : 130;
  const titleRadius = isMobile ? 22 : 32;
  const multilineTitle = titleWidth < 520;

  return (
    <>
      <div className="overlay">
          <h1 className="site-title">
            {multilineTitle ? (
              <>
                <span className="tilt-e">e</span>mir
                <br />
                yüc<span className="tilt-e tilt-e--r">e</span>dağ
              </>
            ) : (
              <>
                <span className="tilt-e">e</span>mir yüc
                <span className="tilt-e tilt-e--r">e</span>dağ
              </>
            )}
          </h1>
        <div className="social-grid" aria-label="Social links">
          <GlassElement
            width={socialSize}
            height={socialSize}
            radius={Math.round(socialSize * 0.27)}
            depth={1}
            blur={1}
            chromaticAberration={5}
            className="social-box"
          >
            <a
              href="https://x.com/emirverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="social-icons icon-link"
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </GlassElement>
          <GlassElement
            width={socialSize}
            height={socialSize}
            radius={Math.round(socialSize * 0.27)}
            depth={1}
            blur={1}
            chromaticAberration={5}
            className="social-box"
          >
            <a
              href="https://www.instagram.com/emir_yucedag/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icons icon-link"
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </GlassElement>
          <GlassElement
            width={socialSize}
            height={socialSize}
            radius={Math.round(socialSize * 0.27)}
            depth={1}
            blur={1}
            chromaticAberration={5}
            className="social-box"
          >
            <a
              href="https://www.linkedin.com/in/emir-yucedag/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icons icon-link"
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
          </GlassElement>
          <GlassElement
            width={socialSize}
            height={socialSize}
            radius={Math.round(socialSize * 0.27)}
            depth={1}
            blur={1}
            chromaticAberration={5}
            className="social-box"
          >
            <a
              href="mailto:contact@emiryucedag.com"
              aria-label="Email"
              className="social-icons icon-link"
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
              </svg>
            </a>
          </GlassElement>
        </div>
      </div>
    </>
  );
}
