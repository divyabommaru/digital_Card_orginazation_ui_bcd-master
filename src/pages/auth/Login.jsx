// // src/pages/auth/Login.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { successAlert, errorAlert } from "../../utils/alert";
// import api from "../../api/axios";
// export default function Login() {
//   const { login, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("admin");
//   const [loading, setLoading] = useState(false);

//   if (isAuthenticated) {
//     navigate(role === "admin" ? "/" : "/user/my-card", { replace: true });
//     return null;
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       errorAlert("Login Failed", "Please enter email and password");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await api.post("/auth/org-login", {
//         username: email,
//         password: password,
//         role: role === "admin" ? "employeer" : "employee",
//       });

//       const token = res.data.token;
//       const user = res.data.user;

//       console.log("token", token);
//       // Save token
//       localStorage.setItem("token", token);

//       // Save user info (optional)
//       localStorage.setItem("user", JSON.stringify(user));

//       // Update auth context
//       login(user, token);

//       successAlert("Welcome", `Hello ${user.name}`);

//       // Redirect
//       if (user.role === "employeer") {
//         navigate("/", { replace: true });
//       } else {
//         navigate("/user/my-card", { replace: true });
//       }
//     } catch (error) {
//       console.log(error);

//       const message =
//         error.response?.data?.message || "Invalid credentials fggfgfg";

//       errorAlert("Login Failed", message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">
//       <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30">
//         <div className="text-center mb-6">
//           <div className="mx-auto mb-3 h-14 w-14 flex items-center justify-center rounded-full bg-white text-indigo-600 text-2xl font-bold shadow">
//             OD
//           </div>
//           <h1 className="text-3xl font-bold text-white">
//             {role === "admin" ? "Organization Login" : "User Login"}
//           </h1>
//         </div>

//         <div className="flex bg-white/20 rounded-xl p-1 mb-6">
//           <button
//             onClick={() => setRole("admin")}
//             className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
//               role === "admin"
//                 ? "bg-white text-indigo-600 shadow"
//                 : "text-white/80"
//             }`}
//           >
//             Organization
//           </button>
//           <button
//             onClick={() => setRole("user")}
//             className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
//               role === "user"
//                 ? "bg-white text-indigo-600 shadow"
//                 : "text-white/80"
//             }`}
//           >
//             User
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="text-white text-sm mb-1 block">
//               Email or Phone
//             </label>
//             <input
//               type="text"
//               placeholder="admin@onedesk.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 rounded-lg bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="text-white text-sm mb-1 block">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 rounded-lg bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold transition shadow-lg"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         <p className="text-center text-white/70 mt-6 text-sm">
//           © {new Date().getFullYear()} OneDesk
//         </p>
//       </div>
//     </div>
//   );
// }
// src/pages/auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { successAlert, errorAlert } from "../../utils/alert";
import api from "../../api/axios";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    navigate(role === "admin" ? "/" : "/user/my-card", { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      errorAlert("Login Failed", "Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/org-login", {
        username: email,
        password: password,
        role: role === "admin" ? "employeer" : "employee",
      });

      const token = res.data.token;
      const user = res.data.user;

      console.log("token", token);
      // Save token
      localStorage.setItem("token", token);

      // Save user info (optional)
      localStorage.setItem("user", JSON.stringify(user));

      // Update auth context
      login(user, token);

      successAlert("Welcome", `Hello ${user.name}`);

      // Redirect
      if (user.role === "employeer") {
        navigate("/", { replace: true });
      } else {
        navigate("/user/my-card", { replace: true });
      }
    } catch (error) {
      console.log(error);

      const message =
        error.response?.data?.message || "Invalid credentials";

      errorAlert("Login Failed", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-orange-950 px-4 py-12">
      <div className="w-full max-w-md bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-orange-900/40">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 h-16 w-16 md:h-20 md:w-20 rounded-full bg-orange-600 flex items-center justify-center shadow-lg overflow-hidden border-2 border-orange-500/40">
            <span className="text-white text-2xl md:text-3xl font-bold">BD</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {role === "admin" ? "Organization Panel" : "User Login"}
          </h1>

          <p className="text-gray-400 text-sm md:text-base mt-2">
            Sign in to manage your dashboard
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-black/40 rounded-xl p-1 mb-8 border border-orange-900/30">
          <button
            onClick={() => setRole("admin")}
            className={`flex-1 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200
              ${role === "admin"
                ? "bg-orange-600 text-white shadow-md"
                : "text-gray-300 hover:bg-orange-900/30"}`}
          >
            Organization
          </button>
          <button
            onClick={() => setRole("user")}
            className={`flex-1 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200
              ${role === "user"
                ? "bg-orange-600 text-white shadow-md"
                : "text-gray-300 hover:bg-orange-900/30"}`}
          >
            User
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username / Email / Phone */}
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              Username / Email / Phone
            </label>
            <input
              type="text"
              placeholder="admin@example.com or 9876543210"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-700 
                         text-white placeholder-gray-500 focus:border-orange-500 
                         focus:ring-2 focus:ring-orange-500/30 outline-none transition-all"
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm font-medium mb-2 block">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-700 
                         text-white placeholder-gray-500 focus:border-orange-500 
                         focus:ring-2 focus:ring-orange-500/30 outline-none transition-all"
              disabled={loading}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-200
              ${loading 
                ? "bg-orange-700/60 cursor-not-allowed opacity-70" 
                : "bg-orange-600 hover:bg-orange-700 active:bg-orange-800"} 
              text-white`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        
      </div>
    </div>
  );
}