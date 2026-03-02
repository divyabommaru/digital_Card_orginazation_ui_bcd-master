// // export const useAuth = () => useContext(AuthContext);

// // src/context/AuthContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [brand, setBrand] = useState(null);
//   const [loading, setLoading] = useState(true);

//   /* ─────────────────────────────────────────────
//      LOAD USER ON PAGE REFRESH
//   ───────────────────────────────────────────── */

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     api
//       .get("/orginazation-dashboard/profile") // must match backend
//       .then((res) => {
//         const userData = res.data.user;

//         setUser(userData); // ✅ IMPORTANT
//         setBrand(userData.organization || null);
//       })
//       .catch(() => {
//         localStorage.removeItem("token");
//         setUser(null);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   /* ─────────────────────────────────────────────
//      LOGIN (Called From Login.jsx)
//   ───────────────────────────────────────────── */

//   const login = (userData, token) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));

//     setUser(userData);

//     if (userData.role === "employeer") {
//       navigate("/", { replace: true });
//     } else {
//       navigate("/user/my-card", { replace: true });
//     }
//   };

//   /* ─────────────────────────────────────────────
//      LOGOUT
//   ───────────────────────────────────────────── */

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     setUser(null);
//     setBrand(null);

//     navigate("/login", { replace: true });
//   };

//   const updateBrand = (newBrand) => {
//     setBrand((prev) => ({ ...prev, ...newBrand }));
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         brand,
//         login,
//         logout,
//         updateBrand,
//         loading,
//         isAuthenticated: !!user,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

// src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ─────────────────────────────────────────────
     LOAD USER + BRAND ON REFRESH
  ───────────────────────────────────────────── */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const init = async () => {
      try {
        // 1️⃣ Get profile
        const profileRes = await api.get("/orginazation-dashboard/profile");

        const userData = profileRes.data.user;
        setUser(userData);

        // 2️⃣ Get brand separately
        try {
          const brandRes = await api.get("/orginazation-dashboard/brand");
          setBrand(brandRes.data.data);
        } catch {
          setBrand(null);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
        setBrand(null);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  /* ─────────────────────────────────────────────
     LOGIN
  ───────────────────────────────────────────── */
  const login = (userData, token) => {
    localStorage.setItem("token", token);

    setUser(userData);

    if (userData.role === "employeer") {
      navigate("/", { replace: true });
    } else {
      navigate("/user/my-card", { replace: true });
    }
  };

  /* ─────────────────────────────────────────────
     LOGOUT
  ───────────────────────────────────────────── */
  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
    setBrand(null);

    navigate("/login", { replace: true });
  };

  /* ─────────────────────────────────────────────
     UPDATE BRAND (API CONNECTED)
  ───────────────────────────────────────────── */
  const updateBrand = async (formData) => {
    try {
      const res = await api.post(
        "/orginazation-dashboard/brand/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setBrand(res.data.data);

      return res.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  };

  /* ─────────────────────────────────────────────
     REFRESH BRAND MANUALLY
  ───────────────────────────────────────────── */
  const refreshBrand = async () => {
    try {
      const res = await api.get("/orginazation-dashboard/brand");
      setBrand(res.data.data);
    } catch {
      setBrand(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        brand,
        login,
        logout,
        updateBrand,
        refreshBrand,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// // src/context/AuthContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [brand, setBrand] = useState(null);
//   const [loading, setLoading] = useState(true);

//   /* ─────────────────────────────────────────────
//      MOCK: LOAD USER + BRAND ON REFRESH
//   ───────────────────────────────────────────── */
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     // Simulate loading user & brand from "backend"
//     setTimeout(() => {
//       // Mock user data
//       const mockUser = {
//         id: 1,
//         name: "Demo Admin",
//         email: "admin@onedesk.com",
//         role: "employeer", // or "employee"
//         phone: "9876543210",
//       };

//       // Mock brand data
//       const mockBrand = {
//         brand_name: "One Desk Digital",
//         logo: "/logo.jpeg",
//         primary_color: "#f97316",
//         secondary_color: "#ea580c",
//       };

//       setUser(mockUser);
//       setBrand(mockBrand);
//       setLoading(false);
//     }, 800);
//   }, []);

//   /* ─────────────────────────────────────────────
//      MOCK LOGIN
//   ───────────────────────────────────────────── */
//   const login = (userData, token, remember = false) => {
//     // Simulate saving token
//     localStorage.setItem("token", token);

//     // Mock user object (in real app this comes from API)
//     const mockUser = {
//       ...userData,
//       id: userData.id || Date.now(),
//       role: userData.role || (userData.email?.includes("@org") ? "employeer" : "employee"),
//     };

//     setUser(mockUser);

//     // Role-based redirect (same as real flow)
//     if (mockUser.role === "employeer") {
//       navigate("/", { replace: true });
//     } else {
//       navigate("/user/my-card", { replace: true });
//     }
//   };

//   /* ─────────────────────────────────────────────
//      MOCK LOGOUT
//   ───────────────────────────────────────────── */
//   const logout = () => {
//     localStorage.removeItem("token");

//     setUser(null);
//     setBrand(null);

//     navigate("/login", { replace: true });
//   };

//   /* ─────────────────────────────────────────────
//      MOCK: UPDATE BRAND
//   ───────────────────────────────────────────── */
//   const updateBrand = async (formData) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Simulate API response
//         const updatedBrand = {
//           ...brand,
//           brand_name: formData.get("brand_name") || brand?.brand_name,
//           logo: formData.get("logo") ? URL.createObjectURL(formData.get("logo")) : brand?.logo,
//           primary_color: formData.get("primary_color") || brand?.primary_color,
//           secondary_color: formData.get("secondary_color") || brand?.secondary_color,
//         };

//         setBrand(updatedBrand);
//         resolve({ success: true, data: updatedBrand });
//       }, 1200);
//     });
//   };

//   /* ─────────────────────────────────────────────
//      MOCK: REFRESH BRAND
//   ───────────────────────────────────────────── */
//   const refreshBrand = async () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Simulate refetch
//         const mockBrand = {
//           brand_name: "One Desk Digital (Refreshed)",
//           logo: "/logo.jpeg",
//           primary_color: "#f97316",
//           secondary_color: "#ea580c",
//         };
//         setBrand(mockBrand);
//         resolve(mockBrand);
//       }, 800);
//     });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         brand,
//         login,
//         logout,
//         updateBrand,
//         refreshBrand,
//         loading,
//         isAuthenticated: !!user,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);