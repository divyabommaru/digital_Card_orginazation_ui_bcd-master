// import { useEffect, useState } from "react";
// import api from "../../api/axios";
// // import api from "../api/axios";


// export default function StaffCardPreview({ id }) {
//   const [card, setCard] = useState(null);

//   useEffect(() => {
//     if (id) fetchCard();
//   }, [id]);

//   const fetchCard = async () => {
//     try {
//       const res = await api.get(`/orginazation-dashboard/staff-cards/${id}`);
//       setCard(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!card) return <div>Loading...</div>;

//   return (
//     <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
//       {/* COVER */}
//       <div className="relative h-36 bg-yellow-100">
//         {card.cover_image_url && (
//           <img
//             src={card.cover_image_url}
//             className="w-full h-full object-cover"
//           />
//         )}

//         {/* PROFILE */}
//         <div className="absolute -bottom-10 left-6">
//           <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
//             {card.profile_image_url ? (
//               <img
//                 src={card.profile_image_url}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full text-xs text-gray-400">
//                 Profile
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="pt-12 px-5 pb-6 space-y-4">
//         {/* NAME */}
//         <div>
//           <h3 className="font-bold text-lg">{card.name}</h3>
//           <p className="text-xs text-gray-500">{card.designation}</p>
//         </div>

//         {/* CONTACT */}
//         <ContactRow icon="📞" value={card.phone} />
//         <ContactRow icon="✉️" value={card.email} />
//         <ContactRow icon="🌐" value={card.website} />

//         {/* COMMUNITY */}
//         {card.community_images?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="COMMUNITY" />
//             <div className="flex gap-4 flex-wrap">
//               {card.community_images.map((img, i) => (
//                 <div key={i} className="text-xs text-center">
//                   <img
//                     src={img.url}
//                     className="w-10 h-10 rounded-full object-cover mx-auto"
//                   />
//                   <div className="truncate w-14 mt-1">{img.name}</div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* COMPANY */}
//         {(card.company_name || card.company_email) && (
//           <>
//             <Divider />
//             <SectionTitle title="COMPANY" />
//             <p className="text-sm font-medium">{card.company_name}</p>
//             <p className="text-xs text-gray-500">{card.company_email}</p>
//           </>
//         )}

//         {/* SERVICES */}
//         {card.services?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="SERVICES" />
//             <ul className="list-disc list-inside text-sm space-y-1">
//               {card.services.map((s, i) => (
//                 <li key={i}>{s.service_name}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* BROCHURES */}
//         {card.brochures?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="BROCHURES" />
//             {card.brochures.map((b, i) => (
//               <a
//                 key={i}
//                 href={b.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 text-sm block"
//               >
//                 📄 {b.name}
//               </a>
//             ))}
//           </>
//         )}

//         {/* SOCIAL MEDIA */}
//         {(card.linkedin || card.instagram || card.facebook || card.youtube) && (
//           <>
//             <Divider />
//             <div className="flex gap-4 pt-2">
//               {card.linkedin && <SocialIcon url={card.linkedin} label="in" />}
//               {card.instagram && <SocialIcon url={card.instagram} label="📸" />}
//               {card.facebook && <SocialIcon url={card.facebook} label="f" />}
//               {card.youtube && <SocialIcon url={card.youtube} label="▶" />}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ---------------- SMALL COMPONENTS ---------------- */

// function ContactRow({ icon, value }) {
//   if (!value) return null;
//   return (
//     <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2 text-sm">
//       <span>{icon}</span>
//       <span className="truncate">{value}</span>
//     </div>
//   );
// }

// function Divider() {
//   return <div className="h-px bg-gray-200 my-3" />;
// }

// function SectionTitle({ title }) {
//   return <div className="text-xs font-semibold text-gray-400">{title}</div>;
// }

// function SocialIcon({ url, label }) {
//   return (
//     <a
//       href={url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-semibold hover:scale-105 transition"
//     >
//       {label}
//     </a>
//   );
// }



// import { useEffect, useState } from "react";
// import api from "../../api/axios";
// // import api from "../api/axios";

// export default function StaffCardPreview({ id }) {
//   const [card, setCard] = useState(null);

