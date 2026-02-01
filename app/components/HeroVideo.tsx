// Purpose: Reusable hero with ambient background video and readable overlay.
import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";

export type HeroVideoProps = {
  videoSrc: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

// HeroVideo handles layout + reduced-motion logic so pages stay simple.
export function HeroVideo({
  videoSrc,
  headline,
  subheadline,
  primaryCta,
  secondaryCta
}: HeroVideoProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // If a user prefers reduced motion, we avoid autoplay video.
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <div className="hero-video">
      {/* Background video is only rendered when motion is allowed. */}
      {!reduceMotion && (
        <video
          className="hero-video-media"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
      {/* Overlay keeps text readable on top of the video. */}
      <div className="hero-video-overlay" aria-hidden="true" />
      {/* Content is layered above video + overlay. */}
      <div className="hero-video-content">
        <h1>{headline}</h1>
        <p>{subheadline}</p>
        <div className="cta-row">
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
          <CtaButton href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </CtaButton>
        </div>
        <p className="hero-note">No hype. Just outcomes.</p>
      </div>
    </div>
  );
}
