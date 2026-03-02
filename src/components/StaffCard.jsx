// // src/components/StaffCard.jsx
// import { useNavigate } from "react-router-dom";

// export default function StaffCard({ employee }) {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
//       <div className="flex items-center gap-4">
//         <img
//           src={employee.avatar}
//           alt="avatar"
//           className="w-12 h-12 rounded-full object-cover"
//         />

//         <div className="flex-1">
//           <h4 className="font-semibold text-sm">{employee.name}</h4>
//           <p className="text-xs text-gray-500">{employee.role}</p>
//           <p className="text-xs text-gray-400">{employee.location}</p>
//         </div>

//         <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
//           Assigned
//         </span>
//       </div>

//       {/* ACTION ROW */}
//       <div className="mt-3 flex items-center justify-between">
//         <div className="flex gap-2">
//           {/* VIEW */}
//           <button
//             className="text-xs bg-gray-100 px-3 py-1 rounded"
//             // onClick={() => navigate(`/card-preview/${employee.staff_card_id}`)}
//             onClick={() =>
//               navigate(
//                 `/${employee.organization_slug}/${employee.staff_card_id}`,
//               )
//             }
//           >
//             View
//           </button>

//           {/* EDIT */}
//           <button
//             className="text-xs bg-black text-white px-3 py-1 rounded"
//             onClick={() =>
//               navigate(`/edit-staff-cards/${employee.staff_card_id}`)
//             }
//           >
//             Edit {employee.staff_card_id}
//           </button>

//           {/* EXPIRY */}
//           <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium flex items-center">
//             ⏳ Valid till {employee.exp}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/StaffCard.jsx
import { useNavigate } from "react-router-dom";

export default function StaffCard({ employee }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[hsl(var(--card-bg))] rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[hsl(var(--border))] hover:scale-[1.02] group">
      <div className="flex items-center gap-4">
        {/* Avatar with status dot */}
        <div className="relative flex-shrink-0">
          <img
            src={employee.avatar}
            alt={employee.name || "Staff"}
            className="w-14 h-14 rounded-full object-cover border-2 border-[hsl(var(--accent)/0.3)] shadow-md"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name || "Staff")}&background=random&color=fff`;
            }}
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-[hsl(var(--card-bg))] rounded-full"></span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-base text-[hsl(var(--text-primary))] truncate group-hover:text-[hsl(var(--accent))] transition-colors">
            {employee.name || "Unnamed Staff"}
          </h4>
          <p className="text-sm text-[hsl(var(--text-secondary))]">{employee.role || "—"}</p>
          <p className="text-xs text-[hsl(var(--text-muted))] mt-0.5">
            {employee.location || "No location"}
          </p>
        </div>

        {/* Assigned Badge */}
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-400 border border-emerald-700/30 whitespace-nowrap">
          Assigned
        </span>
      </div>

      {/* ACTION ROW */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2.5 flex-wrap">
          {/* VIEW BUTTON */}
          <button
            onClick={() =>
              navigate(`/${employee.organization_slug}/${employee.staff_card_id}`)
            }
            className="text-sm px-5 py-2.5 rounded-xl bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white font-medium transition-all shadow-md active:scale-95"
          >
            View
          </button>

          {/* EDIT BUTTON */}
          <button
            onClick={() =>
              navigate(`/edit-staff-cards/${employee.staff_card_id}`)
            }
            className="text-sm px-5 py-2.5 rounded-xl bg-[hsl(var(--card-bg))] border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--accent)/0.1)] hover:border-[hsl(var(--accent))] transition-all font-medium"
          >
            Edit
          </button>
        </div>

        {/* EXPIRY BADGE */}
        <span className="text-xs bg-amber-900/40 text-amber-400 px-3 py-1.5 rounded-full font-medium border border-amber-700/30 flex items-center gap-1.5 whitespace-nowrap">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Valid till {employee.exp || "—"}
        </span>
      </div>
    </div>
  );
}
// //ABOVE IS WORKING 
// // src/components/StaffCard.jsx
// import { useNavigate } from "react-router-dom";

// export default function StaffCard({ employee }) {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-[hsl(var(--card-bg))] rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-[hsl(var(--border))] hover:scale-[1.02]">
//       <div className="flex items-center gap-4">
//         {/* Avatar */}
//         <div className="relative">
//           <img
//             src={employee.avatar}
//             alt={employee.name}
//             className="w-14 h-14 rounded-full object-cover border-2 border-[hsl(var(--accent)/0.3)] shadow-md"
//           />
//           {/* Online/Status ring (optional) */}
//           <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-[hsl(var(--card-bg))] rounded-full"></span>
//         </div>

//         {/* Info */}
//         <div className="flex-1 min-w-0">
//           <h4 className="font-semibold text-base text-[hsl(var(--text-primary))] truncate">
//             {employee.name}
//           </h4>
//           <p className="text-sm text-[hsl(var(--text-secondary))]">{employee.role}</p>
//           <p className="text-xs text-[hsl(var(--text-muted))] mt-0.5">{employee.location || "—"}</p>
//         </div>

//         {/* Assigned Badge */}
//         <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-400 border border-emerald-700/30">
//           Assigned
//         </span>
//       </div>

//       {/* ACTION ROW */}
//       <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
//         <div className="flex gap-2.5">
//           {/* VIEW */}
//           <button
//             onClick={() =>
//               navigate(`/${employee.organization_slug}/${employee.staff_card_id}`)
//             }
//             className="text-sm px-5 py-2 rounded-xl bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white font-medium transition-all shadow-md active:scale-95"
//           >
//             View
//           </button>

//           {/* EDIT */}
//           <button
//             onClick={() =>
//               navigate(`/edit-staff-cards/${employee.staff_card_id}`)
//             }
//             className="text-sm px-5 py-2 rounded-xl bg-[hsl(var(--card-bg))] border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--accent)/0.1)] transition-all font-medium"
//           >
//             Edit
//           </button>
//         </div>

//         {/* EXPIRY */}
//         <span className="text-xs bg-amber-900/40 text-amber-400 px-3 py-1.5 rounded-full font-medium border border-amber-700/30 flex items-center gap-1.5">
//           <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           Valid till {employee.exp}
//         </span>
//       </div>
//     </div>
//   );
// }
