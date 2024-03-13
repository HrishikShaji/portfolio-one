"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeline = useRef();

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    gsap.set(menuRef.current, { yPercent: 100 });
    timeline.current.to(menuRef.current, {
      yPercent: 0,
      duration: 2,
    });
  }, []);

  useEffect(() => {
    console.log(isOpen);
    isOpen ? timeline.current.play() : timeline.current.reverse();
  }, [isOpen]);
  return (
    <div className=" text-white  fixed z-50 top-0 w-full   flex flex-col">
      <div className="p-2 bg-red-500 flex gap-2">
        <button onClick={() => setIsOpen(!isOpen)} ref={buttonRef}>
          MENU
        </button>
        <h1 className="font-audiowide text-2xl">HRISHIK</h1>
      </div>
      <div className="flex  flex-grow bg-red-500 gap-4 h-screen" ref={menuRef}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
};