//   const [showMeetingModal, setShowMeetingModal] = useState(false);
//   const [meetingName, setMeetingName] = useState("");
//   const [meetingTitle, setMeetingTitle] = useState("");
//   const [meetingDescription, setMeetingDescription] = useState("");
//   const [meetingDate, setMeetingDate] = useState("");
//   const [meetingTime, setMeetingTime] = useState("");

//   useEffect(() => {
//     if (id) fetchCard();
//   }, [id]);

//   const fetchCard = async () => {
//     try {
//       const res = await api.get(`/orginazation-dashboard/staff-cards/${id}`);
//       setCard(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!card) return <div>Loading...</div>;

//   return (
//     <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
//       {/* COVER */}
//       <div className="relative h-36 bg-yellow-100">
//         {card.cover_image_url && (
//           <img
//             src={card.cover_image_url}
//             className="w-full h-full object-cover"
//           />
//         )}

//         {/* PROFILE */}
//         <div className="absolute -bottom-10 left-6">
//           <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
//             {card.profile_image_url ? (
//               <img
//                 src={card.profile_image_url}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full text-xs text-gray-400">
//                 Profile
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="pt-12 px-5 pb-6 space-y-4">
//         {/* NAME */}
//         <div>
//           <h3 className="font-bold text-lg">{card.name}</h3>
//           <p className="text-xs text-gray-500">{card.designation}</p>
//         </div>

//         {/* CONTACT */}
//         <ContactRow icon="📞" value={card.phone} />
//         <ContactRow icon="✉️" value={card.email} />
//         <ContactRow icon="🌐" value={card.website} />

//         {/* COMMUNITY */}
//         {card.community_images?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="COMMUNITY" />
//             <div className="flex gap-4 flex-wrap">
//               {card.community_images.map((img, i) => (
//                 <div key={i} className="text-xs text-center">
//                   <img
//                     src={img.url}
//                     className="w-10 h-10 rounded-full object-cover mx-auto"
//                   />
//                   <div className="truncate w-14 mt-1">{img.name}</div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* COMPANY */}
//         {(card.company_name || card.company_email) && (
//           <>
//             <Divider />
//             <SectionTitle title="COMPANY" />
//             <p className="text-sm font-medium">{card.company_name}</p>
//             <p className="text-xs text-gray-500">{card.company_email}</p>
//           </>
//         )}

//         {/* SERVICES */}
//         {card.services?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="SERVICES" />
//             <ul className="list-disc list-inside text-sm space-y-1">
//               {card.services.map((s, i) => (
//                 <li key={i}>{s.service_name}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* BROCHURES */}
//         {card.brochures?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="BROCHURES" />
//             {card.brochures.map((b, i) => (
//               <a
//                 key={i}
//                 href={b.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 text-sm block"
//               >
//                 📄 {b.name}
//               </a>
//             ))}
//           </>
//         )}

//         {/* SOCIAL MEDIA */}
//         {(card.linkedin || card.instagram || card.facebook || card.youtube) && (
//           <>
//             <Divider />
//             <div className="flex gap-4 pt-2">
//               {card.linkedin && <SocialIcon url={card.linkedin} label="in" />}
//               {card.instagram && <SocialIcon url={card.instagram} label="📸" />}
//               {card.facebook && <SocialIcon url={card.facebook} label="f" />}
//               {card.youtube && <SocialIcon url={card.youtube} label="▶" />}
//             </div>
//           </>
//         )}

//         <div className="pt-2">
//           <button
//             onClick={() => setShowMeetingModal(true)}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-sm font-medium transition"
//           >
//             📅 Book Meeting
//           </button>
//         </div>
//       </div>
//       {showMeetingModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white w-[380px] rounded-2xl p-6 space-y-4 shadow-xl">
//             <h3 className="text-lg font-semibold">Schedule Google Meet</h3>

//             {/* NAME */}
//             <div>
//               <label className="text-xs">Your Name</label>
//               <input
//                 type="text"
//                 value={meetingName}
//                 onChange={(e) => setMeetingName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="w-full border rounded-lg px-3 py-2 text-sm"
//               />
//             </div>

