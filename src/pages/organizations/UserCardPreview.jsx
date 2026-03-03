// //src/pages/organizations/UserCardPreview.jsx
// import { useState } from "react";
// import {
//   CardTemplatePremium,
//   CardTemplateMinimal,
//   CardTemplateDark,
// } from "./CardTemplates";
// import UserLayout from "../../components/layout/user/UserLayout";
// import { X } from "lucide-react";

// const sampleData = {
//   name: "Asif",
//   role: "Founder & CEO",
//   bio: "Full Stack Developer / Branding Strategist with over 12+ years of experience. Advisor & Mentor for many tech startups to build a Global Brand & Scale the business.",
//   phone: "+91 9440161007",
//   email: "asif@gmail.com",
//   website: "https://www.goodux.in",
//   company: "Good User Xperience Private Limited",
//   address: "Bannerghatta Main Road, Bangalore - 560076",
//   services: [
//     "UX / CX Research & Strategy",
//     "UX / UI for Digital Products",
//     "UX / UI for Mobile & Web",
//     "End-to-End Branding Solutions",
//     "Scale & Growth using UX / CX",
//     "UX Strategic Business Consulting",
//     "Corporate Communication",
//   ],
// };

// export default function UserCardPreview() {
//   const [template, setTemplate] = useState("premium");
//   const [showMeetingModal, setShowMeetingModal] = useState(false);

//   /* UI STATE ONLY */
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   /* Mock available slots (UI only) */
//   const availableTimes = [
//     "10:00 AM",
//     "11:00 AM",
//     "02:00 PM",
//     "03:00 PM",
//     "04:00 PM",
//   ];

//   return (
//     <UserLayout>
//       <div className="min-h-screen bg-gray-100 p-6">
//         {/* TEMPLATE SWITCH */}
//         <div className="flex gap-3 justify-center mb-6">
//           <button onClick={() => setTemplate("premium")} className="btn">
//             Premium
//           </button>
//           <button onClick={() => setTemplate("minimal")} className="btn">
//             Minimal
//           </button>
//           <button onClick={() => setTemplate("dark")} className="btn">
//             Dark
//           </button>
//         </div>

//         {/* CARD + MEETING BUTTON */}
//         <div className="flex flex-col items-center gap-4">
//           {template === "premium" && <CardTemplatePremium data={sampleData} />}
//           {template === "minimal" && <CardTemplateMinimal data={sampleData} />}
//           {template === "dark" && <CardTemplateDark data={sampleData} />}

//           {/* ✅ BOOK MEETING BUTTON */}
//           <button
//             onClick={() => setShowMeetingModal(true)}
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm shadow"
//           >
//             Book a Meeting
//           </button>
//         </div>

//         {/* ================= MEETING MODAL ================= */}
//         {showMeetingModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center">
//             <div
//               className="absolute inset-0 bg-black/40"
//               onClick={() => setShowMeetingModal(false)}
//             />

//             <div className="relative bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 z-10">
//               <button
//                 onClick={() => setShowMeetingModal(false)}
//                 className="absolute top-3 right-3 text-gray-500"
//               >
//                 <X />
//               </button>

//               <h3 className="text-lg font-bold mb-4">Request a Meeting</h3>

//               {/* DATE */}
//               <label className="text-sm font-medium">Select Date</label>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full border p-2 rounded mb-4"
//               />

//               {/* TIME */}
//               <label className="text-sm font-medium">
//                 Available Time Slots
//               </label>
//               <select
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="w-full border p-2 rounded mb-6"
//               >
//                 <option value="">Select time</option>
//                 {availableTimes.map((t) => (
//                   <option key={t}>{t}</option>
//                 ))}
//               </select>

//               <button
//                 onClick={() => {
//                   setShowMeetingModal(false);
//                   alert("Meeting request sent (Pending approval)");
//                 }}
//                 className="w-full bg-indigo-600 text-white py-2 rounded-lg"
//               >
//                 Request Meeting
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </UserLayout>
//   );
// }


// src/pages/organizations/UserCardPreview.jsx
import { useState } from "react";
import {
  CardTemplatePremium,
  CardTemplateMinimal,
  CardTemplateDark,
} from "./CardTemplates";
import UserLayout from "../../components/layout/user/UserLayout";
import { X } from "lucide-react";

const sampleData = {
  name: "Asif",
  role: "Founder & CEO",
  bio: "Full Stack Developer / Branding Strategist with over 12+ years of experience. Advisor & Mentor for many tech startups to build a Global Brand & Scale the business.",
  phone: "+91 9440161007",
  email: "asif@gmail.com",
  website: "https://www.goodux.in",
  company: "Good User Xperience Private Limited",
  address: "Bannerghatta Main Road, Bangalore - 560076",
  services: [
    "UX / CX Research & Strategy",
    "UX / UI for Digital Products",
    "UX / UI for Mobile & Web",
    "End-to-End Branding Solutions",
    "Scale & Growth using UX / CX",
    "UX Strategic Business Consulting",
    "Corporate Communication",
  ],
};

export default function UserCardPreview() {
  const [template, setTemplate] = useState("premium");
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  /* UI STATE ONLY */
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  /* Mock available slots (UI only) */
  const availableTimes = [
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  return (
    <UserLayout>
      <div className="min-h-screen bg-[hsl(var(--bg-primary))] p-6 md:p-8">
        {/* TEMPLATE SWITCH */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setTemplate("premium")}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm ${
              template === "premium"
                ? "bg-[hsl(var(--accent))] text-white shadow-md"
                : "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--border))]"
            }`}
          >
            Premium
          </button>
          <button
            onClick={() => setTemplate("minimal")}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm ${
              template === "minimal"
                ? "bg-[hsl(var(--accent))] text-white shadow-md"
                : "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--border))]"
            }`}
          >
            Minimal
          </button>
          <button
            onClick={() => setTemplate("dark")}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm ${
              template === "dark"
                ? "bg-[hsl(var(--accent))] text-white shadow-md"
                : "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--accent)/0.1)] border border-[hsl(var(--border))]"
            }`}
          >
            Dark
          </button>
        </div>

        {/* CARD + MEETING BUTTON */}
        <div className="flex flex-col items-center gap-6">
          {template === "premium" && <CardTemplatePremium data={sampleData} />}
          {template === "minimal" && <CardTemplateMinimal data={sampleData} />}
          {template === "dark" && <CardTemplateDark data={sampleData} />}

          {/* BOOK MEETING BUTTON */}
          <button
            onClick={() => setShowMeetingModal(true)}
            className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white px-8 py-3 rounded-xl font-medium shadow-lg transition-all active:scale-95"
          >
            Book a Meeting
          </button>
        </div>

        {/* ================= MEETING MODAL ================= */}
        {showMeetingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowMeetingModal(false)}
            />

            <div className="relative bg-[hsl(var(--card-bg))] w-full max-w-md rounded-2xl shadow-2xl p-6 border border-[hsl(var(--border))] z-10">
              <button
                onClick={() => setShowMeetingModal(false)}
                className="absolute top-4 right-4 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-primary))] transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-6">
                Request a Meeting
              </h3>

              {/* DATE */}
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all mb-5"
              />

              {/* TIME */}
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Available Time Slots
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all mb-6"
              >
                <option value="">Select time</option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  setShowMeetingModal(false);
                  alert("Meeting request sent (Pending approval)");
                }}
                className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white py-3.5 rounded-xl font-medium shadow-lg transition-all active:scale-95"
              >
                Request Meeting
              </button>
            </div>
          </div>
        )}
      </div>
    </UserLayout>
  );
}