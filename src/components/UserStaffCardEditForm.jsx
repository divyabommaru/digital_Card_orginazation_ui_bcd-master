// //src/components/StaffCardEditForm.jsx
// import { useState, useEffect } from "react";
// import UserLayout from "./layout/user/UserLayout";

// export default function UserStaffCardEditForm() {
//   /* ================= MODE ================= */
//   const isEdit = true; // false = Add | true = Edit

//   /* ================= MOCK EDIT DATA ================= */
//   const mockEditData = {
//     name: "John Doe",
//     designation: "Senior Designer",
//     phone: "9876543210",
//     email: "john.doe@mail.com",
//     website: "https://johndoe.design",
//     company_name: "Pixl Pvt Ltd",
//     company_email: "contact@pixl.com",
//     services: ["UI Design", "Branding", "UX Research"],
//     socials: {
//       linkedin: "https://linkedin.com/in/johndoe",
//       instagram: "https://instagram.com/johndoe",
//       facebook: "https://facebook.com/johndoe",
//       youtube: "https://youtube.com/@johndoe",
//     },
//     profile_image: "https://i.pravatar.cc/150?img=12",
//     cover_image: "https://picsum.photos/600/300",
//     brochure_pdf:
//       "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//     community_images: ["a", "b", "c"],
//   };

//   /* ================= STATE ================= */
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
//     brochure_pdf: null,
//     community_images: [],
//     socials: {},
//   });

//   const [profilePreview, setProfilePreview] = useState(null);
//   const [coverPreview, setCoverPreview] = useState(null);
//   const [serviceInput, setServiceInput] = useState("");

//   /* ================= PREFILL EDIT ================= */
//   useEffect(() => {
//     if (isEdit) {
//       setForm(mockEditData);
//       setServiceInput(mockEditData.services.join(", "));
//       setProfilePreview(mockEditData.profile_image);
//       setCoverPreview(mockEditData.cover_image);
//     }
//   }, []);

//   /* ================= HANDLERS ================= */
//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSocialChange = (key, value) =>
//     setForm({ ...form, socials: { ...form.socials, [key]: value } });

//   const handleImageChange = (e, type) => {
//     const file = e.target.files[0];
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

//   const handlePdfChange = (e) =>
//     setForm({ ...form, brochure_pdf: e.target.files[0] });

//   const handleCommunityImages = (e) =>
//     setForm({ ...form, community_images: Array.from(e.target.files) });

//   const handleServicesChange = (e) => {
//     setServiceInput(e.target.value);
//     setForm({
//       ...form,
//       services: e.target.value
//         .split(/[\n,]+/)
//         .map((s) => s.trim())
//         .filter(Boolean),
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("FINAL DATA:", form);
//     alert("Check console for submitted data");
//   };

//   return (
//     <UserLayout>
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
//         {/* ================= FORM ================= */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
//         >
//           <h2 className="text-xl font-bold">
//             {isEdit ? "Edit Staff Card" : "Create Staff Card"}
//           </h2>

//           <Section title="Images">
//             <ImageUpload
//               label="Profile Image"
//               preview={profilePreview}
//               onChange={(e) => handleImageChange(e, "profile")}
//             />
//             <ImageUpload
//               label="Cover Image"
//               preview={coverPreview}
//               aspect="cover"
//               onChange={(e) => handleImageChange(e, "cover")}
//             />
//           </Section>

//           <Section title="Company Details">
//             <Input
//               name="company_name"
//               label="Company Name"
//               value={form.company_name}
//               onChange={handleChange}
//             />
//             <Input
//               name="company_email"
//               label="Company Email"
//               value={form.company_email}
//               onChange={handleChange}
//             />
//           </Section>

//           <Section title="Company Brochure (PDF)">
//             <label className="md:col-span-2 cursor-pointer">
//               <div className="flex items-center gap-4 border-2 border-dashed rounded-2xl p-6 hover:border-indigo-500 hover:bg-indigo-50 transition">
//                 <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-xl">
//                   📄
//                 </div>

//                 <div className="flex-1">
//                   <p className="text-sm font-medium">
//                     {form.brochure_pdf
//                       ? typeof form.brochure_pdf === "string"
//                         ? "Brochure uploaded"
//                         : form.brochure_pdf.name
//                       : "Upload company brochure"}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     PDF only · Max 5MB · Click to upload
//                   </p>
//                 </div>

