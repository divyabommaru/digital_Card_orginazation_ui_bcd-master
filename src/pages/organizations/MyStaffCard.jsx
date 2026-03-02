// import { useEffect, useState } from "react";
// import api from "../../api/axios";
// import UserLayout from "../../components/layout/user/UserLayout";

// export default function MyStaffCard() {
//   const [card, setCard] = useState(null);

//   useEffect(() => {
//     fetchCard();
//   }, []);

//   const fetchCard = async () => {
//     try {
//       const res = await api.get("/orginazation-dashboard/my-staff-card");

//       if (res.data.success) {
//         setCard(res.data.data);
//       }
//     } catch (err) {
//       console.log("Error fetching card:", err);
//     }
//   };

//   if (!card) return <div>Loading...</div>;

//   return (
//     <UserLayout>
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden"></div>
//         <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
//           {/* COVER */}
//           <div className="relative h-36 bg-yellow-100">
//             {card.cover_image_url && (
//               <img
//                 src={card.cover_image_url}
//                 className="w-full h-full object-cover"
//                 alt="Cover"
//               />
//             )}

//             {/* PROFILE */}
//             <div className="absolute -bottom-10 left-6">
//               <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
//                 {card.profile_image_url ? (
//                   <img
//                     src={card.profile_image_url}
//                     className="w-full h-full object-cover"
//                     alt="Profile"
//                   />
//                 ) : (
//                   <div className="flex items-center justify-center h-full text-xs text-gray-400">
//                     Profile
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="pt-12 px-5 pb-6 space-y-4">
//             {/* NAME */}
//             <div>
//               <h3 className="font-bold text-lg">{card.name}</h3>
//               <p className="text-xs text-gray-500">{card.designation}</p>
//             </div>

//             {/* CONTACT */}
//             <ContactRow icon="📞" value={card.phone} />
//             <ContactRow icon="✉️" value={card.email} />
//             <ContactRow icon="🌐" value={card.website} />

//             {/* COMMUNITY */}
//             {card.community_images?.length > 0 && (
//               <>
//                 <Divider />
//                 <SectionTitle title="COMMUNITY" />
//                 <div className="flex gap-4 flex-wrap">
//                   {card.community_images.map((img, i) => (
//                     <div key={i} className="text-xs text-center">
//                       <img
//                         src={img.url}
//                         className="w-10 h-10 rounded-full object-cover mx-auto"
//                         alt={img.name}
//                       />
//                       <div className="truncate w-14 mt-1">{img.name}</div>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* COMPANY */}
//             {(card.company_name || card.company_email) && (
//               <>
//                 <Divider />
//                 <SectionTitle title="COMPANY" />
//                 <p className="text-sm font-medium">{card.company_name}</p>
//                 <p className="text-xs text-gray-500">{card.company_email}</p>
//               </>
//             )}

//             {/* SERVICES */}
//             {card.services?.length > 0 && (
//               <>
//                 <Divider />
//                 <SectionTitle title="SERVICES" />
//                 <ul className="list-disc list-inside text-sm space-y-1">
//                   {card.services.map((s, i) => (
//                     <li key={i}>{s.service_name}</li>
//                   ))}
//                 </ul>
//               </>
//             )}

//             {/* BROCHURES */}
//             {card.brochures?.length > 0 && (
//               <>
//                 <Divider />
//                 <SectionTitle title="BROCHURES" />
//                 {card.brochures.map((b, i) => (
//                   <a
//                     key={i}
//                     href={b.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-600 text-sm block"
//                   >
//                     📄 {b.name}
//                   </a>
//                 ))}
//               </>
//             )}

//             {/* SOCIAL MEDIA */}
//             {(card.linkedin ||
//               card.instagram ||
//               card.facebook ||
//               card.youtube) && (
//               <>
//                 <Divider />
//                 <div className="flex gap-4 pt-2">
//                   {card.linkedin && (
//                     <SocialIcon url={card.linkedin} label="in" />
//                   )}
//                   {card.instagram && (
//                     <SocialIcon url={card.instagram} label="📸" />
//                   )}
//                   {card.facebook && (
//                     <SocialIcon url={card.facebook} label="f" />
//                   )}
//                   {card.youtube && <SocialIcon url={card.youtube} label="▶" />}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </UserLayout>
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


