"use client"
import { useEffect, useRef } from "react";

import Typed from 'typed.js';

export default function TypeEffect({titles}) {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: titles,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: 3,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <span className="text-primary" ref={el}></span>
  )
}