// // src/components/UserStaffCardForm.jsx
// import { useState, useEffect } from "react";
// // import AdminLayout from "./layout/AdminLayout"; // keep same layout if needed
// // import UserLayout from "../../components/layout/user/UserLayout";
// import { successAlert, errorAlert } from "../utils/alert";
// import api from "../api/axios";
// import UserLayout from "./layout/user/UserLayout";

// export default function StaffCardForm() {
//   const [form, setForm] = useState({
//     name: "",
//     designation: "",
//     phone: "",
//     email: "",
//     website: "",
//     company_name: "",
//     company_email: "",
//     services: [],
//     profile_image: null,
//     cover_image: null,
//     brochures: [],
//     community_images: [],
//     socials: {
//       linkedin: "",
//       instagram: "",
//       facebook: "",
//       youtube: "",
//     },
//   });

//   const [profilePreview, setProfilePreview] = useState(null);
//   const [coverPreview, setCoverPreview] = useState(null);
//   const [serviceInput, setServiceInput] = useState("");

//   /* ================= FETCH LOGGED USER CARD ================= */

//   useEffect(() => {
//     const fetchMyCard = async () => {
//       try {
//         const res = await api.get("/orginazation-dashboard/my-staff-card");

//         if (!res.data.success) return;

//         const data = res.data.data;

//         const serviceNames = data.services
//           ? data.services.map((s) => s.service_name)
//           : [];

//         setForm({
//           name: data.name || "",
//           designation: data.designation || "",
//           phone: data.phone || "",
//           email: data.email || "",
//           website: data.website || "",
//           company_name: data.company_name || "",
//           company_email: data.company_email || "",
//           services: serviceNames,
//           profile_image: null,
//           cover_image: null,
//           brochures: data.brochures || [],
//           community_images: data.community_images || [],
//           socials: {
//             linkedin: data.linkedin || "",
//             instagram: data.instagram || "",
//             facebook: data.facebook || "",
//             youtube: data.youtube || "",
//           },
//         });

//         setProfilePreview(data.profile_image_url || null);
//         setCoverPreview(data.cover_image_url || null);
//         setServiceInput(serviceNames.join(", "));
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchMyCard();
//   }, []);

//   /* ================= HANDLERS ================= */

//   const handleBrochures = (e) => {
//     const newFiles = Array.from(e.target.files || []).map((file) => ({
//       file,
//       name: "",
//     }));

//     setForm({
//       ...form,
//       brochures: [...form.brochures, ...newFiles],
//     });
//   };

//   const handleCommunityImages = (e) => {
//     const newFiles = Array.from(e.target.files || []).map((file) => ({
//       file,
//       name: "",
//     }));

//     setForm({
//       ...form,
//       community_images: [...form.community_images, ...newFiles],
//     });
//   };

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleImageChange = (e, type) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const url = URL.createObjectURL(file);

//     if (type === "profile") {
//       setProfilePreview(url);
//       setForm({ ...form, profile_image: file });
//     }

//     if (type === "cover") {
//       setCoverPreview(url);
//       setForm({ ...form, cover_image: file });
//     }
//   };

//   const handleServicesChange = (e) => {
//     const value = e.target.value;
//     setServiceInput(value);

//     const servicesArray = value
//       .split(/[\n,]+/)
//       .map((s) => s.trim())
//       .filter(Boolean);

