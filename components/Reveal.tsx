"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Enable the CSS hide+animate system on first client mount
    document.documentElement.classList.add("reveal-on");
    setMounted(true);

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setShown(true); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Backstop: guarantee visible after 2.5s no matter what
    const t = setTimeout(() => setShown(true), 2500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  // Before mount: no reveal class → fully visible (SSR-safe)
  const cls = [
    className,
    mounted ? "reveal" : "",
    mounted && shown ? "in" : "",
  ].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={cls} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}