// src/components/MyStaffCard.jsx
import { useEffect, useState } from "react";
import api from "../../api/axios";
import UserLayout from "../../components/layout/user/UserLayout";

export default function MyStaffCard() {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      setLoading(true);
      const res = await api.get("/orginazation-dashboard/my-staff-card");

      if (res.data.success) {
        setCard(res.data.data);
      }
    } catch (err) {
      console.log("Error fetching card:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <UserLayout>
        <div className="flex justify-center items-center min-h-screen bg-[hsl(var(--bg-primary))]">
          <div className="text-[hsl(var(--text-muted))] text-lg animate-pulse">
            Loading your digital card...
          </div>
        </div>
      </UserLayout>
    );
  }

  if (!card) {
    return (
      <UserLayout>
        <div className="flex justify-center items-center min-h-screen bg-[hsl(var(--bg-primary))]">
          <div className="text-center text-[hsl(var(--text-muted))] text-lg">
            No staff card found.<br />
            <span className="text-sm mt-2 block">Create one from the Edit Card section.</span>
          </div>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="flex justify-center items-center min-h-screen bg-[hsl(var(--bg-primary))] px-4 py-12">
        <div className="w-full max-w-[380px] bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))]">
          {/* COVER + PROFILE OVERLAP */}
          <div className="relative h-44 bg-gradient-to-br from-[hsl(var(--accent)/0.15)] to-[hsl(var(--bg-secondary))]">
            {card.cover_image_url && (
              <img
                src={card.cover_image_url}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Cover"
              />
            )}

            {/* PROFILE CIRCLE */}
            <div className="absolute -bottom-12 left-6">
              <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-xl overflow-hidden bg-[hsl(var(--card-bg))] ring-2 ring-[hsl(var(--accent)/0.4)]">
                {card.profile_image_url ? (
                  <img
                    src={card.profile_image_url}
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-xs text-[hsl(var(--text-muted))] font-medium bg-gradient-to-t from-black/30 to-transparent">
                    Profile
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CARD BODY */}
          <div className="pt-16 px-6 pb-8 space-y-6">
            {/* NAME & DESIGNATION */}
            <div>
              <h3 className="font-bold text-xl text-[hsl(var(--text-primary))] truncate">
                {card.name || "Your Name"}
              </h3>
              <p className="text-sm text-[hsl(var(--text-muted))] mt-1">
                {card.designation || "Your Designation"}
              </p>
            </div>

            {/* CONTACT ROWS */}
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
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--bg-secondary))] flex items-center justify-center text-xl shadow-sm border border-[hsl(var(--border))]">
                        💬
                      </div>
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
                <p className="text-sm font-medium text-[hsl(var(--text-primary))]">
                  {card.company_name || "Company Name"}
                </p>
                <p className="text-xs text-[hsl(var(--text-muted))]">
                  {card.company_email || "company@email.com"}
                </p>
              </>
            )}

            {/* SERVICES */}
            {card.services?.length > 0 && (
              <>
                <Divider />
                <SectionTitle title="SERVICES" />
                <ul className="list-disc list-inside text-sm space-y-1.5 text-[hsl(var(--text-secondary))]">
                  {card.services.map((s, i) => (
                    <li key={i}>{s.service_name || s}</li>
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
                    className="text-sm text-[hsl(var(--accent))] hover:underline transition flex items-center gap-2"
                  >
                    <span>📄</span> {b.name || `Brochure ${i + 1}`}
                  </a>
                ))}
              </>
            )}

            {/* SOCIAL MEDIA */}
            {(card.linkedin ||
              card.instagram ||
              card.facebook ||
              card.youtube) && (
              <>
                <Divider />
                <div className="flex gap-5 pt-3">
                  {card.linkedin && (
                    <SocialIcon url={card.linkedin} label="in" color="bg-[#0A66C2]" />
                  )}
                  {card.instagram && (
                    <SocialIcon url={card.instagram} label="📸" color="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
                  )}
                  {card.facebook && (
                    <SocialIcon url={card.facebook} label="f" color="bg-[#1877F2]" />
                  )}
                  {card.youtube && (
                    <SocialIcon url={card.youtube} label="▶" color="bg-[#FF0000]" />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

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