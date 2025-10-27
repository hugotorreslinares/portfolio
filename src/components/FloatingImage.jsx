import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/images/512.png",
  "/images/leon.png",
  "/images/nino.png",
  "/images/hugo.png",
  "/images/malo.jpg",
  "/images/matilda.png",
  "/images/risa.jpg",
  "/images/monomalito.jpg",
];

const randBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function FloatingImage() {
  const [visible, setVisible] = useState(false);
  const [src, setSrc] = useState(IMAGES[0]);
  const [top, setTop] = useState("20%");
  const scheduleRef = useRef(null);
  const hideRef = useRef(null);
  const jsConfettiRef = useRef(null);

  useEffect(() => {
    // dynamic import to ensure Vite resolves the package at runtime
    let mounted = true;
    (async () => {
      try {
        const mod = await import("js-confetti");
        if (!mounted) return;
        // avoid optional-chaining with `new` — use explicit checks
        if (mod && mod.default) {
          jsConfettiRef.current = new mod.default();
        } else if (mod && mod.JSConfetti) {
          jsConfettiRef.current = new mod.JSConfetti();
        } else {
          jsConfettiRef.current = null;
        }
      } catch (err) {
        // fallback: library couldn't be loaded
        console.warn("Failed to load js-confetti:", err);
      }
    })();

    function schedule() {
      // random delay between 10s and 20s before next peek
      const delay = randBetween(10000, 20000);
      scheduleRef.current = setTimeout(() => {
        if (!mounted) return;

        setSrc(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
        // keep top within safe bounds (10% - 80%)
        setTop(`${randBetween(10, 80)}%`);
        setVisible(true);

        // hide after 5 seconds, then schedule next
        hideRef.current = setTimeout(() => {
          if (!mounted) return;
          setVisible(false);
          // schedule next peek after a short buffer
          schedule();
        }, 5000);
      }, delay);
    }

    schedule();

    return () => {
      mounted = false;
      if (scheduleRef.current) clearTimeout(scheduleRef.current);
      if (hideRef.current) clearTimeout(hideRef.current);
      jsConfettiRef.current = null;
    };
  }, []);

  const handleClick = () => {
    try {
      jsConfettiRef.current?.addConfetti({
        emojis: [
          "🎉",
          "✨",
          "🔥",
          "💥",
          "🐶",
          "🐱",
          "🦊",
          "🐼",
          "🐵",
          "💻",
          "🖱️",
          "🔧",
          "⭐",
        ],
        emojiSize: 24,
        confettiNumber: 42,
      });
    } catch (e) {
      // fail silently
    }
  };

  return (
    <div
      className={`floating-image ${visible ? "visible" : ""}`}
      style={{ top }}
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        className="floating-image__img"
        draggable="false"
        onClick={handleClick}
      />
    </div>
  );
}
