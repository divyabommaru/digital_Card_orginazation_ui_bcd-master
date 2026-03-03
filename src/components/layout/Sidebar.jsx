// //src/components/layout/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const menu = [
//   { name: "Dashboard", path: "/", icon: "🏠" },
//   { name: "My Staff", path: "/staff-cards", icon: "👥" },
//   { name: "Transactions", path: "/transactions", icon: "💳" },
//   { name: "Settings", path: "/settings", icon: "⚙️" },
//   { name: "Calendar", path: "/my-calender", icon: "📅" },
// ];

// export default function Sidebar() {
//   const { user, loading, brand } = useAuth();

//   if (loading) return null; // ⛔ wait until auth boot finishes

//   // const brandName = user?.organization_name || user?.name || "Organization";
//   const brandName = brand?.brand_name || "Organization";

//   // console.log("Sidebar Rendered with brandName:", brand.brand_name);

//   const brandInitial = brandName.charAt(0).toUpperCase();

//   return (
//     <aside className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl z-40">
//       <div className="h-full flex flex-col">
//         {/* ================= BRAND ================= */}
//         <div className="px-6 py-6 border-b border-white/10 flex items-center gap-3">
//           {/* LOGO */}
//           <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-lg shadow">
//             {brandInitial}
//           </div>

//           {/* BRAND NAME */}
//           <div className="overflow-hidden">
//             <h1 className="text-lg font-extrabold leading-tight truncate">
//               {brandName}
//             </h1>
//             <p className="text-xs text-white/50">Organization</p>
//           </div>
//         </div>

//         {/* ================= MENU ================= */}
//         <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
//           {menu.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
//                 ${
//                   isActive
//                     ? "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
//                     : "hover:bg-white/10"
//                 }`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span className="font-medium">{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* ================= FOOTER ================= */}
//         <div className="px-6 py-4 border-t border-white/10 text-xs text-white/60">
//           © {new Date().getFullYear()} OneDesk
//         </div>
//       </div>
//     </aside>
//   );
// }


// // src/components/layout/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import {
//   LayoutDashboard,
//   Building2,
//   ReceiptIndianRupee,
//   Settings,
//   Calendar,
//   Users,           // ← Added for "My Staff"
// } from "lucide-react";

// const menu = [
//   { name: "Dashboard", path: "/", icon: LayoutDashboard },
//   { name: "Organizations", path: "/organizations", icon: Building2 },
//   { name: "My Staff", path: "/staff-cards", icon: Users },           // ← Added
//   { name: "Transactions", path: "/transactions", icon: ReceiptIndianRupee },
//   { name: "Settings", path: "/settings", icon: Settings },
//   { name: "Calendar", path: "/my-calender", icon: Calendar },
// ];

// export default function Sidebar() {
//   const { user, loading, brand } = useAuth();

//   if (loading) return null; // Wait until auth boot finishes

//   const brandName = brand?.brand_name || user?.organization_name || user?.name || "One Desk Digital";
//   const brandInitial = brandName.charAt(0).toUpperCase();

//   return (
//     <aside className="fixed inset-y-0 left-0 w-64 bg-[hsl(var(--card-bg))] border-r border-[hsl(var(--border))] shadow-2xl z-40 hidden lg:block transition-colors duration-200">
//       <div className="h-full flex flex-col">
//         {/* Brand / Logo */}
//         <div className="px-6 py-6 border-b border-[hsl(var(--border))] flex items-center gap-4 bg-[hsl(var(--bg-secondary)/0.6)]">
//           {/* LOGO / INITIAL */}
//           <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))] flex items-center justify-center font-bold text-white shadow-md flex-shrink-0">
//             {brand?.logo ? (
//               <img
//                 src={brand.logo}
//                 alt="Logo"
//                 className="h-6 w-6 object-contain"
//               />
//             ) : (
//               brandInitial
//             )}
//           </div>

//           {/* BRAND NAME */}
//           <div className="min-w-0">
//             <h1 className="text-xl font-extrabold tracking-tight text-[hsl(var(--text-primary))] truncate">
//               {brandName}
//             </h1>
//             <p className="text-xs text-[hsl(var(--accent))/90] mt-0.5 font-medium">
//             Organization
//             </p>
//           </div>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
//           {menu.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `group flex items-center gap-3.5 px-5 py-3.5 rounded-xl transition-all duration-200 font-medium
//                 ${
//                   isActive
//                     ? "bg-[hsl(var(--accent))] text-white shadow-md"
//                     : "text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent)/0.12)] hover:text-[hsl(var(--accent))]"
//                 }`
//               }
//             >
//               <item.icon
//                 size={22}
//                 strokeWidth={2.2}
//                 className="opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0 text-[hsl(var(--text-secondary))]"
//               />
//               <span className="truncate">{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* Footer */}
//         <div className="px-6 py-4 border-t border-[hsl(var(--border))] text-xs text-[hsl(var(--text-muted))] mt-auto">
//           © {new Date().getFullYear()} {brandName}. All rights reserved.
//         </div>
//       </div>
//     </aside>
//   );
// }

// src/components/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Building2,
  ReceiptIndianRupee,
  Settings,
  Calendar,
  Users,
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Organizations", path: "/organizations", icon: Building2 },
  { name: "My Staff", path: "/staff-cards", icon: Users },
  { name: "Transactions", path: "/transactions", icon: ReceiptIndianRupee },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Calendar", path: "/my-calender", icon: Calendar },
];