//             {/* TITLE */}
//             <div>
//               <label className="text-xs">Meeting Title</label>
//               <input
//                 type="text"
//                 value={meetingTitle}
//                 onChange={(e) => setMeetingTitle(e.target.value)}
//                 placeholder="Enter meeting title"
//                 className="w-full border rounded-lg px-3 py-2 text-sm"
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <div>
//               <label className="text-xs">Description</label>
//               <textarea
//                 value={meetingDescription}
//                 onChange={(e) => setMeetingDescription(e.target.value)}
//                 placeholder="Enter meeting description"
//                 rows="3"
//                 className="w-full border rounded-lg px-3 py-2 text-sm"
//               />
//             </div>

//             {/* DATE */}
//             <div>
//               <label className="text-xs">Select Date</label>
//               <input
//                 type="date"
//                 value={meetingDate}
//                 onChange={(e) => setMeetingDate(e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2 text-sm"
//               />
//             </div>

//             {/* TIME */}
//             <div>
//               <label className="text-xs">Select Time</label>
//               <input
//                 type="time"
//                 value={meetingTime}
//                 onChange={(e) => setMeetingTime(e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2 text-sm"
//               />
//             </div>

//             {/* BUTTONS */}
//             <div className="flex gap-3 pt-2">
//               <button
//                 onClick={() => setShowMeetingModal(false)}
//                 className="flex-1 border rounded-lg py-2 text-sm"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={async () => {
//                   if (
//                     !meetingName ||
//                     !meetingTitle ||
//                     !meetingDate ||
//                     !meetingTime
//                   ) {
//                     alert("Please fill all required fields");
//                     return;
//                   }

//                   try {
//                     const res = await api.post("/public/meeting-request", {
//                       user_id: card.user_id, // make sure correct field
//                       name: meetingName,
//                       title: meetingTitle,
//                       description: meetingDescription,
//                       date: meetingDate,
//                       time: meetingTime,
//                     });

//                     if (res.data.success) {
//                       alert(res.data.message);

//                       // Reset fields
//                       setMeetingName("");
//                       setMeetingTitle("");
//                       setMeetingDescription("");
//                       setMeetingDate("");
//                       setMeetingTime("");

//                       setShowMeetingModal(false);
//                     }
//                   } catch (error) {
//                     alert(
//                       error.response?.data?.message || "Something went wrong",
//                     );
//                   }
//                 }}
//                 className="flex-1 bg-indigo-600 text-white rounded-lg py-2 text-sm"
//               >
//                 Request
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- SMALL COMPONENTS ---------------- */

// function ContactRow({ icon, value }) {
//   if (!value) return null;
//   return (
//     <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2 text-sm">
//       <span>{icon}</span>
//       <span className="truncate">{value}</span>
//     </div>
//   );
// }

// function Divider() {
//   return <div className="h-px bg-gray-200 my-3" />;
// }

// function SectionTitle({ title }) {
//   return <div className="text-xs font-semibold text-gray-400">{title}</div>;
// }

// function SocialIcon({ url, label }) {
//   return (
//     <a
//       href={url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-semibold hover:scale-105 transition"
//     >
//       {label}
//     </a>
//   );
// }

// // src/pages/organizations/UserCardPreview.jsx
// import { useEffect, useState } from "react";
// import api from "../../api/axios";
// import UserLayout from "../../components/layout/user/UserLayout";
// import { X } from "lucide-react";

// export default function StaffCardPreview({ id }) {
//   const [card, setCard] = useState(null);

//   const [showMeetingModal, setShowMeetingModal] = useState(false);
//   const [meetingName, setMeetingName] = useState("");
//   const [meetingTitle, setMeetingTitle] = useState("");
//   const [meetingDescription, setMeetingDescription] = useState("");
//   const [meetingDate, setMeetingDate] = useState("");
//   const [meetingTime, setMeetingTime] = useState("");

//   useEffect(() => {
//     if (id) fetchCard();
//   }, [id]);

//   const fetchCard = async () => {
//     try {
//       const res = await api.get(`/orginazation-dashboard/staff-cards/${id}`);
//       setCard(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!card) return <div className="text-center py-12 text-[hsl(var(--text-muted))]">Loading...</div>;

