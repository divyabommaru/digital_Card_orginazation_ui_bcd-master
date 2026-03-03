// //src/pages/organizations/ShowCard.jsx
// import { ArrowLeft } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import AdminLayout from "../../components/layout/AdminLayout";
// import { CardTemplatePremium } from "./CardTemplates";

// export default function ShowCard() {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   /* MOCK FETCH (replace with API later) */
//   const card = {
//     id,
//     name: "Rahul Sharma",
//     email: "rahul@gmail.com",
//   };

//   const organization = {
//     name: "ABC Corporation",
//     phone: "+91 98765 43210",
//   };

//   const cardData = {
//     name: card.name,
//     role: "Employee",
//     phone: organization.phone,
//     email: card.email,
//     website: "https://example.com",

//     company: organization.name,
//     address: "Bangalore, India",

//     services: ["Digital Business Card", "Networking", "Lead Management"],

//     communities: [
//       {
//         name: "WhatsApp",
//         image: "/community/whatsapp.png",
//         url: "https://chat.whatsapp.com/xxxx",
//       },
//       {
//         name: "Telegram",
//         image: "/community/telegram.png",
//         url: "https://t.me/xxxx",
//       },
//       {
//         name: "Discord",
//         image: "/community/discord.png",
//         url: "https://discord.gg/xxxx",
//       },
//     ],
//   };

//   return (
//     <AdminLayout>
//       {/* BACK */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 text-gray-600 mb-6 hover:text-indigo-600"
//       >
//         <ArrowLeft size={18} />
//         Back to Cards
//       </button>

//       {/* CARD VIEW */}
//       <div className="flex justify-center">
//         <CardTemplatePremium data={cardData} />
//       </div>
//     </AdminLayout>
//   );
// }


// src/pages/organizations/ShowCard.jsx
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout";
import { CardTemplatePremium } from "./CardTemplates";

export default function ShowCard() {
  const navigate = useNavigate();
  const { id } = useParams();

  /* MOCK FETCH (replace with API later) */
  const card = {
    id,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
  };

  const organization = {
    name: "ABC Corporation",
    phone: "+91 98765 43210",
  };

  const cardData = {
    name: card.name,
    role: "Employee",
    phone: organization.phone,
    email: card.email,
    website: "https://example.com",

    company: organization.name,
    address: "Bangalore, India",

    services: ["Digital Business Card", "Networking", "Lead Management"],

    communities: [
      {
        name: "WhatsApp",
        image: "/community/whatsapp.png",
        url: "https://chat.whatsapp.com/xxxx",
      },
      {
        name: "Telegram",
        image: "/community/telegram.png",
        url: "https://t.me/xxxx",
      },
      {
        name: "Discord",
        image: "/community/discord.png",
        url: "https://discord.gg/xxxx",
      },
    ],
  };

  return (
    <AdminLayout>
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))] mb-8 transition-colors font-medium text-lg"
      >
        <ArrowLeft size={20} />
        Back to Cards
      </button>

      {/* CARD VIEW */}
      <div className="flex justify-center">
        <div className="w-full max-w-[420px] bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))] transition-all duration-300 hover:shadow-3xl">
          <CardTemplatePremium data={cardData} />
        </div>
      </div>
    </AdminLayout>
  );
}