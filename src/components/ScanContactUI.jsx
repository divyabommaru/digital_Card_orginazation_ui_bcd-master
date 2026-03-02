// //src/components/ScanContactUI.jsx
// "use client";
// import { useState } from "react";
// import { Camera, User, Mail, Phone } from "lucide-react";
// import UserLayout from "./layout/user/UserLayout";

// export default function ScanContactUI() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleImage = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // API call here
//     // setForm({ name, email, phone });
//   };

//   return (
//     <UserLayout>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
//           {/* Header */}
//           <h1 className="text-2xl font-bold text-gray-800 text-center">
//             Scan Contact
//           </h1>
//           <p className="text-sm text-gray-500 text-center mb-6">
//             Scan a business card to auto-fill details
//           </p>

//           {/* Camera Button */}
//           <label className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-400 rounded-xl p-6 cursor-pointer hover:bg-indigo-50 transition">
//             <Camera className="w-10 h-10 text-indigo-500 mb-2" />
//             <span className="text-indigo-600 font-semibold">
//               Scan Business Card
//             </span>
//             <span className="text-xs text-gray-500">Camera will open</span>

//             <input
//               type="file"
//               accept="image/*"
//               capture="environment"
//               className="hidden"
//               onChange={handleImage}
//             />
//           </label>

//           {/* Form */}
//           <div className="space-y-4 mt-6">
//             <Input
//               icon={<User />}
//               placeholder="Full Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />

//             <Input
//               icon={<Mail />}
//               placeholder="Email Address"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//             />

//             <Input
//               icon={<Phone />}
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             />
//           </div>

//           {/* Save Button */}
//           <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
//             Save Contact
//           </button>
//         </div>
//       </div>
//     </UserLayout>
//   );
// }

// /* Reusable Input */
// function Input({ icon, ...props }) {
//   return (
//     <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
//       <span className="text-gray-400 mr-3">{icon}</span>
//       <input
//         className="w-full bg-transparent outline-none text-sm"
//         {...props}
//       />
//     </div>
//   );
// }



// src/components/ScanContactUI.jsx
"use client";
import { useState } from "react";
import { Camera, User, Mail, Phone } from "lucide-react";
import UserLayout from "./layout/user/UserLayout";

export default function ScanContactUI() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // API call here
    // setForm({ name, email, phone });
  };

  return (
    <UserLayout>
      <div className="min-h-screen bg-[hsl(var(--bg-primary))] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-[hsl(var(--card-bg))] rounded-2xl shadow-2xl p-6 md:p-8 border border-[hsl(var(--border))]">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--text-primary))] text-center">
            Scan Contact
          </h1>
          <p className="text-sm text-[hsl(var(--text-muted))] text-center mt-2 mb-8">
            Scan a business card to auto-fill details
          </p>

          {/* Camera / Scan Button */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-[hsl(var(--accent)/0.4)] rounded-2xl p-10 cursor-pointer hover:bg-[hsl(var(--accent)/0.08)] hover:border-[hsl(var(--accent))] transition-all duration-200">
            <Camera className="w-12 h-12 md:w-14 md:h-14 text-[hsl(var(--accent))] mb-4" />
            <span className="text-lg font-semibold text-[hsl(var(--accent))] mb-1">
              Scan Business Card
            </span>
            <span className="text-sm text-[hsl(var(--text-muted))]">
              Camera will open
            </span>

            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleImage}
            />
          </label>

          {/* Form Fields */}
          <div className="space-y-6 mt-10">
            <Input
              icon={<User size={20} />}
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <Input
              icon={<Mail size={20} />}
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <Input
              icon={<Phone size={20} />}
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* Save Button */}
          <button className="w-full mt-10 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-200 active:scale-[0.98]">
            Save Contact
          </button>
        </div>
      </div>
    </UserLayout>
  );
}

/* Reusable Input Component */
function Input({ icon, ...props }) {
  return (
    <div className="flex items-center border border-[hsl(var(--border))] rounded-xl px-4 py-3.5 bg-[hsl(var(--card-bg))] focus-within:border-[hsl(var(--accent))] focus-within:ring-2 focus-within:ring-[hsl(var(--accent)/0.3)] transition-all duration-200">
      <span className="text-[hsl(var(--text-muted))] mr-3">{icon}</span>
      <input
        className="w-full bg-transparent outline-none text-[hsl(var(--text-primary))] placeholder-[hsl(var(--text-muted))] text-sm"
        {...props}
      />
    </div>
  );
}