//     setForm({ ...form, services: servicesArray });
//   };

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name.trim()) {
//       errorAlert("Validation Error", "Name is required");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       formData.append("name", form.name || "");
//       formData.append("designation", form.designation || "");
//       formData.append("phone", form.phone || "");
//       formData.append("email", form.email || "");
//       formData.append("website", form.website || "");
//       formData.append("company_name", form.company_name || "");
//       formData.append("company_email", form.company_email || "");

//       formData.append("linkedin", form.socials.linkedin || "");
//       formData.append("instagram", form.socials.instagram || "");
//       formData.append("facebook", form.socials.facebook || "");
//       formData.append("youtube", form.socials.youtube || "");

//       form.services.forEach((service) => {
//         formData.append("services[]", service);
//       });

//       if (form.profile_image)
//         formData.append("profile_image", form.profile_image);

//       if (form.cover_image) formData.append("cover_image", form.cover_image);

//       form.community_images?.forEach((img) => {
//         if (img.file) {
//           formData.append("community_images[]", img.file);
//           formData.append("community_names[]", img.name || "");
//         }
//       });

//       form.brochures?.forEach((b) => {
//         if (b.file) {
//           formData.append("brochures[]", b.file);
//           formData.append("brochure_names[]", b.name || "");
//         }
//       });

//       const res = await api.post(
//         "/orginazation-dashboard/update-my-staff-card",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         },
//       );

//       successAlert("Success!", res.data.message);
//     } catch (error) {
//       errorAlert(
//         "Error",
//         error.response?.data?.message || "Something went wrong",
//       );
//     }
//   };

//   /* ================= UI (UNCHANGED) ================= */

//   return (
//     <UserLayout>
//       {/* 🔥 YOUR WHOLE EXISTING UI REMAINS EXACTLY SAME BELOW */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
//         >
//           <div className="px-8 py-6 border-b bg-gradient-to-r from-indigo-50 to-white">
//             <h2 className="text-2xl font-semibold text-gray-800"></h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Fill staff details and instantly preview the digital card
//             </p>
//           </div>

//           {/* YOUR FULL ORIGINAL FORM BODY REMAINS EXACTLY SAME */}

//           {/* BODY */}
//           <div className="p-8 space-y-10">
//             {/* IMAGES */}
//             <FormSection title="Images" subtitle="Profile & cover visuals">
//               <div className="md:col-span-2">
//                 <div className="relative w-full h-44 rounded-2xl border-2 border-dashed overflow-hidden bg-yellow-50">
//                   {/* COVER IMAGE */}
//                   <label className="absolute inset-0 cursor-pointer">
//                     {coverPreview ? (
//                       <img
//                         src={coverPreview}
//                         alt="Cover preview"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex items-center justify-center h-full text-sm text-gray-500">
//                         Upload cover image
//                       </div>
//                     )}
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={(e) => handleImageChange(e, "cover")}
//                     />
//                   </label>

//                   {/* PROFILE IMAGE OVERLAP */}
//                   <label className="absolute -bottom-8 left-6 cursor-pointer">
//                     <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
//                       {profilePreview ? (
//                         <img
//                           src={profilePreview}
//                           alt="Profile preview"
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <span className="text-xs text-gray-400">Profile</span>
//                       )}
//                     </div>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={(e) => handleImageChange(e, "profile")}
//                     />
//                   </label>
//                 </div>
//               </div>
//             </FormSection>

//             {/* COMPANY */}
//             <FormSection title="Company Details">
//               <Input
//                 name="company_name"
//                 label="Company Name"
//                 value={form.company_name}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="company_email"
//                 label="Company Email"
//                 value={form.company_email}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* BROCHURES */}
//             <FormSection title="Company Brochures">
//               <UploadBox
//                 label="Upload brochures (PDF)"
//                 accept="application/pdf"
//                 multiple
//                 onChange={handleBrochures}
//                 icon="📄"
//               />

//               {form.brochures.length > 0 && (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
//                   {form.brochures.map((b, i) => (
//                     <div
//                       key={i}
//                       className="border rounded-2xl p-3 text-xs text-center hover:shadow-sm transition"
//                     >
//                       <div className="w-14 h-14 mx-auto rounded-xl bg-red-100 flex items-center justify-center text-xl">
//                         📄
//                       </div>
//                       <input
//                         type="text"
//                         placeholder="Brochure name"
//                         value={b.name}
//                         onChange={(e) => {
//                           const updated = [...form.brochures];
//                           updated[i].name = e.target.value;
//                           setForm({ ...form, brochures: updated });
//                         }}
//                         className="mt-2 w-full border rounded-lg px-2 py-1 text-xs"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </FormSection>

//             {/* COMMUNITY */}
//             <FormSection title="Community Images">
//               <UploadBox
//                 label="Upload community images"
//                 accept="image/*"
//                 multiple
//                 onChange={handleCommunityImages}
//                 icon="🖼️"
//               />

//               {form.community_images.length > 0 && (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
//                   {form.community_images.map((img, i) => (
//                     <div
//                       key={i}
//                       className="border rounded-2xl p-3 text-xs text-center"
//                     >
//                       <img
//                         src={img.file ? URL.createObjectURL(img.file) : img.url}
//                         alt={`Community preview ${i + 1}`}
//                         className="w-14 h-14 rounded-xl object-cover mx-auto"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Image name"
//                         value={img.name}
//                         onChange={(e) => {
//                           const updated = [...form.community_images];
//                           updated[i].name = e.target.value;
//                           setForm({ ...form, community_images: updated });
//                         }}
//                         className="mt-2 w-full border rounded-lg px-2 py-1 text-xs"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </FormSection>

//             {/* BASIC */}
//             <FormSection title="Basic Info">
//               <Input
//                 name="name"
//                 label="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="designation"
//                 label="Designation"
//                 value={form.designation}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* CONTACT */}
//             <FormSection title="Contact">
//               <Input
//                 name="phone"
//                 label="Phone"
//                 value={form.phone}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="email"
//                 label="Email"
//                 value={form.email}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="website"
//                 label="Website"
//                 value={form.website}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* SERVICES */}
//             <FormSection title="Services">
//               <Textarea
//                 label="Comma or new line separated"
//                 value={serviceInput}
//                 onChange={handleServicesChange}
//               />
//             </FormSection>
//             {/* SOCIAL MEDIA */}
//             <FormSection title="Social Media">
//               <Input
//                 name="linkedin"
//                 label="LinkedIn URL"
//                 value={form.socials.linkedin}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, linkedin: e.target.value },
//                   })
//                 }
//               />

//               <Input
//                 name="instagram"
//                 label="Instagram URL"
//                 value={form.socials.instagram}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, instagram: e.target.value },
//                   })
//                 }
//               />

//               <Input
//                 name="facebook"
//                 label="Facebook URL"
//                 value={form.socials.facebook}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, facebook: e.target.value },
//                   })
//                 }
//               />

//               <Input
//                 name="youtube"
//                 label="YouTube URL"
//                 value={form.socials.youtube}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, youtube: e.target.value },
//                   })
//                 }
//               />
//             </FormSection>
//           </div>

//           {/* FOOTER */}

//           <div className="sticky bottom-0 bg-white border-t px-8 py-4">
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition"
//             >
//               Update Staff Card
//             </button>
//           </div>
//         </form>

//         <div className="flex justify-center">
//           <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
//             {/* COVER */}
//             <div className="relative h-40 bg-yellow-100">
//               {coverPreview && (
//                 <img
//                   src={coverPreview}
//                   className="w-full h-full object-cover"
//                 />
//               )}

//               {/* PROFILE */}
//               <div className="absolute -bottom-10 left-6">
//                 <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
//                   {profilePreview ? (
//                     <img
//                       src={profilePreview}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-xs text-gray-400">
//                       Profile
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* BODY */}
//             <div className="pt-14 px-5 pb-6 space-y-4">
//               {/* NAME */}
//               <div>
//                 <h3 className="font-bold text-lg">
//                   {form.name || "Full Name"}
//                 </h3>
//                 <p className="text-xs text-gray-500">
//                   {form.designation || "Designation"}
//                 </p>
//               </div>

//               {/* CONTACT */}
//               <ContactRow icon="📞" value={form.phone} />
//               <ContactRow icon="✉️" value={form.email} />
//               <ContactRow icon="🌐" value={form.website} />

