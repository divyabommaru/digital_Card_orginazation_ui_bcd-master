// //src/components/Loader.jsx
// export default function Loader() {
//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
//       <div className="flex flex-col items-center gap-4">
//         {/* Animated Icon */}
//         <div className="h-12 w-12 rounded-full border-4 border-white/30 border-t-white animate-spin" />

//         {/* Optional text */}
//         <p className="text-white text-sm tracking-wide">Loading...</p>
//       </div>
//     </div>
//   );
// }


// src/components/Loader.jsx
export default function Loader({ show = true, text = "Loading..." }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="flex flex-col items-center gap-5">
        {/* Animated Spinner – orange accent */}
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-orange-900/30 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 animate-spin" />
        </div>

        {/* Text */}
        {text && (
          <p className="text-orange-400 text-sm font-medium tracking-wide animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}