import { useEffect, useRef } from "react";
import Typed from "typed.js";

function RoleTyping() {
  const roleRef = useRef(null);

  useEffect(() => {
    const roleTyped = new Typed(roleRef.current, {
      strings: ["Front End Developer", "React Developer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      startDelay: 1500,
      loop: true,
      showCursor: true,
    });

    return () => {
      roleTyped.destroy();
    };
  }, []);

  return <span ref={roleRef}></span>;
}

export default RoleTyping;
