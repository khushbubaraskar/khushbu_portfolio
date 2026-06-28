import { useRef } from "react";
import { useSpring } from "framer-motion";

/**
 * Magnetic hover effect: the element is gently pulled toward the cursor
 * while hovered, then springs back. Returns props to spread on the element
 * and the spring values to drive a motion element transform.
 */
export function useMagnetic(strength = 0.4) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, x, y, handleMouseMove, handleMouseLeave };
}
