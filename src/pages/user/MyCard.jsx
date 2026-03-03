// import UserLayout from "../../components/layout/user/UserLayout";

// export default function MyCard() {
//   /* ================= MOCK USER CARD DATA ================= */
//   const card = {
//     name: "John Doe",
//     designation: "Senior Software Engineer",
//     company: "Pixl Technologies Pvt Ltd",
//     phone: "+91 98765 43210",
//     email: "john.doe@example.com",
//     website: "https://johndoe.dev",
//     address: "Bangalore, Karnataka, India",

//     profileImage: "https://i.pravatar.cc/150?img=12",
//     coverImage: "https://picsum.photos/600/200",

//     socials: {
//       linkedin: "https://linkedin.com/in/johndoe",
//       instagram: "https://instagram.com/johndoe",
//       facebook: "https://facebook.com/johndoe",
//       twitter: "",
//     },

//     services: [
//       "UI / UX Design",
//       "Frontend Development",
//       "React & Tailwind",
//       "API Integration",
//     ],
//   };

//   return (
//     <UserLayout>
//       <h2 className="text-xl font-semibold mb-6">My Digital Card</h2>

//       {/* ================= CARD PREVIEW ================= */}
//       <div className="flex justify-center">
//         <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
//           {/* COVER */}
//           <div className="relative h-32 bg-slate-300">
//             {card.coverImage && (
//               <img
//                 src={card.coverImage}
//                 alt="Cover"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             )}

//             {/* PROFILE IMAGE */}
//             <div className="absolute -bottom-10 left-5">
//               <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-slate-200">
//                 <img
//                   src={card.profileImage}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* BODY */}
//           <div className="pt-12 px-5 pb-5 space-y-4">
//             {/* NAME & DESIGNATION */}
//             <div>
//               <h3 className="font-bold text-lg">{card.name}</h3>
//               <p className="text-sm text-slate-500">{card.designation}</p>
//               <p className="text-xs text-slate-400">{card.company}</p>
//             </div>

//             {/* CONTACT DETAILS */}
//             <ContactRow icon="📞" value={card.phone} />
//             <ContactRow icon="✉️" value={card.email} />
//             <ContactRow icon="🌐" value={card.website} />
//             <ContactRow icon="📍" value={card.address} />

//             {/* SOCIAL LINKS */}
//             <div className="flex gap-3 pt-2">
//               {card.socials.linkedin && <SocialIcon label="in" />}
//               {card.socials.instagram && <SocialIcon label="📸" />}
//               {card.socials.facebook && <SocialIcon label="f" />}
//               {card.socials.twitter && <SocialIcon label="🐦" />}
//             </div>

//             {/* SERVICES */}
//             {card.services.length > 0 && (
//               <>
//                 <Divider />
//                 <SectionTitle title="SERVICES" />
//                 <ul className="list-disc list-inside text-sm space-y-1">
//                   {card.services.map((service, i) => (
//                     <li key={i}>{service}</li>
//                   ))}
//                 </ul>
//               </>
//             )}

//             {/* ACTION BUTTONS */}
//             <div className="flex gap-3 pt-4">
//               <button className="flex-1 bg-indigo-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition">
//                 Share Card
//               </button>

//               <button className="flex-1 bg-green-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-green-600 transition">
//                 Add to Contacts
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </UserLayout>
//   );
// }

// /* ================= SMALL UI COMPONENTS ================= */

// function ContactRow({ icon, value }) {
//   if (!value) return null;
//   return (
//     <div className="flex items-center gap-3 bg-slate-50 rounded-lg px-3 py-2 text-sm">
//       <span>{icon}</span>
//       <span className="truncate">{value}</span>
//     </div>
//   );
// }

// function SocialIcon({ label }) {
//   return (
//     <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm cursor-pointer">
//       {label}
//     </div>
//   );
// }

// function Divider() {
//   return <div className="h-px bg-slate-200 my-3" />;
// }

// function SectionTitle({ title }) {
//   return <div className="text-xs font-semibold text-slate-400">{title}</div>;
// }