//                 {form.brochure_pdf && (
//                   <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
//                     Added
//                   </span>
//                 )}
//               </div>

//               <input
//                 type="file"
//                 accept="application/pdf"
//                 className="hidden"
//                 onChange={handlePdfChange}
//               />
//             </label>
//           </Section>

//           <Section title="Community Images">
//             <label className="md:col-span-2 cursor-pointer">
//               <div className="border-2 border-dashed rounded-2xl p-6 hover:border-indigo-500 hover:bg-indigo-50 transition">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
//                     🖼
//                   </div>

//                   <div className="flex-1">
//                     <p className="text-sm font-medium">
//                       Upload community images
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       JPG / PNG · Multiple images allowed
//                     </p>
//                   </div>

//                   {form.community_images.length > 0 && (
//                     <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
//                       {form.community_images.length} selected
//                     </span>
//                   )}
//                 </div>

//                 {/* IMAGE PREVIEW STRIP */}
//                 {form.community_images.length > 0 && (
//                   <div className="flex gap-3 mt-4">
//                     {form.community_images.slice(0, 4).map((img, i) => (
//                       <div
//                         key={i}
//                         className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden"
//                       >
//                         <img
//                           src={
//                             typeof img === "string"
//                               ? img
//                               : URL.createObjectURL(img)
//                           }
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     ))}

//                     {form.community_images.length > 4 && (
//                       <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center text-xs">
//                         +{form.community_images.length - 4}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleCommunityImages}
//               />
//             </label>
//           </Section>

//           <Section title="Basic Info">
//             <Input
//               name="name"
//               label="Full Name"
//               value={form.name}
//               onChange={handleChange}
//             />
//             <Input
//               name="designation"
//               label="Designation"
//               value={form.designation}
//               onChange={handleChange}
//             />
//           </Section>

//           <Section title="Contact">
//             <Input
//               name="phone"
//               label="Phone"
//               value={form.phone}
//               onChange={handleChange}
//             />
//             <Input
//               name="email"
//               label="Email"
//               value={form.email}
//               onChange={handleChange}
//             />
//             <Input
//               name="website"
//               label="Website"
//               value={form.website}
//               onChange={handleChange}
//             />
//           </Section>

//           <Section title="Social Links">
//             <Input
//               label="LinkedIn"
//               value={form.socials.linkedin || ""}
//               onChange={(e) => handleSocialChange("linkedin", e.target.value)}
//             />
//             <Input
//               label="Instagram"
//               value={form.socials.instagram || ""}
//               onChange={(e) => handleSocialChange("instagram", e.target.value)}
//             />
//             <Input
//               label="Facebook"
//               value={form.socials.facebook || ""}
//               onChange={(e) => handleSocialChange("facebook", e.target.value)}
//             />
//             <Input
//               label="YouTube"
//               value={form.socials.youtube || ""}
//               onChange={(e) => handleSocialChange("youtube", e.target.value)}
//             />
//           </Section>

//           <Section title="Services">
//             <Textarea
//               label="Comma or new line separated"
//               value={serviceInput}
//               onChange={handleServicesChange}
//             />
//           </Section>

//           <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
//             {isEdit ? "Update Card" : "Save & Assign Card"}
//           </button>
//         </form>

//         {/* ================= MOBILE CARD PREVIEW ================= */}
//         <div className="flex justify-center">
//           <div className="w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
//             {/* COVER */}
//             <div className="relative h-28 bg-gray-800">
//               {coverPreview && (
//                 <img
//                   src={coverPreview}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               )}
//               <div className="absolute -bottom-10 left-5">
//                 <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-gray-200">
//                   {profilePreview ? (
//                     <img
//                       src={profilePreview}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-xs">
//                       Profile
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* BODY */}
//             <div className="pt-12 px-5 pb-4 space-y-4">
//               <div>
//                 <h3 className="font-bold">{form.name}</h3>
//                 <p className="text-xs text-gray-500">{form.designation}</p>
//               </div>

