// //src/components/layout/BottomNav.jsx
// import { NavLink } from "react-router-dom";
// import { Users } from "lucide-react";

// export default function BottomNav() {
//   return (
//     <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t shadow z-50">
//       <div className="flex justify-around py-2 text-xs">
//         <NavLink to="/" className="flex flex-col items-center">
//           🏠
//           <span>Home</span>
//         </NavLink>

//         <NavLink to="/staff-cards" className="flex flex-col items-center">
//           👥
//           <span>Staff</span>
//         </NavLink>

//         <NavLink to="/transactions" className="flex flex-col items-center">
//           💳
//           <span>Transactions</span>
//         </NavLink>

//         <NavLink to="/settings" className="flex flex-col items-center">
//           ⚙️
//           <span>Settings</span>
//         </NavLink>
//       </div>
//     </div>
//   );
// }


// src/components/layout/BottomNav.jsx
import { NavLink } from "react-router-dom";
import { Home, Users, CreditCard, Settings } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[hsl(var(--card-bg)/0.95)] backdrop-blur-lg border-t border-[hsl(var(--border))] shadow-lg z-50">
      <div className="flex justify-around items-center py-2.5 px-2 text-xs">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all duration-200 ${
              isActive
                ? "text-[hsl(var(--accent))] scale-105"
                : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))]/90 active:scale-95"
            }`
          }
        >
          <Home size={20} strokeWidth={2.2} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/staff-cards"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all duration-200 ${
              isActive
                ? "text-[hsl(var(--accent))] scale-105"
                : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))]/90 active:scale-95"
            }`
          }
        >
          <Users size={20} strokeWidth={2.2} />
          <span>Staff</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all duration-200 ${
              isActive
                ? "text-[hsl(var(--accent))] scale-105"
                : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))]/90 active:scale-95"
            }`
          }
        >
          <CreditCard size={20} strokeWidth={2.2} />
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-all duration-200 ${
              isActive
                ? "text-[hsl(var(--accent))] scale-105"
                : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))]/90 active:scale-95"
            }`
          }
        >
          <Settings size={20} strokeWidth={2.2} />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}