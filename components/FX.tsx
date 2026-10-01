"use client";
import { useEffect, useState } from "react";

/** Cursor spotlight: sets --mx/--my on whichever card the pointer is over. */
export function Spotlight() {
  useEffect(() => {
    const move = (e: PointerEvent) => {
      document.querySelectorAll<HTMLElement>(".card").forEach((c) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${e.clientX - r.left}px`);
        c.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return null;
}

/** Types out each role, deletes it, then moves to the next. */
export function Typing({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, i = words[0].length, del = true, t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      setText(word.slice(0, i));
      let wait = del ? 40 : 80;
      if (!del && i === word.length) { del = true; wait = 1500; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 300; }
      t = setTimeout(tick, wait);
    };
    t = setTimeout(tick, 1500);
    return () => clearTimeout(t);
  }, [words]);
  return <span className="typing" aria-label={words.join(", ")}>{text}<i className="caret" /></span>;
}

/** Profile photo from /public. Falls back to initials if the file is missing. */
export function Avatar({ src, name }: { src: string; name: string }) {
  const [ok, setOk] = useState(true);
  const initials = name.split(" ").map((w) => w[0]).join("");
  return (
    <div className="avatar">
      {ok ? <img src={src} alt={`Photo of ${name}`} onError={() => setOk(false)} /> : <span>{initials}</span>}
    </div>
  );
}
