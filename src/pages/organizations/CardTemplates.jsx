// //src/pages/organizations/CardTemplate.jsx
// import {
//   Phone,
//   Mail,
//   Globe,
//   Linkedin,
//   Facebook,
//   Instagram,
//   Youtube,
//   QrCode,
//   FileDown,
// } from "lucide-react";

// export function CardTemplatePremium({ data = {} }) {
//   const {
//     name,
//     role,
//     phone,
//     email,
//     website,
//     company,
//     address,
//     services = [],
//     communities = [],
//   } = data;

//   return (
//     <div className="card">
//       {/* COVER */}
//       <div className="relative h-36 bg-[#3a250f]">
//         <div className="absolute -bottom-10 left-6">
//           <div className="w-20 h-20 rounded-full bg-white p-1 shadow-lg">
//             <div className="w-full h-full rounded-full bg-gray-300" />
//           </div>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="pt-12 px-6 pb-6">
//         {/* NAME */}
//         <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
//         <p className="text-sm text-gray-500">{role}</p>

//         {/* CONTACT */}
//         <div className="mt-6 space-y-3">
//           <div className="contact-row">
//             <span className="contact-icon bg-green-500/10 text-green-600">
//               <Phone size={16} />
//             </span>
//             <span className="contact-text">{phone}</span>
//           </div>

//           <div className="contact-row">
//             <span className="contact-icon bg-blue-500/10 text-blue-600">
//               <Mail size={16} />
//             </span>
//             <span className="contact-text">{email}</span>
//           </div>

//           <div className="contact-row">
//             <span className="contact-icon bg-indigo-500/10 text-indigo-600">
//               <Globe size={16} />
//             </span>
//             <a
//               href={website}
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               {website}
//             </a>
//           </div>
//         </div>

//         {/* SOCIAL ICONS (IMAGE MATCH) */}
//         <div className="flex gap-3 mt-5">
//           <a className="social-modern bg-green-500/90">
//             <Phone size={16} />
//           </a>
//           <a className="social-modern bg-[#0A66C2]">
//             <Linkedin size={16} />
//           </a>
//           <a className="social-modern bg-[#1877F2]">
//             <Facebook size={16} />
//           </a>
//           <a className="social-modern bg-gradient-to-tr from-[#E1306C] to-[#F77737]">
//             <Instagram size={16} />
//           </a>
//           <a className="social-modern bg-[#FF0000]">
//             <Youtube size={16} />
//           </a>
//         </div>
//         <hr className="my-6" />
//         {/* ACTION ROW */}
//         <div className="flex items-center justify-between mt-7">
//           {/* LEFT ACTIONS */}
//           <div className="flex gap-3">
//             <button className="action-icon bg-blue-600/90">
//               <QrCode size={16} />
//             </button>
//             <button className="action-icon bg-red-600/90">
//               <FileDown size={16} />
//             </button>
//           </div>

//           {/* PRIMARY CTA */}
//           <button className="action-primary">Add to Contacts</button>
//         </div>

//         <div className="mt-8">
//           <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
//             Community
//           </p>

//           <div className="flex gap-5">
//             {communities.map((c, i) => (
//               <div key={i} className="flex flex-col items-center text-center">
//                 <div
//                   className="w-16 h-16 rounded-full bg-white shadow-md 
//                         flex items-center justify-center
//                         hover:scale-105 transition"
//                 >
//                   <img
//                     src={c.image}
//                     alt={c.name}
//                     className="w-8 h-8 object-contain"
//                   />
//                 </div>

//                 <p className="mt-2 text-xs font-medium text-gray-700">
//                   {c.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* COMPANY */}
//         <hr className="my-6" />
//         <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
//           Company
//         </p>
//         <p className="text-sm font-medium text-gray-800">{company}</p>
//         <p className="text-sm text-gray-600">{address}</p>

