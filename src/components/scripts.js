"use client";
import { useEffect } from "react";
import Script from "next/script";

const ProgressCircle = () => {
  useEffect(() => {
    // Initialize plugins after jQuery and all dependencies are loaded
    const initPlugins = () => {
      if (window.jQuery) {
        if (window.WOW) new window.WOW().init();
        if (window.sal) window.sal();
        if (window.jQuery.fn.counterUp) {
          window.jQuery(".counter").counterUp();
        }
      }
    };

    // Check if jQuery is loaded, otherwise wait for the window load event
    window.jQuery ? initPlugins() : window.addEventListener("load", initPlugins);
  }, []);

  return (
    <div className="rbt-progress-parent">
      <svg
        className="rbt-back-circle svg-inner"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>

      {/* Core libraries and dependencies */}
      <Script src="/assets/js/vendor/jquery.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/vendor/bootstrap.min.js" strategy="afterInteractive" />

      {/* Dependent plugins loaded after jQuery */}
      <Script src="/assets/js/vendor/jquery-one-page-nav.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/waypoint.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/counterup.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/sal.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/slick.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/bootstrap-select.min.js" strategy="lazyOnload" />

      {/* Additional scripts (low priority) */}
      <Script src="/assets/js/vendor/modernizr.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/text-type.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/prism.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/jquery.style.swicher.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/backto-top.js" strategy="lazyOnload" />
      <Script src="/assets/js/vendor/js.cookie.js" strategy="lazyOnload" />
      
      {/* Main custom script */}
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </div>
  );
};

export default ProgressCircle;