//               <ContactRow icon="📞" value={form.phone} />
//               <ContactRow icon="✉️" value={form.email} />
//               <ContactRow icon="🌐" value={form.website} />

//               {/* SOCIAL */}
//               <div className="flex gap-3 pt-2">
//                 {form.socials.linkedin && <Icon label="in" />}
//                 {form.socials.instagram && <Icon label="📸" />}
//                 {form.socials.facebook && <Icon label="f" />}
//                 {form.socials.youtube && <Icon label="▶️" />}
//               </div>

//               <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm">
//                 Add to Contacts
//               </button>

//               {/* COMMUNITY */}
//               {form.community_images.length > 0 && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="COMMUNITY" />
//                   <div className="flex gap-4">
//                     {form.community_images.map((_, i) => (
//                       <CommunityIcon key={i} />
//                     ))}
//                   </div>
//                 </>
//               )}

//               {/* COMPANY */}
//               {(form.company_name || form.company_email) && (
//                 <>
//                   <Divider />
//                   <SectionTitle title="COMPANY" />
//                   <p className="text-sm">{form.company_name}</p>
//                   <p className="text-xs text-gray-500">{form.company_email}</p>
//                 </>
//               )}

//               {/* SERVICES */}
//               {form.services.length > 0 && (
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

//               {/* BROCHURE */}
//               {form.brochure_pdf && (
//                 <>
//                   <Divider />
//                   <a
//                     href={
//                       typeof form.brochure_pdf === "string"
//                         ? form.brochure_pdf
//                         : URL.createObjectURL(form.brochure_pdf)
//                     }
//                     download
//                     className="text-sm text-indigo-600"
//                   >
//                     📄 Download Brochure
//                   </a>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </UserLayout>
//   );
// }

// /* ================= UI HELPERS ================= */

// function Section({ title, children }) {
//   return (
//     <div>
//       <h4 className="text-sm font-semibold mb-3">{title}</h4>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
//     </div>
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

// function ImageUpload({ label, preview, onChange, aspect = "square" }) {
//   return (
//     <label className="cursor-pointer">
//       <div
//         className={`border-2 border-dashed rounded-xl flex items-center justify-center ${
//           aspect === "cover" ? "h-40" : "h-32"
//         }`}
//       >
//         {preview ? (
//           <img src={preview} className="w-full h-full object-cover" />
//         ) : (
//           label
//         )}
//       </div>
//       <input type="file" className="hidden" onChange={onChange} />
//     </label>
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

// function Icon({ label }) {
//   return (
//     <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
//       {label}
//     </div>
//   );
// }

// function SectionTitle({ title }) {
//   return <div className="text-xs font-semibold text-gray-400">{title}</div>;
// }

// function Divider() {
//   return <div className="h-px bg-gray-200 my-3" />;
// }

// function CommunityIcon() {
//   return (
//     <div className="flex flex-col items-center text-xs text-gray-500">
//       <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
//         💬
//       </div>
//       App
//     </div>
//   );
// }

// src/components/StaffCardEditForm.jsx
import { useState, useEffect } from "react";
import UserLayout from "./layout/user/UserLayout";