//         {/* SERVICES */}
//         <hr className="my-6" />
//         <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
//           Services
//         </p>
//         <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
//           {services.map((s, i) => (
//             <li key={i}>{s}</li>
//           ))}
//         </ul>

//         {/* FOOTER */}
//         <div className="flex justify-between items-center mt-8 text-xs text-gray-400">
//           <span>© OneDesk</span>
//           <span>Powered by OneDesk</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ===============================
//    TEMPLATE 2 — MINIMAL / EXEC
//    =============================== */

// export function CardTemplateMinimal({ data = {} }) {
//   const { name, role, phone, email, website, services = [] } = data;

//   return (
//     <div className="card p-6">
//       {/* HEADER */}
//       <div className="flex items-center gap-4">
//         {/* Avatar */}
//         <div
//           className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 
//                         flex items-center justify-center text-xs text-gray-500 shadow-sm"
//         >
//           Photo
//         </div>

//         {/* Name & Role */}
//         <div>
//           <h2 className="text-[17px] font-semibold text-gray-900 leading-tight">
//             {name}
//           </h2>
//           <p className="text-[13px] text-gray-500 mt-0.5">{role}</p>
//         </div>
//       </div>

//       {/* CONTACT INFO */}
//       <div className="mt-6 space-y-3">
//         {phone && (
//           <div className="contact-row">
//             <span className="contact-icon bg-green-500/10 text-green-600">
//               <Phone size={16} />
//             </span>
//             <span className="contact-text">{phone}</span>
//           </div>
//         )}

//         {email && (
//           <div className="contact-row">
//             <span className="contact-icon bg-blue-500/10 text-blue-600">
//               <Mail size={16} />
//             </span>
//             <span className="contact-text">{email}</span>
//           </div>
//         )}

//         {website && (
//           <div className="contact-row">
//             <span className="contact-icon bg-indigo-500/10 text-indigo-600">
//               <Globe size={16} />
//             </span>
//             <a
//               href={website}
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               {website}
//             </a>
//           </div>
//         )}
//       </div>

//       {/* DIVIDER */}
//       <div className="h-px bg-gray-200 my-6" />

//       {/* EXPERTISE */}
//       {services.length > 0 && (
//         <>
//           <p className="section-title mb-3">Expertise</p>

//           <div className="flex flex-wrap gap-2">
//             {services.map((s, i) => (
//               <span key={i} className="chip">
//                 {s}
//               </span>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// /* ===============================
//    TEMPLATE 3 — DARK / LUXURY
//    =============================== */
// export function CardTemplateDark({ data = {} }) {
//   const { name, role, bio, phone, email, website } = data;

//   return (
//     <div className="max-w-md mx-auto bg-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden">
//       <div className="p-6 text-center">
//         <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4" />

//         <h2 className="text-lg font-semibold">{name}</h2>
//         <p className="text-sm text-gray-400">{role}</p>

//         {bio && (
//           <p className="text-sm text-gray-300 mt-4 leading-relaxed">{bio}</p>
//         )}

//         <div className="mt-6 space-y-2 text-sm text-gray-300">
//           <p>{phone}</p>
//           <p>{email}</p>
//           <p className="text-blue-400">{website}</p>
//         </div>

//         <button className="mt-6 w-full py-3 rounded-xl bg-green-600 text-sm font-medium">
//           Add to Contacts
//         </button>
//       </div>
//     </div>
//   );
// }


// src/pages/organizations/CardTemplate.jsx
import {
  Phone,
  Mail,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  QrCode,
  FileDown,
} from "lucide-react";

