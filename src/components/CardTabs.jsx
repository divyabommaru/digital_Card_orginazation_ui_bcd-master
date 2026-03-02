// //src/components/CardTabs.jsx
// export default function CardTabs({ active, setActive, counts }) {
//   return (
//     <div className="flex gap-2 mb-6">
//       {["assigned", "unassigned"].map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setActive(tab)}
//           className={`px-4 py-2 rounded-lg text-sm font-medium ${
//             active === tab
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-100 text-gray-600"
//           }`}
//         >
//           {tab === "assigned"
//             ? `Assigned Cards (${counts.assigned})`
//             : `Unassigned Cards (${counts.unassigned})`}
//         </button>
//       ))}
//     </div>
//   );
// }


// src/components/CardTabs.jsx
export default function CardTabs({ active, setActive, counts }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {["assigned", "unassigned"].map((tab) => {
        const isActive = active === tab;
        const label =
          tab === "assigned"
            ? `Assigned Cards (${counts.assigned || 0})`
            : `Unassigned Cards (${counts.unassigned || 0})`;

        return (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
              shadow-sm hover:shadow-md active:scale-[0.98]
              ${
                isActive
                  ? "bg-[hsl(var(--accent))] text-white shadow-md"
                  : "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent)/0.15)]"
              }
              border border-[hsl(var(--border))]
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}