//               {/* COMMUNITY */}
//               {form.community_images?.length > 0 && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="COMMUNITY" />
//                   <div className="flex gap-4 flex-wrap">
//                     {form.community_images.map((img, i) => (
//                       <div key={i} className="text-xs text-center">
//                         <img
//                           src={img.url || URL.createObjectURL(img.file)}
//                           className="w-10 h-10 rounded-full object-cover"
//                         />
//                         <div className="truncate w-14 mt-1">
//                           {img.name || "App"}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {/* COMPANY */}
//               {(form.company_name || form.company_email) && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="COMPANY" />
//                   <p className="text-sm font-medium">{form.company_name}</p>
//                   <p className="text-xs text-gray-500">{form.company_email}</p>
//                 </>
//               )}

//               {/* SERVICES */}
//               {form.services?.length > 0 && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="SERVICES" />
//                   <ul className="list-disc list-inside text-sm space-y-1">
//                     {form.services.map((s, i) => (
//                       <li key={i}>{s}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               {/* BROCHURES */}
//               {form.brochures?.length > 0 && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="BROCHURES" />
//                   {form.brochures.map((b, i) => (
//                     <a
//                       key={i}
//                       href={b.url || "#"}
//                       target="_blank"
//                       className="block text-sm text-indigo-600 hover:underline"
//                     >
//                       📄 {b.name || `Brochure ${i + 1}`}
//                     </a>
//                   ))}
//                 </>
//               )}

//               {/* SOCIAL ICONS */}
//               {(form.socials.linkedin ||
//                 form.socials.instagram ||
//                 form.socials.facebook ||
//                 form.socials.youtube) && (
//                 <>
//                   <Divider />
//                   <div className="flex gap-4 pt-2">
//                     {form.socials.linkedin && (
//                       <SocialIcon url={form.socials.linkedin} label="in" />
//                     )}
//                     {form.socials.instagram && (
//                       <SocialIcon url={form.socials.instagram} label="📸" />
//                     )}
//                     {form.socials.facebook && (
//                       <SocialIcon url={form.socials.facebook} label="f" />
//                     )}
//                     {form.socials.youtube && (
//                       <SocialIcon url={form.socials.youtube} label="▶" />
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </UserLayout>
//   );
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

// function FormSection({ title, subtitle, children }) {
//   return (
//     <div className="space-y-4">
//       <div>
//         <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
//         {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
//     </div>
//   );
// }

// function UploadBox({ label, icon, ...props }) {
//   return (
//     <label className="md:col-span-2 cursor-pointer">
//       <div className="border-2 border-dashed rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-50 transition">
//         <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
//           {icon}
//         </div>
//         <div className="text-sm text-gray-600">{label}</div>
//       </div>
//       <input type="file" className="hidden" {...props} />
//     </label>
//   );
// }

// function Input({ label, ...props }) {
//   return (
//     <div>
//       <label className="text-xs">{label}</label>
//       <input
//         {...props}
//         className="border rounded-xl px-4 py-2 text-sm w-full"
//       />
//     </div>
//   );
// }

// function Textarea({ label, ...props }) {
//   return (
//     <div className="md:col-span-2">
//       <label className="text-xs">{label}</label>
//       <textarea
//         {...props}
//         rows="3"
//         className="border rounded-xl px-4 py-2 text-sm w-full"
//       />
//     </div>
//   );
// }

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

// function CommunityIcon() {
//   return (
//     <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
//       💬
//     </div>
//   );
// }


// src/components/UserStaffCardForm.jsx
import { useState, useEffect } from "react";
import UserLayout from "./layout/user/UserLayout";
import { successAlert, errorAlert } from "../utils/alert";
import api from "../api/axios";

