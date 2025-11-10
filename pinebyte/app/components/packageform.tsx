// // pages/packages.tsx


// pages/packages.tsx
"use client";

import { useState, useEffect } from "react";

interface FormData {
  selectedPackage: string;
  name: string;
  email: string;
  phone: string;
}

const allPackages = [
  "Starter Package",
  "Growth Package",
  "Professional Package",
  "Premium Package",
];

export default function PackagesForm() {
  const [formData, setFormData] = useState<FormData>({
    selectedPackage: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // preselect package if ?pkg=... exists in URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const pkg = urlParams.get("pkg");
      if (pkg && allPackages.includes(pkg)) {
        setFormData((prev) => ({ ...prev, selectedPackage: pkg }));
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mqagyrkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to contact page after successful submission
        setTimeout(() => {
          window.location.href = "/contact";
        }, 2000); // 2 second delay to show loading screen
      } else {
        setIsLoading(false);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      alert("Error submitting form. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  // Loading screen
  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo */}
          <img
            src="/pinebytelogo.png"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
          {/* Loading text */}
          <p className="text-2xl font-semibold text-green-900">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-green-50"
      style={{
        backgroundImage: "url('/laptopwplant.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-green-900 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center mb-4">
          Claim Your Package Today
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Pick a package, fill in your info, and I'll reach out to get you started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Package */}
          <label className="block">
            <span className="font-semibold">Select Package</span>
            <select
              name="selectedPackage"
              value={formData.selectedPackage}
              onChange={handleChange}
              className="mt-2 w-full border border-green-300 rounded-lg p-3 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="" disabled>
                -- Choose your package --
              </option>
              {allPackages.map((pkg, idx) => (
                <option key={idx} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
          </label>

          {/* Name */}
          <label className="block">
            <span className="font-semibold">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your Name"
              required
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="you@example.com"
              required
            />
          </label>

          {/* Phone */}
          <label className="block">
            <span className="font-semibold">Phone</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="123-456-7890"
              required
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Get Started
          </button>
        </form>
      </div>
    </main>
  );
}
// "use client";

// import { useState, useEffect } from "react";

// interface FormData {
//   selectedPackage: string;
//   name: string;
//   email: string;
//   phone: string;
// }

// const allPackages = [
//   "Starter Package",
//   "Growth Package",
//   "Professional Package",
//   "Premium Package",
// ];

// export default function PackagesForm() {
//   const [formData, setFormData] = useState<FormData>({
//     selectedPackage: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   // preselect package if ?pkg=... exists in URL
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const urlParams = new URLSearchParams(window.location.search);
//       const pkg = urlParams.get("pkg");
//       if (pkg && allPackages.includes(pkg)) {
//         setFormData((prev) => ({ ...prev, selectedPackage: pkg }));
//       }
//     }
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <main
//       className="min-h-screen flex items-center justify-center bg-green-50"
//       style={{
//         backgroundImage: "url('/laptopwplant.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-green-900 backdrop-blur-sm">
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Claim Your Package Today
//         </h2>
//         <p className="text-center text-gray-700 mb-8">
//           Pick a package, fill in your info, and I’ll reach out to get you started.
//         </p>

//         <form
//           action="https://formspree.io/f/mqagyrkw"
//           method="POST"
//           className="space-y-6"
//         >
//           {/* Package */}
//           <label className="block">
//             <span className="font-semibold">Select Package</span>
//             <select
//               name="selectedPackage"
//               value={formData.selectedPackage}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600"
//               required
//             >
//               <option value="" disabled>
//                 -- Choose your package --
//               </option>
//               {allPackages.map((pkg, idx) => (
//                 <option key={idx} value={pkg}>
//                   {pkg}
//                 </option>
//               ))}
//             </select>
//           </label>

//           {/* Name */}
//           <label className="block">
//             <span className="font-semibold">Name</span>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="Your Name"
//               required
//             />
//           </label>

//           {/* Email */}
//           <label className="block">
//             <span className="font-semibold">Email</span>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="you@example.com"
//               required
//             />
//           </label>

//           {/* Phone */}
//           <label className="block">
//             <span className="font-semibold">Phone</span>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="123-456-7890"
//               required
//             />
//           </label>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
//           >
//             Get Started
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }


// Form goes to the email on this one 

// "use client";
// "use client";
// import { useForm, ValidationError } from "@formspree/react";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface FormData {
//   selectedPackage: string;
//   name: string;
//   email: string;
//   phone: string;
// }

// export default function PackagesForm() {
//   const [state, handleSubmit] = useForm("mqagyrkw"); // <-- Replace with your Formspree ID
//   const searchParams = useSearchParams();
//   const pkgFromQuery = searchParams.get("pkg") || "";

//   const allPackages = [
//     "Starter Package",
//     "Growth Package",
//     "Professional Package",
//     "Premium Package",
//   ];

//   const [formData, setFormData] = useState<FormData>({
//     selectedPackage: pkgFromQuery,
//     name: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     if (pkgFromQuery) {
//       setFormData((prev) => ({ ...prev, selectedPackage: pkgFromQuery }));
//     }
//   }, [pkgFromQuery]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   if (state.succeeded) {
//     return (
//       <main className="min-h-screen flex items-center justify-center bg-green-50">
//         <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">
//           <h2 className="text-3xl font-bold text-green-900 mb-4">
//             Thanks for reaching out!
//           </h2>
//           <p className="text-gray-700">
//             I’ll give you a call soon to talk about your package choice.
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main
//       className="min-h-screen flex items-center justify-center bg-green-50"
//       style={{
//         backgroundImage: "url('/laptopwplant.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-green-900 backdrop-blur-sm">
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Claim Your Package Today
//         </h2>
//         <p className="text-center text-gray-700 mb-8">
//           Pick a package, fill in your info, and I’ll reach out to get you started.
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6"
//         >
//           {/* Package */}
//           <label className="block">
//             <span className="font-semibold">Select Package</span>
//             <select
//               name="selectedPackage"
//               value={formData.selectedPackage}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600"
//               required
//             >
//               <option value="" disabled>
//                 -- Choose your package --
//               </option>
//               {allPackages.map((pkg, idx) => (
//                 <option key={idx} value={pkg}>
//                   {pkg}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <input
//             type="hidden"
//             name="selectedPackage"
//             value={formData.selectedPackage}
//           />

//           {/* Name */}
//           <label className="block">
//             <span className="font-semibold">Name</span>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="Your Name"
//               required
//             />
//           </label>
//           <ValidationError prefix="Name" field="name" errors={state.errors} />

//           {/* Email */}
//           <label className="block">
//             <span className="font-semibold">Email</span>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="you@example.com"
//               required
//             />
//           </label>
//           <ValidationError prefix="Email" field="email" errors={state.errors} />

//           {/* Phone */}
//           <label className="block">
//             <span className="font-semibold">Phone</span>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="123-456-7890"
//               required
//             />
//           </label>
//           <ValidationError prefix="Phone" field="phone" errors={state.errors} />

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={state.submitting}
//             className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
//           >
//             {state.submitting ? "Sending..." : "Get Started"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// // Define the shape of our form data
// interface FormData {
//   selectedPackage: string;
//   name: string;
//   email: string;
//   phone: string;
// }

// export default function PackagesForm() {
//   const searchParams = useSearchParams();
//   const pkgFromQuery = searchParams.get("pkg") || "";

//   const allPackages = [
//     "Starter Package",
//     "Growth Package",
//     "Professional Package",
//     "Premium Package",
//   ];

//   const [formData, setFormData] = useState<FormData>({
//     selectedPackage: pkgFromQuery,
//     name: "",
//     email: "",
//     phone: "",
//   });

//   // Pre-fill the package from query string if present
//   useEffect(() => {
//     if (pkgFromQuery) {
//       setFormData((prev) => ({ ...prev, selectedPackage: pkgFromQuery }));
//     }
//   }, [pkgFromQuery]);

//   // Handle input/select changes
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//     // TODO: send formData via email/API
//   };

//   return (
//     <main
//       className="min-h-screen flex items-center justify-center bg-green-50"
//       style={{
//         backgroundImage: "url('/laptopwplant.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-green-900 backdrop-blur-sm">
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Claim Your Package Today
//         </h2>
//         <p className="text-center text-gray-700 mb-8">
//           Pick a package, fill in your info, and I’ll reach out to get you started.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Package */}
//           <label className="block">
//             <span className="font-semibold">Select Package</span>
//             <select
//               name="selectedPackage"
//               value={formData.selectedPackage}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600"
//               required
//             >
//               <option value="" disabled>
//                 -- Choose your package --
//               </option>
//               {allPackages.map((pkg, idx) => (
//                 <option key={idx} value={pkg}>
//                   {pkg}
//                 </option>
//               ))}
//             </select>
//           </label>

//           {/* Name */}
//           <label className="block">
//             <span className="font-semibold">Name</span>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="Your Name"
//               required
//             />
//           </label>

//           {/* Email */}
//           <label className="block">
//             <span className="font-semibold">Email</span>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="you@example.com"
//               required
//             />
//           </label>

//           {/* Phone */}
//           <label className="block">
//             <span className="font-semibold">Phone</span>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-2 w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
//               placeholder="123-456-7890"
//               required
//             />
//           </label>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
//           >
//             Get Started
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