export function CardTemplatePremium({ data = {} }) {
  const {
    name,
    role,
    phone,
    email,
    website,
    company,
    address,
    services = [],
    communities = [],
  } = data;

  return (
    <div className="bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))] transition-all duration-300 hover:shadow-3xl">
      {/* COVER */}
      <div className="relative h-40 bg-gradient-to-br from-[hsl(var(--accent)/0.2)] to-[hsl(var(--bg-secondary))]">
        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-xl overflow-hidden bg-[hsl(var(--card-bg))]">
            {/* Placeholder avatar - replace with real image when available */}
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xs text-gray-600 font-bold">
              {name?.charAt(0) || "?"}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-16 px-6 pb-8 space-y-6">
        {/* NAME & ROLE */}
        <div>
          <h2 className="text-xl font-bold text-[hsl(var(--text-primary))] truncate">
            {name || "Your Name"}
          </h2>
          <p className="text-sm text-[hsl(var(--text-muted))] mt-1">
            {role || "Your Role"}
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          {phone && (
            <div className="flex items-center gap-3 bg-[hsl(var(--bg-secondary))] rounded-xl px-4 py-3 border border-[hsl(var(--border))]">
              <span className="text-xl text-green-500"><Phone size={18} /></span>
              <span className="text-[hsl(var(--text-primary))]">{phone}</span>
            </div>
          )}

          {email && (
            <div className="flex items-center gap-3 bg-[hsl(var(--bg-secondary))] rounded-xl px-4 py-3 border border-[hsl(var(--border))]">
              <span className="text-xl text-blue-500"><Mail size={18} /></span>
              <span className="text-[hsl(var(--text-primary))]">{email}</span>
            </div>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[hsl(var(--bg-secondary))] rounded-xl px-4 py-3 border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent)/0.1)] transition-colors"
            >
              <span className="text-xl text-indigo-500"><Globe size={18} /></span>
              <span className="text-[hsl(var(--accent))] truncate">{website}</span>
            </a>
          )}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <Phone size={18} />
          </a>
          <a className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <Linkedin size={18} />
          </a>
          <a className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <Facebook size={18} />
          </a>
          <a className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E1306C] to-[#F77737] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <Instagram size={18} />
          </a>
          <a className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <Youtube size={18} />
          </a>
        </div>

        <hr className="my-6 border-[hsl(var(--border))]" />

        {/* ACTION ROW */}
        <div className="flex items-center justify-between mt-7">
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-xl bg-blue-600/90 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-md hover:scale-105">
              <QrCode size={20} />
            </button>
            <button className="w-12 h-12 rounded-xl bg-red-600/90 text-white flex items-center justify-center hover:bg-red-700 transition-all shadow-md hover:scale-105">
              <FileDown size={20} />
            </button>
          </div>

          <button className="px-6 py-3 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white rounded-xl font-medium shadow-lg transition-all active:scale-95">
            Add to Contacts
          </button>
        </div>

        {/* COMMUNITY */}
        {communities.length > 0 && (
          <div className="mt-8">
            <p className="text-xs uppercase tracking-wide text-[hsl(var(--text-muted))] mb-4">
              Community
            </p>

            <div className="flex flex-wrap gap-6">
              {communities.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--bg-secondary))] shadow-md flex items-center justify-center border border-[hsl(var(--border))] group-hover:scale-110 transition-transform">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-[hsl(var(--text-primary))] group-hover:text-[hsl(var(--accent))] transition-colors">
                    {c.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* COMPANY */}
        <hr className="my-6 border-[hsl(var(--border))]" />
        <p className="text-xs uppercase tracking-wide text-[hsl(var(--text-muted))] mb-2">
          Company
        </p>
        <p className="text-sm font-medium text-[hsl(var(--text-primary))]">{company}</p>
        <p className="text-sm text-[hsl(var(--text-muted))]">{address}</p>

        {/* SERVICES */}
        <hr className="my-6 border-[hsl(var(--border))]" />
        <p className="text-xs uppercase tracking-wide text-[hsl(var(--text-muted))] mb-3">
          Services
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 text-[hsl(var(--text-secondary))]">
          {services.map((s, i) => (
            <li key={i} className="pl-1">{s}</li>
          ))}
        </ul>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-10 text-xs text-[hsl(var(--text-muted))]">
          <span>© OneDesk</span>
          <span>Powered by OneDesk</span>
        </div>
      </div>
    </div>
  );
}

