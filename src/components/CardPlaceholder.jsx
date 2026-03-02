// export default function CardPlaceholder({ onAssign }) {
//   return (
//     <div
//       onClick={onAssign}
//       className="border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
//     >
//       <div className="w-12 h-12 rounded-full bg-gray-200 mb-2" />
//       <p className="text-sm font-medium text-gray-600">Unassigned Card</p>
//       <p className="text-xs text-gray-400">Click to assign</p>
//     </div>
//   );
// // }


// //src/components/CardPlaceholder.jsx
// import { useNavigate } from "react-router-dom";

// export default function CardPlaceholder() {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate("/add-staff-cards")}
//       className="border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
//     >
//       <div className="w-12 h-12 rounded-full bg-gray-200 mb-2" />
//       <p className="text-sm font-medium text-gray-600">Assign New Card</p>
//     </div>
//   );
// }
// src/components/CardPlaceholder.jsx
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

export default function CardPlaceholder() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/add-staff-cards")}
      className={`
        border-2 border-dashed border-[hsl(var(--border))] 
        rounded-2xl p-6 md:p-8 
        flex flex-col items-center justify-center 
        cursor-pointer 
        transition-all duration-300 
        hover:border-[hsl(var(--accent))] 
        hover:bg-[hsl(var(--accent)/0.08)] 
        hover:shadow-xl 
        active:scale-[0.98]
        bg-[hsl(var(--card-bg))]
        min-h-[220px]
      `}
    >
      <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent)/0.15)] flex items-center justify-center mb-4 border border-[hsl(var(--accent)/0.3)] shadow-sm">
        <Plus size={32} className="text-[hsl(var(--accent))]" strokeWidth={2.5} />
      </div>

      <p className="text-base font-semibold text-[hsl(var(--text-primary))] mb-1">
        Assign New Card
      </p>

      <p className="text-xs text-[hsl(var(--text-muted))] text-center max-w-[180px]">
        Click to create and assign a digital card to a staff member
      </p>
    </div>
  );
}