//   return (
//     <div className="w-full max-w-[380px] mx-auto bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))]">
//       {/* COVER */}
//       <div className="relative h-40 bg-gradient-to-br from-[hsl(var(--accent)/0.15)] to-[hsl(var(--bg-secondary))]">
//         {card.cover_image_url && (
//           <img
//             src={card.cover_image_url}
//             alt="Cover"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         )}

//         {/* PROFILE */}
//         <div className="absolute -bottom-12 left-6">
//           <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-xl overflow-hidden bg-[hsl(var(--card-bg))]">
//             {card.profile_image_url ? (
//               <img
//                 src={card.profile_image_url}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full text-xs text-[hsl(var(--text-muted))] bg-gradient-to-t from-black/30 to-transparent">
//                 Profile
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="pt-16 px-6 pb-8 space-y-6">
//         {/* NAME */}
//         <div>
//           <h3 className="font-bold text-xl text-[hsl(var(--text-primary))] truncate">
//             {card.name}
//           </h3>
//           <p className="text-sm text-[hsl(var(--text-muted))] mt-1">
//             {card.designation}
//           </p>
//         </div>

//         {/* CONTACT */}
//         <ContactRow icon="📞" value={card.phone} />
//         <ContactRow icon="✉️" value={card.email} />
//         <ContactRow icon="🌐" value={card.website} />

//         {/* COMMUNITY */}
//         {card.community_images?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="COMMUNITY" />
//             <div className="flex gap-5 flex-wrap">
//               {card.community_images.map((img, i) => (
//                 <div key={i} className="text-xs text-center">
//                   <img
//                     src={img.url}
//                     alt={img.name || "Community"}
//                     className="w-12 h-12 rounded-full object-cover mx-auto border border-[hsl(var(--border))] shadow-sm"
//                   />
//                   <div className="truncate w-16 mt-1.5 text-[hsl(var(--text-muted))]">
//                     {img.name || "App"}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* COMPANY */}
//         {(card.company_name || card.company_email) && (
//           <>
//             <Divider />
//             <SectionTitle title="COMPANY" />
//             <p className="text-sm font-medium text-[hsl(var(--text-primary))]">{card.company_name}</p>
//             <p className="text-xs text-[hsl(var(--text-muted))]">{card.company_email}</p>
//           </>
//         )}

//         {/* SERVICES */}
//         {card.services?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="SERVICES" />
//             <ul className="list-disc list-inside text-sm space-y-1.5 text-[hsl(var(--text-secondary))]">
//               {card.services.map((s, i) => (
//                 <li key={i}>{s.service_name}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* BROCHURES */}
//         {card.brochures?.length > 0 && (
//           <>
//             <Divider />
//             <SectionTitle title="BROCHURES" />
//             {card.brochures.map((b, i) => (
//               <a
//                 key={i}
//                 href={b.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block text-sm text-[hsl(var(--accent))] hover:underline transition py-1"
//               >
//                 📄 {b.name}
//               </a>
//             ))}
//           </>
//         )}

//         {/* SOCIAL MEDIA */}
//         {(card.linkedin || card.instagram || card.facebook || card.youtube) && (
//           <>
//             <Divider />
//             <div className="flex gap-4 pt-2">
//               {card.linkedin && <SocialIcon url={card.linkedin} label="in" color="bg-[#0A66C2]" />}
//               {card.instagram && (
//                 <SocialIcon url={card.instagram} label="📸" color="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
//               )}
//               {card.facebook && <SocialIcon url={card.facebook} label="f" color="bg-[#1877F2]" />}
//               {card.youtube && <SocialIcon url={card.youtube} label="▶" color="bg-[#FF0000]" />}
//             </div>
//           </>
//         )}

//         <div className="pt-4">
//           <button
//             onClick={() => setShowMeetingModal(true)}
//             className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white py-3 rounded-xl font-medium shadow-lg transition-all active:scale-95"
//           >
//             📅 Book Meeting
//           </button>
//         </div>
//       </div>

//       {/* ================= MEETING MODAL ================= */}
//       {showMeetingModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="relative bg-[hsl(var(--card-bg))] w-full max-w-lg rounded-2xl shadow-2xl p-6 border border-[hsl(var(--border))] max-h-[90vh] overflow-y-auto">
//             <button
//               onClick={() => setShowMeetingModal(false)}
//               className="absolute top-4 right-4 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-primary))] transition-colors"
//             >
//               <X size={24} />
//             </button>

