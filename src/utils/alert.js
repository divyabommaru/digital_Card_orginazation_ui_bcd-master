// import Swal from "sweetalert2";

// export const successAlert = (title, text = "") => {
//   return Swal.fire({
//     icon: "success",
//     title,
//     text,
//     confirmButtonColor: "#4f46e5", // indigo
//   });
// };

// export const errorAlert = (title, text = "") => {
//   return Swal.fire({
//     icon: "error",
//     title,
//     text,
//     confirmButtonColor: "#dc2626", // red
//   });
// };

// export const warningAlert = (title, text = "") => {
//   return Swal.fire({
//     icon: "warning",
//     title,
//     text,
//     confirmButtonColor: "#f59e0b", // amber
//   });
// };

// export const infoAlert = (title, text = "") => {
//   return Swal.fire({
//     icon: "info",
//     title,
//     text,
//     confirmButtonColor: "#2563eb", // blue
//   });
// };

// export const confirmAlert = ({
//   title = "Are you sure?",
//   text = "This action cannot be undone",
//   confirmText = "Yes, continue",
//   cancelText = "Cancel",
// }) => {
//   return Swal.fire({
//     icon: "warning",
//     title,
//     text,
//     showCancelButton: true,
//     confirmButtonText: confirmText,
//     cancelButtonText: cancelText,
//     confirmButtonColor: "#dc2626",
//     cancelButtonColor: "#6b7280",
//   });
// };


// src/utils/alert.js
import Swal from "sweetalert2";

// Custom orange accent color used across all alerts
const ACCENT_COLOR = "#f97316";        // orange-600
const ACCENT_DARK = "#ea580c";         // orange-700 (hover)
const DANGER_COLOR = "#dc2626";        // red-600 (delete/confirm danger)
const GRAY_COLOR = "#6b7280";          // gray-500 (cancel)

// Success Alert
export const successAlert = (title, text = "") => {
  return Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonColor: ACCENT_COLOR,
    confirmButtonText: "OK",
    buttonsStyling: false,
    customClass: {
      confirmButton: 
        "px-6 py-2.5 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all shadow-sm",
      popup: "rounded-2xl shadow-2xl border border-gray-700/50",
      title: "text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100",
      content: "text-gray-600 dark:text-gray-300",
    },
  });
};

// Error Alert
export const errorAlert = (title, text = "") => {
  return Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonColor: DANGER_COLOR,
    confirmButtonText: "OK",
    buttonsStyling: false,
    customClass: {
      confirmButton: 
        "px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all shadow-sm",
      popup: "rounded-2xl shadow-2xl border border-gray-700/50",
      title: "text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100",
      content: "text-gray-600 dark:text-gray-300",
    },
  });
};

// Warning Alert
export const warningAlert = (title, text = "") => {
  return Swal.fire({
    icon: "warning",
    title,
    text,
    confirmButtonColor: "#f59e0b", // amber-500
    confirmButtonText: "OK",
    buttonsStyling: false,
    customClass: {
      confirmButton: 
        "px-6 py-2.5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-all shadow-sm",
      popup: "rounded-2xl shadow-2xl border border-gray-700/50",
      title: "text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100",
      content: "text-gray-600 dark:text-gray-300",
    },
  });
};

// Info Alert
export const infoAlert = (title, text = "") => {
  return Swal.fire({
    icon: "info",
    title,
    text,
    confirmButtonColor: "#2563eb", // blue-600
    confirmButtonText: "OK",
    buttonsStyling: false,
    customClass: {
      confirmButton: 
        "px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-sm",
      popup: "rounded-2xl shadow-2xl border border-gray-700/50",
      title: "text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100",
      content: "text-gray-600 dark:text-gray-300",
    },
  });
};

// Confirm Alert (Yes/No)
export const confirmAlert = ({
  title = "Are you sure?",
  text = "This action cannot be undone",
  confirmText = "Yes, continue",
  cancelText = "Cancel",
  confirmColor = DANGER_COLOR, // red by default for destructive actions
} = {}) => {
  return Swal.fire({
    icon: "warning",
    title,
    text,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: true, // Cancel on left, Confirm on right
    confirmButtonColor: confirmColor,
    cancelButtonColor: GRAY_COLOR,
    buttonsStyling: false,
    customClass: {
      confirmButton: 
        "px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all shadow-sm",
      cancelButton: 
        "px-6 py-2.5 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all shadow-sm",
      popup: "rounded-2xl shadow-2xl border border-gray-700/50",
      title: "text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100",
      content: "text-gray-600 dark:text-gray-300",
    },
  });
};