// src/components/StaffCard.jsx
import UserLayout from "../../components/layout/user/UserLayout";

export default function MyCard() {
  /* ================= MOCK USER CARD DATA ================= */
  const card = {
    name: "John Doe",
    designation: "Senior Software Engineer",
    company: "Pixl Technologies Pvt Ltd",
    phone: "+91 98765 43210",
    email: "john.doe@example.com",
    website: "https://johndoe.dev",
    address: "Bangalore, Karnataka, India",

    profileImage: "https://i.pravatar.cc/150?img=12",
    coverImage: "https://picsum.photos/600/200",

    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      twitter: "",
    },

    services: [
      "UI / UX Design",
      "Frontend Development",
      "React & Tailwind",
      "API Integration",
    ],
  };

  return (
    <UserLayout>
      <h2 className="text-2xl font-bold text-[hsl(var(--text-primary))] mb-8">
        My Digital Card
      </h2>

      {/* ================= CARD PREVIEW ================= */}
      <div className="flex justify-center">
        <div className="w-full max-w-[380px] bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))]">
          {/* COVER */}
          <div className="relative h-40 bg-gradient-to-br from-[hsl(var(--accent)/0.2)] to-[hsl(var(--bg-secondary))]">
            {card.coverImage && (
              <img
                src={card.coverImage}
                alt="Cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* PROFILE IMAGE */}
            <div className="absolute -bottom-12 left-6">
              <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-xl overflow-hidden bg-[hsl(var(--card-bg))]">
                <img
                  src={card.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="pt-16 px-6 pb-8 space-y-6">
            {/* NAME & DESIGNATION */}
            <div>
              <h3 className="font-bold text-xl text-[hsl(var(--text-primary))] truncate">
                {card.name}
              </h3>
              <p className="text-sm text-[hsl(var(--text-muted))] mt-1">
                {card.designation}
              </p>
              <p className="text-sm font-medium text-[hsl(var(--text-primary))] mt-0.5">
                {card.company}
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <ContactRow icon="📞" value={card.phone} />
            <ContactRow icon="✉️" value={card.email} />
            <ContactRow icon="🌐" value={card.website} />
            <ContactRow icon="📍" value={card.address} />

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 pt-2">
              {card.socials.linkedin && <SocialIcon label="in" color="bg-[#0A66C2]" />}
              {card.socials.instagram && (
                <SocialIcon label="📸" color="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
              )}
              {card.socials.facebook && <SocialIcon label="f" color="bg-[#1877F2]" />}
              {card.socials.twitter && <SocialIcon label="🐦" color="bg-[#1DA1F2]" />}
            </div>

            {/* SERVICES */}
            {card.services.length > 0 && (
              <>
                <Divider />
                <SectionTitle title="SERVICES" />
                <ul className="list-disc list-inside text-sm space-y-2 text-[hsl(var(--text-secondary))]">
                  {card.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 pt-6">
              <button className="flex-1 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white py-3 rounded-xl font-medium shadow-lg transition-all active:scale-95">
                Share Card
              </button>

              <button className="flex-1 bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] py-3 rounded-xl font-medium hover:bg-[hsl(var(--accent)/0.1)] transition-all">
                Add to Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

/* ================= SMALL UI COMPONENTS (updated for dark/light) ================= */

function ContactRow({ icon, value }) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-3 bg-[hsl(var(--bg-secondary))] rounded-xl px-4 py-3 text-sm border border-[hsl(var(--border))]">
      <span className="text-xl opacity-90">{icon}</span>
      <span className="truncate text-[hsl(var(--text-primary))]">{value}</span>
    </div>
  );
}

function SocialIcon({ label, color }) {
  return (
    <div
      className={`w-11 h-11 rounded-full ${color} text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-110 transition-transform duration-200 cursor-pointer`}
    >
      {label}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-[hsl(var(--border))] my-5" />;
}

function SectionTitle({ title }) {
  return (
    <div className="text-xs font-semibold text-[hsl(var(--text-muted))] tracking-wider uppercase">
      {title}
    </div>
  );
}