/* ===============================
   TEMPLATE 2 — MINIMAL / EXEC
   =============================== */

export function CardTemplateMinimal({ data = {} }) {
  const { name, role, phone, email, website, services = [] } = data;

  return (
    <div className="bg-[hsl(var(--card-bg))] rounded-3xl shadow-xl overflow-hidden border border-[hsl(var(--border))] transition-all duration-300 hover:shadow-2xl">
      {/* HEADER */}
      <div className="p-6 flex items-center gap-5 border-b border-[hsl(var(--border))]">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--bg-secondary))] to-[hsl(var(--bg-secondary)/0.8)] flex items-center justify-center text-xs text-[hsl(var(--text-muted))] shadow-md">
          {name?.charAt(0) || "?"}
        </div>

        {/* Name & Role */}
        <div>
          <h2 className="text-xl font-bold text-[hsl(var(--text-primary))] leading-tight">
            {name || "Your Name"}
          </h2>
          <p className="text-sm text-[hsl(var(--text-muted))] mt-1">{role || "Your Role"}</p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="p-6 space-y-4">
        {phone && (
          <div className="flex items-center gap-4 bg-[hsl(var(--bg-secondary))] rounded-xl px-5 py-4 border border-[hsl(var(--border))]">
            <span className="text-xl text-green-500"><Phone size={20} /></span>
            <span className="text-[hsl(var(--text-primary))]">{phone}</span>
          </div>
        )}

        {email && (
          <div className="flex items-center gap-4 bg-[hsl(var(--bg-secondary))] rounded-xl px-5 py-4 border border-[hsl(var(--border))]">
            <span className="text-xl text-blue-500"><Mail size={20} /></span>
            <span className="text-[hsl(var(--text-primary))]">{email}</span>
          </div>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[hsl(var(--bg-secondary))] rounded-xl px-5 py-4 border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent)/0.1)] transition-colors"
          >
            <span className="text-xl text-indigo-500"><Globe size={20} /></span>
            <span className="text-[hsl(var(--accent))] truncate">{website}</span>
          </a>
        )}
      </div>

      {/* DIVIDER */}
      <hr className="border-[hsl(var(--border))] mx-6" />

      {/* EXPERTISE */}
      {services.length > 0 && (
        <div className="p-6">
          <p className="text-xs uppercase tracking-wide text-[hsl(var(--text-muted))] mb-4">
            Expertise
          </p>

          <div className="flex flex-wrap gap-2">
            {services.map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[hsl(var(--bg-secondary))] rounded-full text-sm text-[hsl(var(--text-primary))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent)/0.15)] transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ===============================
   TEMPLATE 3 — DARK / LUXURY
   =============================== */
export function CardTemplateDark({ data = {} }) {
  const { name, role, bio, phone, email, website } = data;

  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
      <div className="p-8 text-center space-y-6">
        {/* Avatar placeholder */}
        <div className="w-28 h-28 rounded-full bg-gray-800 mx-auto mb-6 shadow-inner border border-gray-700 flex items-center justify-center text-3xl font-bold text-gray-400">
          {name?.charAt(0) || "?"}
        </div>

        <h2 className="text-2xl font-bold">{name || "Your Name"}</h2>
        <p className="text-lg text-gray-400">{role || "Your Role"}</p>

        {bio && (
          <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
            {bio}
          </p>
        )}

        <div className="space-y-4 text-base">
          {phone && <p className="flex items-center justify-center gap-3"><Phone size={18} /> {phone}</p>}
          {email && <p className="flex items-center justify-center gap-3"><Mail size={18} /> {email}</p>}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center justify-center gap-3"
            >
              <Globe size={18} /> {website}
            </a>
          )}
        </div>

        <button className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium shadow-lg hover:from-green-500 hover:to-emerald-500 transition-all active:scale-95">
          Add to Contacts
        </button>
      </div>
    </div>
  );
}