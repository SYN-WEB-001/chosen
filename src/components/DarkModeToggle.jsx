import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="absolute top-4 sm:right-6 lg:right-8 z-10 backdrop-blur-sm px-3 py-1.5 rounded-xl text-2xl font-medium text-gray-800 bg-gradient-to-br from-pink-500 to-purple-600 transition shadow-md border border-white/50 flex items-center gap-1"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}