export default function Sidebar() {
  const { user, loading, brand } = useAuth();

  if (loading) return null; // Wait for auth to load

  // Use organization name & logo from settings (same as Dashboard)
  const orgName = brand?.brand_name || user?.organization_name || user?.name || "One Desk Digital";
  const orgLogo = brand?.logo_url || "/assets/logo.jpeg"; // fallback
  const orgInitial = orgName.charAt(0).toUpperCase();

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-[hsl(var(--card-bg))] border-r border-[hsl(var(--border))] shadow-2xl z-40 hidden lg:block transition-colors duration-200">
      <div className="h-full flex flex-col">
        {/* Organization Logo + Name – same style as Dashboard */}
        <div className="px-6 py-6 border-b border-[hsl(var(--border))] flex items-center gap-4 bg-[hsl(var(--bg-secondary)/0.6)]">
          {/* Logo / Initial Circle */}
          <div className="w-16 h-16 rounded-8xl  flex items-center justify-center font-bold text-white shadow-md flex-shrink-0 overflow-hidden ">
            {orgLogo ? (
              <img
                src={orgLogo}
                alt={orgName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(orgName) + "&background=random&color=fff";
                }}
              />
            ) : (
              orgInitial
            )}
          </div>

          {/* Organization Name */}
          <div className="min-w-0">
            <h1 className="text-xl font-extrabold tracking-tight text-[hsl(var(--text-primary))] truncate">
             Organization
            </h1>
            {/* <p className="text-xs text-[hsl(var(--accent))/90] mt-0.5 font-medium">
              Organization
            </p> */}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3.5 px-5 py-3.5 rounded-xl transition-all duration-200 font-medium
                ${
                  isActive
                    ? "bg-[hsl(var(--accent))] text-white shadow-md"
                    : "text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent)/0.12)] hover:text-[hsl(var(--accent))]"
                }`
              }
            >
              <item.icon
                size={22}
                strokeWidth={2.2}
                className="opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0 text-[hsl(var(--text-secondary))]"
              />
              <span className="truncate">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[hsl(var(--border))] text-xs text-[hsl(var(--text-muted))] mt-auto">
          © {new Date().getFullYear()} {orgName}. All rights reserved.
        </div>
      </div>
    </aside>
  );
}

// // src/components/layout/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import {
//   LayoutDashboard,
//   Building2,
//   ReceiptIndianRupee,
//   Settings,
//   Calendar,
//   Users,
// } from "lucide-react";

// const menu = [
//   { name: "Dashboard", path: "/", icon: LayoutDashboard },
//   { name: "Organizations", path: "/organizations", icon: Building2 },
//   { name: "My Staff", path: "/staff-cards", icon: Users },
//   { name: "Transactions", path: "/transactions", icon: ReceiptIndianRupee },
//   { name: "Settings", path: "/settings", icon: Settings },
//   { name: "Calendar", path: "/my-calender", icon: Calendar },
// ];

// export default function Sidebar() {
//   const { user, loading, brand } = useAuth();

//   if (loading) return null; // Wait for auth to load

//   // Use organization name & logo from settings (same as Dashboard)
//   const orgName = brand?.brand_name || user?.organization_name || user?.name || "One Desk Digital";
//   const orgLogo = brand?.logo_url || "/assets/logo.jpeg"; // fallback
//   const orgInitial = orgName.charAt(0).toUpperCase();

//   return (
//     <aside className="fixed inset-y-0 left-0 w-72 bg-[hsl(var(--card-bg))] border-r border-[hsl(var(--border))] shadow-2xl z-40 hidden lg:block transition-colors duration-200"> {/* ← wider: w-72 */}
//       <div className="h-full flex flex-col">
//         {/* Organization Logo + Name – full name, no truncate */}
//         <div className="px-6 py-8 border-b border-[hsl(var(--border))] flex items-center gap-5 bg-[hsl(var(--bg-secondary)/0.6)]"> {/* ← more padding */}
//           {/* Logo / Initial Circle */}
//           <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--accent))] flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0 overflow-hidden ">
//             {orgLogo ? (
//               <img
//                 src={orgLogo}
//                 // alt={orgName}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(orgName) + "&background=random&color=fff";
//                 }}
//               />
//             ) : (
//               orgInitial
//             )}
//           </div>

//           {/* Organization Name – full display */}
//           <div className="min-w-0 flex-1">
//             <h1 className="text-2xl font-extrabold tracking-tight text-[hsl(var(--text-primary))] leading-tight">
//               {orgName}
//             </h1>
//             <p className="text-sm text-[hsl(var(--accent))/90] mt-1 font-medium">
//               Organization
//             </p>
//           </div>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 px-5 py-6 space-y-2 overflow-y-auto">
//           {menu.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `group flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-200 font-medium
//                 ${
//                   isActive
//                     ? "bg-[hsl(var(--accent))] text-white shadow-md"
//                     : "text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent)/0.12)] hover:text-[hsl(var(--accent))]"
//                 }`
//               }
//             >
//               <item.icon
//                 size={24}
//                 strokeWidth={2.2}
//                 className="opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0 text-[hsl(var(--text-secondary))]"
//               />
//               <span className="text-base truncate">{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* Footer */}
//         <div className="px-6 py-5 border-t border-[hsl(var(--border))] text-sm text-[hsl(var(--text-muted))] mt-auto text-center">
//           © {new Date().getFullYear()} {orgName}. All rights reserved.
//         </div>
//       </div>
//     </aside>
//   );
// }