export default function StaffCardForm() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    phone: "",
    email: "",
    website: "",
    company_name: "",
    company_email: "",
    services: [],
    profile_image: null,
    cover_image: null,
    brochures: [],
    community_images: [],
    socials: {
      linkedin: "",
      instagram: "",
      facebook: "",
      youtube: "",
    },
  });

  const [profilePreview, setProfilePreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [serviceInput, setServiceInput] = useState("");

  useEffect(() => {
    const fetchMyCard = async () => {
      try {
        const res = await api.get("/orginazation-dashboard/my-staff-card");

        if (!res.data.success) return;

        const data = res.data.data;

        const serviceNames = data.services
          ? data.services.map((s) => s.service_name)
          : [];

        setForm({
          name: data.name || "",
          designation: data.designation || "",
          phone: data.phone || "",
          email: data.email || "",
          website: data.website || "",
          company_name: data.company_name || "",
          company_email: data.company_email || "",
          services: serviceNames,
          profile_image: null,
          cover_image: null,
          brochures: data.brochures || [],
          community_images: data.community_images || [],
          socials: {
            linkedin: data.linkedin || "",
            instagram: data.instagram || "",
            facebook: data.facebook || "",
            youtube: data.youtube || "",
          },
        });

        setProfilePreview(data.profile_image_url || null);
        setCoverPreview(data.cover_image_url || null);
        setServiceInput(serviceNames.join(", "));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyCard();
  }, []);

  const handleBrochures = (e) => {
    const newFiles = Array.from(e.target.files || []).map((file) => ({
      file,
      name: "",
    }));

    setForm({
      ...form,
      brochures: [...form.brochures, ...newFiles],
    });
  };

  
  const handleCommunityImages = (e) => {
    const newFiles = Array.from(e.target.files || []).map((file) => ({
      file,
      name: "",
    }));

    setForm({
      ...form,
      community_images: [...form.community_images, ...newFiles],
    });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (type === "profile") {
      setProfilePreview(url);
      setForm({ ...form, profile_image: file });
    }

    if (type === "cover") {
      setCoverPreview(url);
      setForm({ ...form, cover_image: file });
    }
  };

  const handleServicesChange = (e) => {
    const value = e.target.value;
    setServiceInput(value);

    const servicesArray = value
      .split(/[\n,]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    setForm({ ...form, services: servicesArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      errorAlert("Validation Error", "Name is required");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", form.name || "");
      formData.append("designation", form.designation || "");
      formData.append("phone", form.phone || "");
      formData.append("email", form.email || "");
      formData.append("website", form.website || "");
      formData.append("company_name", form.company_name || "");
      formData.append("company_email", form.company_email || "");

      formData.append("linkedin", form.socials.linkedin || "");
      formData.append("instagram", form.socials.instagram || "");
      formData.append("facebook", form.socials.facebook || "");
      formData.append("youtube", form.socials.youtube || "");

      form.services.forEach((service) => {
        formData.append("services[]", service);
      });

      if (form.profile_image)
        formData.append("profile_image", form.profile_image);

      if (form.cover_image) formData.append("cover_image", form.cover_image);

      form.community_images?.forEach((img) => {
        if (img.file) {
          formData.append("community_images[]", img.file);
          formData.append("community_names[]", img.name || "");
        }
      });

      form.brochures?.forEach((b) => {
        if (b.file) {
          formData.append("brochures[]", b.file);
          formData.append("brochure_names[]", b.name || "");
        }
      });

      const res = await api.post(
        "/orginazation-dashboard/update-my-staff-card",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      successAlert("Success!", res.data.message);
    } catch (error) {
      errorAlert(
        "Error",
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <UserLayout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-4 md:p-6 lg:p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl border border-[hsl(var(--border))] overflow-hidden"
        >
          {/* HEADER */}
          <div className="px-8 py-6 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary)/0.6)]">
            <h2 className="text-2xl font-semibold text-[hsl(var(--text-primary))]">
              Edit Staff Card
            </h2>
            <p className="text-sm text-[hsl(var(--text-muted))] mt-1">
              Fill staff details and instantly preview the digital card
            </p>
          </div>

          {/* BODY */}
          <div className="p-8 space-y-10">
            {/* IMAGES */}
            <FormSection title="Images" subtitle="Profile & cover visuals">
              <div className="md:col-span-2">
                <div className="relative w-full h-48 rounded-2xl border-2 border-dashed border-[hsl(var(--accent)/0.5)] overflow-hidden bg-[hsl(var(--bg-secondary))] hover:border-[hsl(var(--accent))] transition-all">
                  {/* COVER IMAGE */}
                  <label className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center gap-3">
                    {coverPreview ? (
                      <img
                        src={coverPreview}
                        alt="Cover preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="text-4xl text-[hsl(var(--accent))] opacity-90">
                          📸
                        </div>
                        <div className="text-base font-medium text-[hsl(var(--text-primary))] text-center px-4">
                          Upload cover image
                        </div>
                        <div className="text-xs text-[hsl(var(--text-muted))] text-center">
                          Click or drag image here
                        </div>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "cover")}
                    />
                  </label>

                  {/* PROFILE IMAGE OVERLAP */}
                  <label className="absolute -bottom-12 left-6 cursor-pointer group">
                    <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-xl overflow-hidden bg-[hsl(var(--bg-secondary))] ring-2 ring-offset-2 ring-offset-[hsl(var(--card-bg))] ring-[hsl(var(--accent)/0.6)] group-hover:ring-[hsl(var(--accent))] transition-all">
                      {profilePreview ? (
                        <img
                          src={profilePreview}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-xs text-[hsl(var(--text-primary))] font-medium gap-1">
                          <span>Profile</span>
                          <span className="text-[10px] opacity-80">(click to upload)</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "profile")}
                    />
                  </label>
                </div>
              </div>
            </FormSection>

            {/* COMPANY */}
            <FormSection title="Company Details">
              <Input
                name="company_name"
                label="Company Name"
                value={form.company_name}
                onChange={handleChange}
              />
              <Input
                name="company_email"
                label="Company Email"
                value={form.company_email}
                onChange={handleChange}
              />
            </FormSection>

            {/* BROCHURES */}
            <FormSection title="Company Brochures">
              <UploadBox
                label="Upload brochures (PDF)"
                accept="application/pdf"
                multiple
                onChange={handleBrochures}
                icon="📄"
              />

              {form.brochures.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {form.brochures.map((b, i) => (
                    <div
                      key={i}
                      className="border border-[hsl(var(--border))] rounded-2xl p-3 text-xs text-center hover:shadow-md hover:border-[hsl(var(--accent))] transition-all bg-[hsl(var(--bg-secondary))]"
                    >
                      <div className="w-14 h-14 mx-auto rounded-xl bg-rose-900/40 flex items-center justify-center text-xl text-rose-400 shadow-sm">
                        📄
                      </div>
                      <input
                        type="text"
                        placeholder="Brochure name"
                        value={b.name}
                        onChange={(e) => {
                          const updated = [...form.brochures];
                          updated[i].name = e.target.value;
                          setForm({ ...form, brochures: updated });
                        }}
                        className="mt-2 w-full border border-[hsl(var(--border))] rounded-lg px-2 py-1.5 text-sm bg-[hsl(var(--card-bg))] text-[hsl(var(--text-primary))] placeholder-[hsl(var(--text-muted))]"
                      />
                    </div>
                  ))}
                </div>
              )}
            </FormSection>

            {/* COMMUNITY */}
            <FormSection title="Community Images">
              <UploadBox
                label="Upload community images"
                accept="image/*"
                multiple
                onChange={handleCommunityImages}
                icon="🖼️"
              />

              {form.community_images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {form.community_images.map((img, i) => (
                    <div
                      key={i}
                      className="border border-[hsl(var(--border))] rounded-2xl p-3 text-xs text-center hover:shadow-md hover:border-[hsl(var(--accent))] transition-all bg-[hsl(var(--bg-secondary))]"
                    >
                      <img
                        src={img.file ? URL.createObjectURL(img.file) : img.url}
                        alt={`Community preview ${i + 1}`}
                        className="w-14 h-14 rounded-xl object-cover mx-auto border border-[hsl(var(--border))] shadow-sm"
                      />
                      <input
                        type="text"
                        placeholder="Image name"
                        value={img.name}
                        onChange={(e) => {
                          const updated = [...form.community_images];
                          updated[i].name = e.target.value;
                          setForm({ ...form, community_images: updated });
                        }}
                        className="mt-2 w-full border border-[hsl(var(--border))] rounded-lg px-2 py-1.5 text-sm bg-[hsl(var(--card-bg))] text-[hsl(var(--text-primary))] placeholder-[hsl(var(--text-muted))]"
                      />
                    </div>
                  ))}
                </div>
              )}
            </FormSection>

            {/* BASIC */}
            <FormSection title="Basic Info">
              <Input
                name="name"
                label="Full Name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                name="designation"
                label="Designation"
                value={form.designation}
                onChange={handleChange}
              />
            </FormSection>

            {/* CONTACT */}
            <FormSection title="Contact">
              <Input
                name="phone"
                label="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                name="email"
                label="Email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                name="website"
                label="Website"
                value={form.website}
                onChange={handleChange}
              />
            </FormSection>

            {/* SERVICES */}
            <FormSection title="Services">
              <Textarea
                label="Comma or new line separated"
                value={serviceInput}
                onChange={handleServicesChange}
              />
            </FormSection>

            {/* SOCIAL MEDIA */}
            <FormSection title="Social Media">
              <Input
                name="linkedin"
                label="LinkedIn URL"
                value={form.socials.linkedin}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socials: { ...form.socials, linkedin: e.target.value },
                  })
                }
              />

              <Input
                name="instagram"
                label="Instagram URL"
                value={form.socials.instagram}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socials: { ...form.socials, instagram: e.target.value },
                  })
                }
              />

              <Input
                name="facebook"
                label="Facebook URL"
                value={form.socials.facebook}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socials: { ...form.socials, facebook: e.target.value },
                  })
                }
              />

              <Input
                name="youtube"
                label="YouTube URL"
                value={form.socials.youtube}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socials: { ...form.socials, youtube: e.target.value },
                  })
                }
              />
            </FormSection>
          </div>

          {/* FOOTER */}
          <div className="sticky bottom-0 bg-[hsl(var(--card-bg))] border-t border-[hsl(var(--border))] px-8 py-5 shadow-lg">
            <button
              type="submit"
              className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white py-3.5 rounded-xl font-semibold shadow-lg transition-all active:scale-[0.98]"
            >
              Update Staff Card
            </button>
          </div>
        </form>

        {/* ================= MOBILE PREVIEW ================= */}
        <div className="flex justify-center">
          <div className="w-full max-w-[380px] bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))]">
            {/* COVER + PROFILE */}
            <div className="relative h-40 bg-gradient-to-br from-[hsl(var(--accent)/0.2)] to-[hsl(var(--bg-secondary))]">
              {coverPreview && (
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                />
              )}

              <div className="absolute -bottom-12 left-6">
                <div className="w-24 h-24 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-xl overflow-hidden bg-[hsl(var(--card-bg))]">
                  {profilePreview ? (
                    <img
                      src={profilePreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs text-[hsl(var(--text-primary))] font-medium bg-[hsl(var(--accent)/0.1)]">
                      Profile
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-16 px-6 pb-8 space-y-6">
              <div>
                <h3 className="font-bold text-xl text-[hsl(var(--text-primary))]">
                  {form.name || "Full Name"}
                </h3>
                <p className="text-sm text-[hsl(var(--text-muted))]">
                  {form.designation || "Designation"}
                </p>
              </div>

              <ContactRow icon="📞" value={form.phone} />
              <ContactRow icon="✉️" value={form.email} />
              <ContactRow icon="🌐" value={form.website} />

              {form.community_images?.length > 0 && (
                <>
                  <Divider />
                  <SectionTitle title="COMMUNITY" />
                  <div className="flex gap-5 flex-wrap">
                    {form.community_images.map((img, i) => (
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

              {(form.company_name || form.company_email) && (
                <>
                  <Divider />
                  <SectionTitle title="COMPANY" />
                  <p className="text-sm font-medium text-[hsl(var(--text-primary))]">
                    {form.company_name || "Company Name"}
                  </p>
                  <p className="text-xs text-[hsl(var(--text-muted))]">
                    {form.company_email || "company@email.com"}
                  </p>
                </>
              )}

              {form.services?.length > 0 && (
                <>
                  <Divider />
                  <SectionTitle title="SERVICES" />
                  <ul className="list-disc list-inside text-sm space-y-1.5 text-[hsl(var(--text-secondary))]">
                    {form.services.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </>
              )}

              {form.brochures?.length > 0 && (
                <>
                  <Divider />
                  <SectionTitle title="BROCHURES" />
                  {form.brochures.map((b, i) => (
                    <div key={i} className="text-sm text-[hsl(var(--accent))] hover:underline transition">
                      📄 {b.name || `Brochure ${i + 1}`}
                    </div>
                  ))}
                </>
              )}

              {(form.socials.linkedin ||
                form.socials.instagram ||
                form.socials.facebook ||
                form.socials.youtube) && (
                <>
                  <Divider />
                  <div className="flex gap-5 pt-3">
                    {form.socials.linkedin && (
                      <SocialIcon url={form.socials.linkedin} label="in" color="bg-[#0A66C2]" />
                    )}
                    {form.socials.instagram && (
                      <SocialIcon url={form.socials.instagram} label="📸" color="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
                    )}
                    {form.socials.facebook && (
                      <SocialIcon url={form.socials.facebook} label="f" color="bg-[#1877F2]" />
                    )}
                    {form.socials.youtube && (
                      <SocialIcon url={form.socials.youtube} label="▶" color="bg-[#FF0000]" />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

/* ================= HELPERS ================= */

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

function FormSection({ title, subtitle, children }) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">{title}</h4>
        {subtitle && <p className="text-xs text-[hsl(var(--text-muted))] mt-1">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
}

function UploadBox({ label, icon, ...props }) {
  return (
    <label className="cursor-pointer block">
      <div className="border-2 border-dashed border-[hsl(var(--border))] rounded-2xl p-8 flex flex-col items-center gap-3 hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.08)] transition-all text-center">
        <div className="w-14 h-14 rounded-xl bg-[hsl(var(--bg-secondary))] flex items-center justify-center text-2xl text-[hsl(var(--accent))] shadow-sm">
          {icon}
        </div>
        <div className="text-sm font-medium text-[hsl(var(--text-primary))]">{label}</div>
        <div className="text-xs text-[hsl(var(--text-muted))]">(Click or drag files)</div>
      </div>
      <input type="file" className="hidden" {...props} />
    </label>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-xs font-medium text-[hsl(var(--text-muted))] mb-1.5 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card-bg))] text-[hsl(var(--text-primary))] placeholder-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="text-xs font-medium text-[hsl(var(--text-muted))] mb-1.5 block">
        {label}
      </label>
      <textarea
        {...props}
        rows="4"
        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card-bg))] text-[hsl(var(--text-primary))] placeholder-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] outline-none transition-all resize-y"
      />
    </div>
  );
}

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

function CommunityIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-[hsl(var(--bg-secondary))] flex items-center justify-center text-xl shadow-sm border border-[hsl(var(--border))]">
      💬
    </div>
  );
}

// // src/components/UserStaffCardForm.jsx
// import { useState, useEffect } from "react";
// // import AdminLayout from "./layout/AdminLayout"; // keep same layout if needed
// // import UserLayout from "../../components/layout/user/UserLayout";
// import { successAlert, errorAlert } from "../utils/alert";
// import api from "../api/axios";
// import UserLayout from "./layout/user/UserLayout";

// export default function StaffCardForm() {
//   const [permissions, setPermissions] = useState({
//     cover_change: false,
//     custom_community_logo: false,
//   });

//   const [form, setForm] = useState({
//     name: "",
//     designation: "",
//     phone: "",
//     email: "",
//     website: "",
//     company_name: "",
//     company_email: "",
//     services: [],
//     profile_image: null,
//     cover_image: null,
//     brochures: [],
//     community_images: [],
//     socials: {
//       linkedin: "",
//       instagram: "",
//       facebook: "",
//       youtube: "",
//     },
//   });

//   const [profilePreview, setProfilePreview] = useState(null);
//   const [coverPreview, setCoverPreview] = useState(null);
//   const [serviceInput, setServiceInput] = useState("");

//   /* ================= FETCH LOGGED USER CARD ================= */

//   useEffect(() => {
//     const fetchMyCard = async () => {
//       try {
//         const res = await api.get("/orginazation-dashboard/my-staff-card");

//         if (!res.data.success) return;

//         const data = res.data.data;
//         setPermissions(res.data.data.permissions || {});

//         const serviceNames = data.services
//           ? data.services.map((s) => s.service_name)
//           : [];

//         setForm({
//           name: data.name || "",
//           designation: data.designation || "",
//           phone: data.phone || "",
//           email: data.email || "",
//           website: data.website || "",
//           company_name: data.company_name || "",
//           company_email: data.company_email || "",
//           services: serviceNames,
//           profile_image: null,
//           cover_image: null,
//           brochures: data.brochures || [],
//           community_images: data.community_images || [],
//           socials: {
//             linkedin: data.linkedin || "",
//             instagram: data.instagram || "",
//             facebook: data.facebook || "",
//             youtube: data.youtube || "",
//           },
//         });

//         setProfilePreview(data.profile_image_url || null);
//         setCoverPreview(data.cover_image_url || null);
//         setServiceInput(serviceNames.join(", "));
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchMyCard();
//   }, []);

//   /* ================= HANDLERS ================= */

//   const handleBrochures = (e) => {
//     const newFiles = Array.from(e.target.files || []).map((file) => ({
//       file,
//       name: "",
//     }));

//     setForm({
//       ...form,
//       brochures: [...form.brochures, ...newFiles],
//     });
//   };

//   const handleCommunityImages = (e) => {
//     const newFiles = Array.from(e.target.files || []).map((file) => ({
//       file,
//       name: "",
//     }));

//     setForm({
//       ...form,
//       community_images: [...form.community_images, ...newFiles],
//     });
//   };

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleImageChange = (e, type) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const url = URL.createObjectURL(file);

//     if (type === "profile") {
//       setProfilePreview(url);
//       setForm({ ...form, profile_image: file });
//     }

//     if (type === "cover") {
//       setCoverPreview(url);
//       setForm({ ...form, cover_image: file });
//     }
//   };

//   const handleServicesChange = (e) => {
//     const value = e.target.value;
//     setServiceInput(value);

//     const servicesArray = value
//       .split(/[\n,]+/)
//       .map((s) => s.trim())
//       .filter(Boolean);

//     setForm({ ...form, services: servicesArray });
//   };

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name.trim()) {
//       errorAlert("Validation Error", "Name is required");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       formData.append("name", form.name || "");
//       formData.append("designation", form.designation || "");
//       formData.append("phone", form.phone || "");
//       formData.append("email", form.email || "");
//       formData.append("website", form.website || "");
//       formData.append("company_name", form.company_name || "");
//       formData.append("company_email", form.company_email || "");

//       formData.append("linkedin", form.socials.linkedin || "");
//       formData.append("instagram", form.socials.instagram || "");
//       formData.append("facebook", form.socials.facebook || "");
//       formData.append("youtube", form.socials.youtube || "");

//       form.services.forEach((service) => {
//         formData.append("services[]", service);
//       });

//       if (form.profile_image)
//         formData.append("profile_image", form.profile_image);

//       if (form.cover_image) formData.append("cover_image", form.cover_image);

//       form.community_images?.forEach((img) => {
//         if (img.file) {
//           formData.append("community_images[]", img.file);
//           formData.append("community_names[]", img.name || "");
//         }
//       });

//       form.brochures?.forEach((b) => {
//         if (b.file) {
//           formData.append("brochures[]", b.file);
//           formData.append("brochure_names[]", b.name || "");
//         }
//       });

//       const res = await api.post(
//         "/orginazation-dashboard/update-my-staff-card",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         },
//       );

//       successAlert("Success!", res.data.message);
//     } catch (error) {
//       errorAlert(
//         "Error",
//         error.response?.data?.message || "Something went wrong",
//       );
//     }
//   };

//   /* ================= UI (UNCHANGED) ================= */

//   return (
//     <UserLayout>
//       {/* 🔥 YOUR WHOLE EXISTING UI REMAINS EXACTLY SAME BELOW */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
//         >
//           <div className="px-8 py-6 border-b bg-gradient-to-r from-indigo-50 to-white">
//             <h2 className="text-2xl font-semibold text-gray-800"></h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Fill staff details and instantly preview the digital card
//             </p>
//           </div>

//           {/* YOUR FULL ORIGINAL FORM BODY REMAINS EXACTLY SAME */}

//           {/* BODY */}
//           <div className="p-8 space-y-10">
//             {/* IMAGES */}
//             <FormSection title="Images" subtitle="Profile & cover visuals">
//               <div className="md:col-span-2">
//                 <div className="relative w-full h-44 rounded-2xl border-2 border-dashed overflow-hidden bg-yellow-50">
//                   {/* COVER IMAGE */}
//                   {/* <label className="absolute inset-0 cursor-pointer"> */}
//                   <label
//                     className={`absolute inset-0 ${
//                       permissions.cover_change
//                         ? "cursor-pointer"
//                         : "pointer-events-none opacity-50"
//                     }`}
//                   >
//                     {coverPreview ? (
//                       <img
//                         src={coverPreview}
//                         alt="Cover preview"
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex items-center justify-center h-full text-sm text-gray-500">
//                         Upload cover image
//                       </div>
//                     )}
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={(e) => handleImageChange(e, "cover")}
//                     />
//                   </label>

//                   {/* PROFILE IMAGE OVERLAP */}
//                   <label className="absolute -bottom-8 left-6 cursor-pointer">
//                     <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
//                       {profilePreview ? (
//                         <img
//                           src={profilePreview}
//                           alt="Profile preview"
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <span className="text-xs text-gray-400">Profile</span>
//                       )}
//                     </div>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={(e) => handleImageChange(e, "profile")}
//                     />
//                   </label>
//                 </div>
//               </div>
//             </FormSection>

//             {/* COMPANY */}
//             <FormSection title="Company Details">
//               <Input
//                 name="company_name"
//                 label="Company Name"
//                 value={form.company_name}
//                 readOnly
//                 // onChange={handleChange}
//               />
//               <Input
//                 name="company_email"
//                 label="Company Email"
//                 value={form.company_email}
//                 // onChange={handleChange}
//                 readOnly
//               />
//             </FormSection>

//             {/* BROCHURES */}
//             <FormSection title="Company Brochures">
//               <UploadBox
//                 label="Upload brochures (PDF)"
//                 accept="application/pdf"
//                 multiple
//                 onChange={handleBrochures}
//                 icon="📄"
//               />

//               {form.brochures.length > 0 && (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
//                   {form.brochures.map((b, i) => (
//                     <div
//                       key={i}
//                       className="border rounded-2xl p-3 text-xs text-center hover:shadow-sm transition"
//                     >
//                       <div className="w-14 h-14 mx-auto rounded-xl bg-red-100 flex items-center justify-center text-xl">
//                         📄
//                       </div>
//                       <input
//                         type="text"
//                         placeholder="Brochure name"
//                         value={b.name}
//                         onChange={(e) => {
//                           const updated = [...form.brochures];
//                           updated[i].name = e.target.value;
//                           setForm({ ...form, brochures: updated });
//                         }}
//                         className="mt-2 w-full border rounded-lg px-2 py-1 text-xs"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </FormSection>

//             {/* COMMUNITY */}
//             <FormSection title="Community Images">
//               <UploadBox
//                 label="Upload community images"
//                 accept="image/*"
//                 multiple
//                 onChange={handleCommunityImages}
//                 icon="🖼️"
//                 disabled={!permissions.custom_community_logo}
//               />

//               {form.community_images.length > 0 && (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
//                   {form.community_images.map((img, i) => (
//                     <div
//                       key={i}
//                       className="border rounded-2xl p-3 text-xs text-center"
//                     >
//                       <img
//                         src={img.file ? URL.createObjectURL(img.file) : img.url}
//                         alt={`Community preview ${i + 1}`}
//                         className="w-14 h-14 rounded-xl object-cover mx-auto"
//                       />
//                       {/* <input
//                         type="text"
//                         placeholder="Image name"
//                         value={img.name}
//                         onChange={(e) => {
//                           const updated = [...form.community_images];
//                           updated[i].name = e.target.value;
//                           setForm({ ...form, community_images: updated });
//                         }}
//                         className="mt-2 w-full border rounded-lg px-2 py-1 text-xs"
//                       /> */}

//                       <input
//                         type="text"
//                         placeholder="Image name"
//                         value={img.name}
//                         disabled={!permissions.custom_community_logo}
//                         onChange={(e) => {
//                           const updated = [...form.community_images];
//                           updated[i].name = e.target.value;
//                           setForm({ ...form, community_images: updated });
//                         }}
//                         className={`mt-2 w-full border rounded-lg px-2 py-1 text-xs ${
//                           !permissions.custom_community_logo
//                             ? "bg-gray-100 cursor-not-allowed opacity-60"
//                             : ""
//                         }`}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </FormSection>

//             {/* BASIC */}
//             <FormSection title="Basic Info">
//               <Input
//                 name="name"
//                 label="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="designation"
//                 label="Designation"
//                 value={form.designation}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* CONTACT */}
//             <FormSection title="Contact">
//               <Input
//                 name="phone"
//                 label="Phone"
//                 value={form.phone}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="email"
//                 label="Email"
//                 value={form.email}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="website"
//                 label="Website"
//                 value={form.website}
//                 onChange={handleChange}
//               />
//             </FormSection>

//             {/* SERVICES */}
//             <FormSection title="Services">
//               <Textarea
//                 label="Comma or new line separated"
//                 value={serviceInput}
//                 onChange={handleServicesChange}
//               />
//             </FormSection>
//             {/* SOCIAL MEDIA */}
//             <FormSection title="Social Media">
//               <Input
//                 name="linkedin"
//                 label="LinkedIn URL"
//                 value={form.socials.linkedin}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, linkedin: e.target.value },
//                   })
//                 }
//               />

//               <Input
//                 name="instagram"
//                 label="Instagram URL"
//                 value={form.socials.instagram}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, instagram: e.target.value },
//                   })
//                 }
//               />

//               <Input
//                 name="facebook"
//                 label="Facebook URL"
//                 value={form.socials.facebook}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, facebook: e.target.value },
//                   })
//                 }
//               />

//               <Input
//                 name="youtube"
//                 label="YouTube URL"
//                 value={form.socials.youtube}
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     socials: { ...form.socials, youtube: e.target.value },
//                   })
//                 }
//               />
//             </FormSection>
//           </div>

//           {/* FOOTER */}

//           <div className="sticky bottom-0 bg-white border-t px-8 py-4">
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition"
//             >
//               Update Staff Card
//             </button>
//           </div>
//         </form>

//         <div className="flex justify-center">
//           <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
//             {/* COVER */}
//             <div className="relative h-40 bg-yellow-100">
//               {coverPreview && (
//                 <img
//                   src={coverPreview}
//                   className="w-full h-full object-cover"
//                 />
//               )}

//               {/* PROFILE */}
//               <div className="absolute -bottom-10 left-6">
//                 <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
//                   {profilePreview ? (
//                     <img
//                       src={profilePreview}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-xs text-gray-400">
//                       Profile
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* BODY */}
//             <div className="pt-14 px-5 pb-6 space-y-4">
//               {/* NAME */}
//               <div>
//                 <h3 className="font-bold text-lg">
//                   {form.name || "Full Name"}
//                 </h3>
//                 <p className="text-xs text-gray-500">
//                   {form.designation || "Designation"}
//                 </p>
//               </div>

//               {/* CONTACT */}
//               <ContactRow icon="📞" value={form.phone} />
//               <ContactRow icon="✉️" value={form.email} />
//               <ContactRow icon="🌐" value={form.website} />

//               {/* COMMUNITY */}
//               {form.community_images?.length > 0 && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="COMMUNITY" />
//                   <div className="flex gap-4 flex-wrap">
//                     {form.community_images.map((img, i) => (
//                       <div key={i} className="text-xs text-center">
//                         <img
//                           src={img.url || URL.createObjectURL(img.file)}
//                           className="w-10 h-10 rounded-full object-cover"
//                         />
//                         <div className="truncate w-14 mt-1">
//                           {img.name || "App"}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {/* COMPANY */}
//               {(form.company_name || form.company_email) && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="COMPANY" />
//                   <p className="text-sm font-medium">{form.company_name}</p>
//                   <p className="text-xs text-gray-500">{form.company_email}</p>
//                 </>
//               )}

//               {/* SERVICES */}
//               {form.services?.length > 0 && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="SERVICES" />
//                   <ul className="list-disc list-inside text-sm space-y-1">
//                     {form.services.map((s, i) => (
//                       <li key={i}>{s}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               {/* BROCHURES */}
//               {form.brochures?.length > 0 && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="BROCHURES" />
//                   {form.brochures.map((b, i) => (
//                     <a
//                       key={i}
//                       href={b.url || "#"}
//                       target="_blank"
//                       className="block text-sm text-indigo-600 hover:underline"
//                     >
//                       📄 {b.name || `Brochure ${i + 1}`}
//                     </a>
//                   ))}
//                 </>
//               )}

//               {/* SOCIAL ICONS */}
//               {(form.socials.linkedin ||
//                 form.socials.instagram ||
//                 form.socials.facebook ||
//                 form.socials.youtube) && (
//                 <>
//                   <Divider />
//                   <div className="flex gap-4 pt-2">
//                     {form.socials.linkedin && (
//                       <SocialIcon url={form.socials.linkedin} label="in" />
//                     )}
//                     {form.socials.instagram && (
//                       <SocialIcon url={form.socials.instagram} label="📸" />
//                     )}
//                     {form.socials.facebook && (
//                       <SocialIcon url={form.socials.facebook} label="f" />
//                     )}
//                     {form.socials.youtube && (
//                       <SocialIcon url={form.socials.youtube} label="▶" />
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </UserLayout>
//   );
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

// function FormSection({ title, subtitle, children }) {
//   return (
//     <div className="space-y-4">
//       <div>
//         <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
//         {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
//     </div>
//   );
// }

// // function UploadBox({ label, icon, ...props }) {
// //   return (
// //     <label className="md:col-span-2 cursor-pointer">
// //       <div className="border-2 border-dashed rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-50 transition">
// //         <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
// //           {icon}
// //         </div>
// //         <div className="text-sm text-gray-600">{label}</div>
// //       </div>
// //       <input type="file" className="hidden" {...props} />
// //     </label>
// //   );
// // }

// function UploadBox({ label, icon, disabled = false, ...props }) {
//   return (
//     <label
//       className={`md:col-span-2 ${
//         disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
//       }`}
//     >
//       <div className="border-2 border-dashed rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-50 transition">
//         <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
//           {icon}
//         </div>
//         <div className="text-sm text-gray-600">
//           {disabled ? "Disabled by organization" : label}
//         </div>
//       </div>

//       {!disabled && <input type="file" className="hidden" {...props} />}
//     </label>
//   );
// }

// function Input({ label, ...props }) {
//   return (
//     <div>
//       <label className="text-xs">{label}</label>
//       <input
//         {...props}
//         className="border rounded-xl px-4 py-2 text-sm w-full"
//       />
//     </div>
//   );
// }

// function Textarea({ label, ...props }) {
//   return (
//     <div className="md:col-span-2">
//       <label className="text-xs">{label}</label>
//       <textarea
//         {...props}
//         rows="3"
//         className="border rounded-xl px-4 py-2 text-sm w-full"
//       />
//     </div>
//   );
// }

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

// function CommunityIcon() {
//   return (
//     <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
//       💬
//     </div>
//   );
// }