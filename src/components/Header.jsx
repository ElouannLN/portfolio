"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-4 left-0 right-0 z-50 bg-white border-b-2 border-orange-300 shadow-md rounded-xl w-xl max-w-[80%] mx-auto"
        >
          <div className="px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-darumadrop font-semibold">ElouannLN/portfolio</h1>
            <DropdownMenu />
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
