import { useEffect, useRef } from "react";
import Typed from "typed.js";

function NameTyping() {
  const nameRef = useRef(null);

  useEffect(() => {
    const nameTyped = new Typed(nameRef.current, {
      strings: ["Hi! I am Amin"],
      typeSpeed: 80,
      showCursor: false,
    });

    return () => {
      nameTyped.destroy();
    };
  }, []);

  return (
    <>
      <span ref={nameRef}></span>
    </>
  );
}

export default NameTyping;