//             <h3 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-6">
//               Schedule Google Meet
//             </h3>

//             {/* NAME */}
//             <div className="mb-5">
//               <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 value={meetingName}
//                 onChange={(e) => setMeetingName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
//               />
//             </div>

//             {/* TITLE */}
//             <div className="mb-5">
//               <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
//                 Meeting Title
//               </label>
//               <input
//                 type="text"
//                 value={meetingTitle}
//                 onChange={(e) => setMeetingTitle(e.target.value)}
//                 placeholder="Enter meeting title"
//                 className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <div className="mb-5">
//               <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
//                 Description
//               </label>
//               <textarea
//                 value={meetingDescription}
//                 onChange={(e) => setMeetingDescription(e.target.value)}
//                 placeholder="Enter meeting description"
//                 rows="4"
//                 className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all resize-y"
//               />
//             </div>

//             {/* DATE */}
//             <div className="mb-5">
//               <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
//                 Select Date
//               </label>
//               <input
//                 type="date"
//                 value={meetingDate}
//                 onChange={(e) => setMeetingDate(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
//               />
//             </div>

//             {/* TIME */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
//                 Select Time
//               </label>
//               <input
//                 type="time"
//                 value={meetingTime}
//                 onChange={(e) => setMeetingTime(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
//               />
//             </div>

//             {/* BUTTONS */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => setShowMeetingModal(false)}
//                 className="flex-1 px-6 py-3 rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-secondary))] transition font-medium"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={async () => {
//                   if (
//                     !meetingName ||
//                     !meetingTitle ||
//                     !meetingDate ||
//                     !meetingTime
//                   ) {
//                     alert("Please fill all required fields");
//                     return;
//                   }

//                   try {
//                     const res = await api.post("/public/meeting-request", {
//                       user_id: card.user_id,
//                       name: meetingName,
//                       title: meetingTitle,
//                       description: meetingDescription,
//                       date: meetingDate,
//                       time: meetingTime,
//                     });

//                     if (res.data.success) {
//                       alert(res.data.message);

//                       // Reset fields
//                       setMeetingName("");
//                       setMeetingTitle("");
//                       setMeetingDescription("");
//                       setMeetingDate("");
//                       setMeetingTime("");

//                       setShowMeetingModal(false);
//                     }
//                   } catch (error) {
//                     alert(
//                       error.response?.data?.message || "Something went wrong"
//                     );
//                   }
//                 }}
//                 className="flex-1 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all active:scale-95"
//               >
//                 Request
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ---------------- SMALL COMPONENTS (updated for dark/light) ---------------- */

// function ContactRow({ icon, value }) {
//   if (!value) return null;
//   return (
//     <div className="flex items-center gap-3 bg-[hsl(var(--bg-secondary))] rounded-xl px-4 py-3 text-sm border border-[hsl(var(--border))]">
//       <span className="text-xl opacity-90">{icon}</span>
//       <span className="truncate text-[hsl(var(--text-primary))]">{value}</span>
//     </div>
//   );
// }

// function Divider() {
//   return <div className="h-px bg-[hsl(var(--border))] my-5" />;
// }

// function SectionTitle({ title }) {
//   return <div className="text-xs font-semibold text-[hsl(var(--text-muted))] tracking-wider uppercase">{title}</div>;
// }

// function SocialIcon({ url, label }) {
//   return (
//     <a
//       href={url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-semibold hover:scale-105 transition"
//     >
//       {label}
//     </a>
//   );
// }

// src/pages/organizations/UserCardPreview.jsx
import { useEffect, useState } from "react";
import api from "../../api/axios";
import UserLayout from "../../components/layout/user/UserLayout";
import { X, QrCode, Download } from "lucide-react";

