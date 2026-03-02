// //src/components/ThemeToggle.jsx
// export default function ThemeToggle({ dark, setDark }) {
//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 
//                  text-gray-700 dark:text-gray-200 text-sm font-medium 
//                  hover:bg-gray-100 dark:hover:bg-gray-700 transition"
//     >
//       {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
//     </button>
//   );
// }
// src/components/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2.5 rounded-xl bg-[hsl(var(--accent)/0.15)] hover:bg-[hsl(var(--accent)/0.3)]
                 text-[hsl(var(--accent))] transition-all duration-200 flex items-center gap-2
                 border border-[hsl(var(--accent)/0.3)] shadow-sm"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <>
          <Sun size={18} /> <span className="text-sm font-medium">Light</span>
        </>
      ) : (
        <>
          <Moon size={18} /> <span className="text-sm font-medium">Dark</span>
        </>
      )}
    </button>
  );
}