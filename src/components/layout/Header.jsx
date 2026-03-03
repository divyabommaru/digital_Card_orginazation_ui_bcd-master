// //src/components/layout/Header.jsx
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// export default function Header() {
//   const { logout, user } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <header className="h-16 bg-white/80 backdrop-blur-md shadow flex items-center justify-between px-6">
//       <h2 className="text-lg font-semibold">
//         Welcome, <span className="text-indigo-600">{user?.name}</span>
//       </h2>

//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => navigate("/settings")}
//           className="text-slate-600 hover:text-indigo-600 text-sm"
//         >
//           Settings
//         </button>

//         <button
//           onClick={() => {
//             logout();
//             navigate("/login");
//           }}
//           className="text-red-500 text-sm font-medium"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// }


// // src/components/layout/Header.jsx
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { LogOut, Settings, Sun, Moon } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext"; // ← import this

// export default function Header() {
//   const { logout, user } = useAuth();
//   const { isDark, toggleTheme } = useTheme(); // ← get dark mode state & toggle function
//   const navigate = useNavigate();

//   return (
//     <header className="h-16 bg-[hsl(var(--card-bg))] backdrop-blur-md border-b border-[hsl(var(--border))] shadow-sm flex items-center justify-between px-5 sm:px-6 z-30 transition-colors duration-200">
//       {/* Left: Welcome + Brand */}
//       <div className="flex items-center gap-4">
//         {/* <div className="w-9 h-9 rounded-lg bg-[hsl(var(--accent))] flex items-center justify-center shadow-md">
//           <span className="text-white font-bold text-lg">O</span>
//         </div> */}
//         <h2 className="text-lg font-semibold text-[hsl(var(--text-primary))] truncate max-w-[45%]">
//           Welcome,{" "}
//           <span className="text-[hsl(var(--accent))] font-bold">
//             {user?.name?.split(" ")[0] || "Demo Admin"}
//           </span>
//         </h2>
//       </div>

//       {/* Right: Actions */}
//       <div className="flex items-center gap-4 sm:gap-6">
//         {/* Theme Toggle – Sun / Moon icon */}
//         <button
//           onClick={toggleTheme}
//           className="p-2 rounded-full hover:bg-[hsl(var(--accent)/0.15)] 
//                      text-[hsl(var(--accent))] transition-colors duration-200"
//           title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         >
//           {isDark ? <Sun size={20} /> : <Moon size={20} />}
//         </button>

//         {/* Settings */}
//         <button
//           onClick={() => navigate("/settings")}
//           className="flex items-center gap-2 text-sm font-medium 
//                      text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent))]
//                      transition-colors duration-200"
//           title="Settings"
//         >
//           <Settings size={18} />
//           <span className="hidden sm:inline">Settings</span>
//         </button>

//         {/* Logout */}
//         <button
//           onClick={() => {
//             logout();
//             navigate("/login");
//           }}
//           className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
//                      bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]
//                      hover:bg-[hsl(var(--accent)/0.25)] hover:text-white
//                      transition-all duration-200 shadow-sm"
//           title="Logout"
//         >
//           <LogOut size={18} />
//           <span className="hidden sm:inline">Logout</span>
//         </button>
//       </div>
//     </header>
//   );
// }

// src/components/layout/Header.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, Settings, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { logout, user, brand } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  // Organization name from auth context (same source as Settings)
  const orgName = brand?.brand_name || user?.organization_name || "Organization";

  return (
    <header className="h-16 bg-[hsl(var(--card-bg))] backdrop-blur-md border-b border-[hsl(var(--border))] shadow-sm flex items-center justify-between px-5 sm:px-6 z-30 transition-colors duration-200">
      {/* Left: Welcome + User + Full Organization Name */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <h2 className="text-lg font-semibold text-[hsl(var(--text-primary))] flex items-center gap-2 flex-wrap">
          Welcome,{" "}
          
         
          <span className="text-[hsl(var(--accent))] font-extrabold">
            {orgName}
          </span>
        </h2>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-[hsl(var(--accent)/0.15)] 
                     text-[hsl(var(--accent))] transition-colors duration-200"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Settings */}
        <button
          onClick={() => navigate("/settings")}
          className="flex items-center gap-2 text-sm font-medium 
                     text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent))]
                     transition-colors duration-200"
          title="Settings"
        >
          <Settings size={18} />
          <span className="hidden sm:inline">Settings</span>
        </button>

        {/* Logout */}
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                     bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))]
                     hover:bg-[hsl(var(--accent)/0.25)] hover:text-white
                     transition-all duration-200 shadow-sm"
          title="Logout"
        >
          <LogOut size={18} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}