export default function StaffCardPreview({ id }) {
  const [card, setCard] = useState(null);

  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  // New: QR Modal State
  const [showQRModal, setShowQRModal] = useState(false);

  useEffect(() => {
    if (id) fetchCard();
  }, [id]);

  const fetchCard = async () => {
    try {
      const res = await api.get(`/orginazation-dashboard/staff-cards/${id}`);
      setCard(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!card) return <div className="text-center py-12 text-[hsl(var(--text-muted))]">Loading...</div>;

  // Static QR code image (place your QR PNG/SVG in public/assets/)
  const staticQRImage = "/assets/qr-code-static.png"; // ← Change to your actual file name

  return (
    <div className="w-full max-w-[380px] mx-auto bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))]">
      {/* COVER */}
      <div className="relative h-40 bg-gradient-to-br from-[hsl(var(--accent)/0.15)] to-[hsl(var(--bg-secondary))]">
        {card.cover_image_url && (
          <img
            src={card.cover_image_url}
            alt="Cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* PROFILE */}
        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-xl overflow-hidden bg-[hsl(var(--card-bg))]">
            {card.profile_image_url ? (
              <img
                src={card.profile_image_url}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-[hsl(var(--text-muted))] bg-gradient-to-t from-black/30 to-transparent">
                Profile
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-16 px-6 pb-8 space-y-6">
        {/* NAME */}
        <div>
          <h3 className="font-bold text-xl text-[hsl(var(--text-primary))] truncate">
            {card.name}
          </h3>
          <p className="text-sm text-[hsl(var(--text-muted))] mt-1">
            {card.designation}
          </p>
        </div>

        {/* CONTACT */}
        <ContactRow icon="📞" value={card.phone} />
        <ContactRow icon="✉️" value={card.email} />
        <ContactRow icon="🌐" value={card.website} />

        {/* COMMUNITY */}
        {card.community_images?.length > 0 && (
          <>
            <Divider />
            <SectionTitle title="COMMUNITY" />
            <div className="flex gap-5 flex-wrap">
              {card.community_images.map((img, i) => (
                <div key={i} className="text-xs text-center">
                  <img
                    src={img.url}
                    alt={img.name || "Community"}
                    className="w-12 h-12 rounded-full object-cover mx-auto border border-[hsl(var(--border))] shadow-sm"
                  />
                  <div className="truncate w-16 mt-1.5 text-[hsl(var(--text-muted))]">
                    {img.name || "App"}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* COMPANY */}
        {(card.company_name || card.company_email) && (
          <>
            <Divider />
            <SectionTitle title="COMPANY" />
            <p className="text-sm font-medium text-[hsl(var(--text-primary))]">{card.company_name}</p>
            <p className="text-xs text-[hsl(var(--text-muted))]">{card.company_email}</p>
          </>
        )}

        {/* SERVICES */}
        {card.services?.length > 0 && (
          <>
            <Divider />
            <SectionTitle title="SERVICES" />
            <ul className="list-disc list-inside text-sm space-y-1.5 text-[hsl(var(--text-secondary))]">
              {card.services.map((s, i) => (
                <li key={i}>{s.service_name}</li>
              ))}
            </ul>
          </>
        )}

        {/* BROCHURES */}
        {card.brochures?.length > 0 && (
          <>
            <Divider />
            <SectionTitle title="BROCHURES" />
            {card.brochures.map((b, i) => (
              <a
                key={i}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[hsl(var(--accent))] hover:underline transition py-1"
              >
                📄 {b.name}
              </a>
            ))}
          </>
        )}

        {/* SOCIAL MEDIA + QR CODE BUTTON */}
        {(card.linkedin || card.instagram || card.facebook || card.youtube) && (
          <>
            <Divider />
            <div className="flex gap-7 pt-2 items-center">
              {card.linkedin && <SocialIcon url={card.linkedin} label="in" color="bg-[#0A66C2]" />}
              {card.instagram && (
                <SocialIcon url={card.instagram} label="📸" color="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
              )}
              {card.facebook && <SocialIcon url={card.facebook} label="f" color="bg-[#1877F2]" />}
              {card.youtube && <SocialIcon url={card.youtube} label="▶" color="bg-[#FF0000]" />}

              {/* QR CODE BUTTON - ORANGE CIRCLE */}
              <button
                onClick={() => setShowQRModal(true)}
                className="ml-auto w-11 h-11 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                title="Show QR Code"
              >
                <QrCode size={22} />
              </button>
            </div>
          </>
        )}

        {/* BOOK MEETING */}
        <div className="pt-4">
          <button
            onClick={() => setShowMeetingModal(true)}
            className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white py-3 rounded-xl font-medium shadow-lg transition-all active:scale-95"
          >
            📅 Book Meeting
          </button>
        </div>
      </div>

      {/* ================= QR CODE MODAL ================= */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
          <div className="bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl max-w-sm w-full p-6 border border-[hsl(var(--border))]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[hsl(var(--text-primary))]">Scan QR Code</h3>
              <button
                onClick={() => setShowQRModal(false)}
                className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-primary))]"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex flex-col items-center">
              {/* Static QR Code Image */}
              <div className="bg-white p-4 rounded-2xl shadow-inner">
                <img
                  src="/assets/qr-code-static.png"  // ← Your static QR image
                  alt="QR Code for Digital Card"
                  className="w-64 h-64 rounded-xl"
                />
              </div>

              <p className="text-center text-sm text-[hsl(var(--text-muted))] mt-6 max-w-[260px]">
                Scan this QR code with your phone to open the digital card instantly
              </p>

              {/* Download as PDF Button */}
              <button
                onClick={() => {
                  alert("Downloading as PDF... (You can implement real PDF generation here later using jsPDF + html2canvas)");
                }}
                className="mt-8 flex items-center gap-2 bg-[hsl(var(--accent))] text-white px-8 py-3 rounded-xl font-medium hover:bg-[hsl(var(--accent-dark))] transition-all"
              >
                <Download size={18} />
                Download as PDF
              </button>
            </div>
          </div>
        </div>
      )}

  {/* ================= MEETING MODAL ================= */}
      {showMeetingModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-[hsl(var(--card-bg))] w-full max-w-lg rounded-2xl shadow-2xl p-6 border border-[hsl(var(--border))] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowMeetingModal(false)}
              className="absolute top-4 right-4 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-primary))] transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-bold text-[hsl(var(--text-primary))] mb-6">
              Schedule Google Meet
            </h3>

            {/* NAME */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={meetingName}
                onChange={(e) => setMeetingName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
              />
            </div>

            {/* TITLE */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Meeting Title
              </label>
              <input
                type="text"
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
                placeholder="Enter meeting title"
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Description
              </label>
              <textarea
                value={meetingDescription}
                onChange={(e) => setMeetingDescription(e.target.value)}
                placeholder="Enter meeting description"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all resize-y"
              />
            </div>

            {/* DATE */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
              />
            </div>

            {/* TIME */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Select Time
              </label>
              <input
                type="time"
                value={meetingTime}
                onChange={(e) => setMeetingTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-primary))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowMeetingModal(false)}
                className="flex-1 px-6 py-3 rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-secondary))] transition font-medium"
              >
                Cancel
              </button>

              <button
                onClick={async () => {
                  if (
                    !meetingName ||
                    !meetingTitle ||
                    !meetingDate ||
                    !meetingTime
                  ) {
                    alert("Please fill all required fields");
                    return;
                  }

                  try {
                    const res = await api.post("/public/meeting-request", {
                      user_id: card.user_id,
                      name: meetingName,
                      title: meetingTitle,
                      description: meetingDescription,
                      date: meetingDate,
                      time: meetingTime,
                    });

                    if (res.data.success) {
                      alert(res.data.message);

                      // Reset fields
                      setMeetingName("");
                      setMeetingTitle("");
                      setMeetingDescription("");
                      setMeetingDate("");
                      setMeetingTime("");

                      setShowMeetingModal(false);
                    }
                  } catch (error) {
                    alert(
                      error.response?.data?.message || "Something went wrong"
                    );
                  }
                }}
                className="flex-1 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all active:scale-95"
              >
                Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function ContactRow({ icon, value }) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-3 bg-[hsl(var(--bg-secondary))] rounded-xl px-4 py-3 text-sm border border-[hsl(var(--border))]">
      <span className="text-xl opacity-90">{icon}</span>
      <span className="truncate text-[hsl(var(--text-primary))]">{value}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-[hsl(var(--border))] my-5" />;
}

function SectionTitle({ title }) {
  return <div className="text-xs font-semibold text-[hsl(var(--text-muted))] tracking-wider uppercase">{title}</div>;
}

function SocialIcon({ url, label, color }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-11 h-11 rounded-full ${color} text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-110 transition-transform duration-200`}
    >
      {label}
    </a>
  );
}