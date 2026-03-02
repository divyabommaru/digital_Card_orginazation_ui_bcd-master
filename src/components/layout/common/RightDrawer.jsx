// //src/components/layout/common/RightDrawer.jsx
// export default function RightDrawer({ open, onClose, title, children }) {
//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/30 z-40 transition-opacity
//         ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
//         onClick={onClose}
//       />

//       {/* Drawer */}
//       <div
//         className={`fixed right-0 top-0 z-50 h-full bg-white shadow-2xl
//         w-full sm:w-[420px] md:w-[460px]
//         transform transition-transform duration-300
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-5 py-4 border-b bg-slate-50">
//           <h3 className="text-base font-semibold text-slate-800">{title}</h3>
//           <button
//             onClick={onClose}
//             className="h-8 w-8 flex items-center justify-center rounded-full
//             hover:bg-slate-200 text-slate-600"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-5 overflow-y-auto h-[calc(100%-64px)]">
//           {children}
//         </div>
//       </div>
//     </>
//   );
// }


// src/components/layout/common/RightDrawer.jsx
export default function RightDrawer({ open, onClose, title, children }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full bg-[hsl(var(--card-bg))] shadow-2xl border-l border-[hsl(var(--border))]
          w-full sm:w-[420px] md:w-[480px]
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary)/0.6)]">
          <h3 className="text-lg font-semibold text-[hsl(var(--text-primary))]">{title}</h3>
          <button
            onClick={onClose}
            className="h-9 w-9 flex items-center justify-center rounded-full
                     hover:bg-[hsl(var(--accent)/0.15)] text-[hsl(var(--text-secondary))]
                     transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-[calc(100%-64px)] text-[hsl(var(--text-primary))]">
          {children}
        </div>
      </div>
    </>
  );
}