export default function UserStaffCardEditForm() {
  /* ================= MODE ================= */
  const isEdit = true; // false = Add | true = Edit

  /* ================= MOCK EDIT DATA ================= */
  const mockEditData = {
    name: "John Doe",
    designation: "Senior Designer",
    phone: "9876543210",
    email: "john.doe@mail.com",
    website: "https://johndoe.design",
    company_name: "Pixl Pvt Ltd",
    company_email: "contact@pixl.com",
    services: ["UI Design", "Branding", "UX Research"],
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      youtube: "https://youtube.com/@johndoe",
    },
    profile_image: "https://i.pravatar.cc/150?img=12",
    cover_image: "https://picsum.photos/600/300",
    brochure_pdf:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    community_images: ["a", "b", "c"],
  };

  /* ================= STATE ================= */
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
    brochure_pdf: null,
    community_images: [],
    socials: {},
  });

  const [profilePreview, setProfilePreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [serviceInput, setServiceInput] = useState("");

  /* ================= PREFILL EDIT ================= */
  useEffect(() => {
    if (isEdit) {
      setForm(mockEditData);
      setServiceInput(mockEditData.services.join(", "));
      setProfilePreview(mockEditData.profile_image);
      setCoverPreview(mockEditData.cover_image);
    }
  }, []);

  /* ================= HANDLERS ================= */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSocialChange = (key, value) =>
    setForm({ ...form, socials: { ...form.socials, [key]: value } });

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
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

  const handlePdfChange = (e) =>
    setForm({ ...form, brochure_pdf: e.target.files[0] });

  const handleCommunityImages = (e) =>
    setForm({ ...form, community_images: Array.from(e.target.files) });

  const handleServicesChange = (e) => {
    setServiceInput(e.target.value);
    setForm({
      ...form,
      services: e.target.value
        .split(/[\n,]+/)
        .map((s) => s.trim())
        .filter(Boolean),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FINAL DATA:", form);
    alert("Check console for submitted data");
  };

  return (
    <UserLayout>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-4 md:p-6 lg:p-8">
        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl border border-[hsl(var(--border))] overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg-secondary)/0.6)]">
            <h2 className="text-2xl font-semibold text-[hsl(var(--text-primary))]">
              {isEdit ? "Edit Staff Card" : "Create Staff Card"}
            </h2>
            <p className="text-sm text-[hsl(var(--text-muted))] mt-1">
              Fill staff details and instantly preview the digital card
            </p>
          </div>

          <div className="p-8 space-y-10">
            {/* IMAGES - BEAUTIFUL DARK MODE */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Images</h4>
                <p className="text-xs text-[hsl(var(--text-muted))] mt-1">Profile & cover visuals</p>
              </div>

              <div className="relative w-full h-56 rounded-2xl border-2 border-dashed border-[hsl(var(--accent)/0.6)] overflow-hidden bg-[hsl(var(--bg-secondary))] hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.08)] transition-all">
                {/* COVER */}
                <label className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center gap-4">
                  {coverPreview ? (
                    <img
                      src={coverPreview}
                      alt="Cover preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="text-6xl text-[hsl(var(--accent))] opacity-90 drop-shadow-lg">
                        📸
                      </div>
                      <div className="text-xl font-semibold text-white text-center px-6 drop-shadow-md">
                        Upload cover image
                      </div>
                      <div className="text-sm text-white/90 text-center px-8">
                        Click or drag image here (recommended 1200×628)
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

                {/* PROFILE - HIGH VISIBILITY */}
                <label className="absolute -bottom-14 left-8 cursor-pointer group">
                  <div className="w-28 h-28 rounded-full border-4 border-[hsl(var(--card-bg))] shadow-2xl overflow-hidden bg-[hsl(var(--bg-secondary))] ring-4 ring-offset-4 ring-offset-[hsl(var(--card-bg))] ring-[hsl(var(--accent)/0.8)] group-hover:ring-[hsl(var(--accent))] transition-all">
                    {profilePreview ? (
                      <img
                        src={profilePreview}
                        alt="Profile preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-sm text-white font-medium gap-1.5 bg-gradient-to-b from-transparent to-black/40">
                        <span className="text-base font-semibold">Profile Photo</span>
                        <span className="text-xs opacity-90">(click to upload)</span>
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

            {/* COMPANY */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Company Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
            </div>

            {/* BROCHURE */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Company Brochure (PDF)</h4>
              </div>
              <label className="cursor-pointer block">
                <div className="border-2 border-dashed border-[hsl(var(--border))] rounded-2xl p-8 flex flex-col items-center gap-3 hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.08)] transition-all text-center">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(var(--bg-secondary))] flex items-center justify-center text-2xl text-[hsl(var(--accent))] shadow-sm">
                    📄
                  </div>
                  <div className="text-sm font-medium text-[hsl(var(--text-primary))]">
                    {form.brochure_pdf
                      ? typeof form.brochure_pdf === "string"
                        ? "Brochure uploaded"
                        : form.brochure_pdf.name
                      : "Upload company brochure"}
                  </div>
                  <div className="text-xs text-[hsl(var(--text-muted))]">PDF only · Max 5MB · Click to upload</div>

                  {form.brochure_pdf && (
                    <span className="text-xs bg-emerald-900/40 text-emerald-400 px-3 py-1 rounded-full border border-emerald-700/30">
                      Added
                    </span>
                  )}
                </div>

                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handlePdfChange}
                />
              </label>
            </div>

            {/* COMMUNITY */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Community Images</h4>
              </div>
              <label className="cursor-pointer block">
                <div className="border-2 border-dashed border-[hsl(var(--border))] rounded-2xl p-8 flex flex-col items-center gap-3 hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.08)] transition-all text-center">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(var(--bg-secondary))] flex items-center justify-center text-2xl text-[hsl(var(--accent))] shadow-sm">
                    🖼️
                  </div>
                  <div className="text-sm font-medium text-[hsl(var(--text-primary))]">Upload community images</div>
                  <div className="text-xs text-[hsl(var(--text-muted))]">JPG / PNG · Multiple images allowed</div>

                  {form.community_images.length > 0 && (
                    <span className="text-xs bg-emerald-900/40 text-emerald-400 px-3 py-1 rounded-full border border-emerald-700/30">
                      {form.community_images.length} selected
                    </span>
                  )}
                </div>

                {/* PREVIEW STRIP */}
                {form.community_images.length > 0 && (
                  <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                    {form.community_images.slice(0, 6).map((img, i) => (
                      <div
                        key={i}
                        className="w-16 h-16 rounded-lg bg-[hsl(var(--bg-secondary))] overflow-hidden border border-[hsl(var(--border))] shadow-sm flex-shrink-0"
                      >
                        <img
                          src={
                            typeof img === "string"
                              ? img
                              : URL.createObjectURL(img)
                          }
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}

                    {form.community_images.length > 6 && (
                      <div className="w-16 h-16 rounded-lg bg-[hsl(var(--bg-secondary))] flex items-center justify-center text-xs text-[hsl(var(--text-muted))] border border-[hsl(var(--border))]">
                        +{form.community_images.length - 6}
                      </div>
                    )}
                  </div>
                )}

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleCommunityImages}
                />
              </label>
            </div>

            {/* BASIC */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Basic Info</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
            </div>

            {/* CONTACT */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Contact</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
            </div>

            {/* SOCIAL */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Social Links</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="LinkedIn"
                  value={form.socials.linkedin || ""}
                  onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                />
                <Input
                  label="Instagram"
                  value={form.socials.instagram || ""}
                  onChange={(e) => handleSocialChange("instagram", e.target.value)}
                />
                <Input
                  label="Facebook"
                  value={form.socials.facebook || ""}
                  onChange={(e) => handleSocialChange("facebook", e.target.value)}
                />
                <Input
                  label="YouTube"
                  value={form.socials.youtube || ""}
                  onChange={(e) => handleSocialChange("youtube", e.target.value)}
                />
              </div>
            </div>

            {/* SERVICES */}
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">Services</h4>
              </div>
              <Textarea
                label="Comma or new line separated"
                value={serviceInput}
                onChange={handleServicesChange}
              />
            </div>

            {/* SUBMIT */}
            <button className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-dark))] text-white py-3.5 rounded-xl font-semibold shadow-lg transition-all active:scale-[0.98]">
              {isEdit ? "Update Card" : "Save & Assign Card"}
            </button>
          </div>
        </form>

        {/* ================= MOBILE CARD PREVIEW ================= */}
        <div className="flex justify-center">
          <div className="w-full max-w-[380px] bg-[hsl(var(--card-bg))] rounded-3xl shadow-2xl overflow-hidden border border-[hsl(var(--border))]">
            {/* COVER */}
            <div className="relative h-36 bg-gradient-to-br from-[hsl(var(--accent)/0.2)] to-[hsl(var(--bg-secondary))]">
              {coverPreview && (
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute -bottom-10 left-5">
                <div className="w-20 h-20 rounded-full border-4 border-[hsl(var(--card-bg))] overflow-hidden bg-[hsl(var(--card-bg))] shadow-xl">
                  {profilePreview ? (
                    <img
                      src={profilePreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs text-[hsl(var(--text-primary))] font-medium bg-gradient-to-t from-black/40 to-transparent">
                      Profile
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="pt-12 px-5 pb-4 space-y-4">
              <div>
                <h3 className="font-bold text-lg text-[hsl(var(--text-primary))]">
                  {form.name || "Full Name"}
                </h3>
                <p className="text-xs text-[hsl(var(--text-muted))]">
                  {form.designation || "Designation"}
                </p>
              </div>

              <ContactRow icon="📞" value={form.phone} />
              <ContactRow icon="✉️" value={form.email} />
              <ContactRow icon="🌐" value={form.website} />

              {/* SOCIAL */}
              <div className="flex gap-3 pt-2">
                {form.socials.linkedin && <Icon label="in" />}
                {form.socials.instagram && <Icon label="📸" />}
                {form.socials.facebook && <Icon label="f" />}
                {form.socials.youtube && <Icon label="▶️" />}
              </div>

              <button className="w-full bg-[hsl(var(--accent))] text-white py-2.5 rounded-xl text-sm font-medium shadow-md hover:bg-[hsl(var(--accent-dark))] transition-all">
                Add to Contacts
              </button>

              {/* COMMUNITY */}
              {form.community_images.length > 0 && (
                <>
                  <Divider />
                  <SectionTitle title="COMMUNITY" />
                  <div className="flex gap-4 flex-wrap">
                    {form.community_images.map((_, i) => (
                      <CommunityIcon key={i} />
                    ))}
                  </div>
                </>
              )}

              {/* COMPANY */}
              {(form.company_name || form.company_email) && (
                <>
                  <Divider />
                  <SectionTitle title="COMPANY" />
                  <p className="text-sm text-[hsl(var(--text-primary))]">
                    {form.company_name}
                  </p>
                  <p className="text-xs text-[hsl(var(--text-muted))]">
                    {form.company_email}
                  </p>
                </>
              )}

              {/* SERVICES */}
              {form.services.length > 0 && (
                <>
                  <Divider />
                  <SectionTitle title="SERVICES" />
                  <ul className="list-disc list-inside text-sm space-y-1 text-[hsl(var(--text-secondary))]">
                    {form.services.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* BROCHURE */}
              {form.brochure_pdf && (
                <>
                  <Divider />
                  <a
                    href={
                      typeof form.brochure_pdf === "string"
                        ? form.brochure_pdf
                        : URL.createObjectURL(form.brochure_pdf)
                    }
                    download
                    className="text-sm text-[hsl(var(--accent))] hover:underline flex items-center gap-2"
                  >
                    <span>📄</span> Download Brochure
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

/* ================= UI HELPERS ================= */

function Section({ title, children }) {
  return (
    <div className="space-y-5">
      <h4 className="text-sm font-semibold text-[hsl(var(--text-primary))]">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </div>
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
    <div className="md:col-span-2">
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

function ImageUpload({ label, preview, onChange, aspect = "square" }) {
  return (
    <label className="cursor-pointer block">
      <div
        className={`border-2 border-dashed border-[hsl(var(--border))] rounded-2xl flex items-center justify-center overflow-hidden hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.08)] transition-all ${
          aspect === "cover" ? "h-40" : "h-32"
        }`}
      >
        {preview ? (
          <img src={preview} className="w-full h-full object-cover" alt={label} />
        ) : (
          <div className="text-center text-[hsl(var(--text-muted))] text-sm font-medium">
            {label}
          </div>
        )}
      </div>
      <input type="file" className="hidden" onChange={onChange} />
    </label>
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

function Icon({ label }) {
  return (
    <div className="w-9 h-9 rounded-full bg-[hsl(var(--accent)/0.2)] text-[hsl(var(--accent))] flex items-center justify-center text-sm font-medium border border-[hsl(var(--accent)/0.3)]">
      {label}
    </div>
  );
}

function SectionTitle({ title }) {
  return <div className="text-xs font-semibold text-[hsl(var(--text-muted))] tracking-wider uppercase">{title}</div>;
}

function Divider() {
  return <div className="h-px bg-[hsl(var(--border))] my-4" />;
}

function CommunityIcon() {
  return (
    <div className="flex flex-col items-center text-xs text-[hsl(var(--text-muted))]">
      <div className="w-10 h-10 rounded-full bg-[hsl(var(--bg-secondary))] flex items-center justify-center border border-[hsl(var(--border))] shadow-sm">
        💬
      </div>
      App
    </div>
  );
}