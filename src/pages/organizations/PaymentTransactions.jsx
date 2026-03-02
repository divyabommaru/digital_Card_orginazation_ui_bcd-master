// // src/pages/organizations/PaymentTransactions.jsx
// import { useState, useEffect } from "react";
// import { Search, ArrowLeft, FileText, Download, X } from "lucide-react";
// import AdminLayout from "../../components/layout/AdminLayout";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";

// export default function PaymentTransactions() {
//   const navigate = useNavigate();

//   /* ---------------- STATE ---------------- */
//   const [payments, setPayments] = useState([]);
//   const [pagination, setPagination] = useState({});
//   const [loading, setLoading] = useState(false);

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("all");
//   const [method, setMethod] = useState("all");
//   const [page, setPage] = useState(1);
//   const [receipt, setReceipt] = useState(null);

//   /* ---------------- ORGANIZATION INFO ---------------- */
//   const org = {
//     name: "ABC Corporation",
//     logo: "https://via.placeholder.com/100x100",
//     email: "support@abccorp.com",
//     phone: "+91 98765 43210",
//   };

//   /* ---------------- FETCH PAYMENTS ---------------- */
//   useEffect(() => {
//     fetchPayments();
//   }, [search, status, method, page]);

//   const fetchPayments = async () => {
//     try {
//       setLoading(true);

//       const res = await api.get("/orginazation-dashboard/payment-history", {
//         params: {
//           search,
//           status,
//           method,
//           page,
//         },
//       });
//       setPayments(res?.data?.data ?? []);

//       setPagination(res.data.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- EXPORT CSV ---------------- */
//   const exportCSV = () => {
//     const headers = ["Order ID", "Cards", "Amount", "Method", "Status", "Date"];

//     const rows = payments.map((p) => [
//       p.order_id,
//       p.cards,
//       p.amount,
//       p.payment_method,
//       p.payment_status,
//       p.date,
//     ]);

//     const csv =
//       "data:text/csv;charset=utf-8," +
//       [headers, ...rows].map((e) => e.join(",")).join("\n");

//     const link = document.createElement("a");
//     link.href = encodeURI(csv);
//     link.download = "organization_payments.csv";
//     link.click();
//   };

//   /* ---------------- EXPORT EXCEL ---------------- */
//   const exportExcel = () => {
//     let table = `<table><tr>
//       <th>Order ID</th>
//       <th>Cards</th>
//       <th>Amount</th>
//       <th>Method</th>
//       <th>Status</th>
//       <th>Date</th>
//     </tr>`;

//     payments.forEach((p) => {
//       table += `<tr>
//         <td>${p.order_id}</td>
//         <td>${p.cards}</td>
//         <td>${p.amount}</td>
//         <td>${p.payment_method}</td>
//         <td>${p.payment_status}</td>
//         <td>${p.date}</td>
//       </tr>`;
//     });

//     table += "</table>";

//     const uri =
//       "data:application/vnd.ms-excel;charset=utf-8," +
//       encodeURIComponent(table);

//     const link = document.createElement("a");
//     link.href = uri;
//     link.download = "organization_payments.xls";
//     link.click();
//   };

//   return (
//     <AdminLayout>
//       {/* HEADER */}
//       <div className="flex items-center gap-3 mb-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
//         >
//           <ArrowLeft size={18} />
//           Back
//         </button>
//         <h2 className="text-xl font-semibold">Payment History</h2>
//       </div>

//       {/* FILTER BAR */}
//       <div className="flex flex-wrap gap-4 justify-between mb-4">
//         <div className="flex items-center gap-2 border rounded-xl px-3 py-2 bg-white shadow-sm">
//           <Search size={16} className="text-gray-400" />
//           <input
//             placeholder="Search Order ID..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//             className="outline-none text-sm w-64"
//           />
//         </div>

//         <div className="flex gap-3">
//           <button
//             onClick={exportCSV}
//             className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm hover:bg-gray-50"
//           >
//             <Download size={16} /> CSV
//           </button>

//           <button
//             onClick={exportExcel}
//             className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm hover:bg-gray-50"
//           >
//             <Download size={16} /> Excel
//           </button>
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="bg-white rounded-2xl shadow overflow-hidden">
//         {loading ? (
//           <div className="p-6 text-center">Loading...</div>
//         ) : (
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-50 text-gray-600">
//               <tr>
//                 <th className="p-4 text-left">Order ID</th>
//                 <th className="p-4 text-center">Cards</th>
//                 <th className="p-4 text-center">Amount</th>
//                 <th className="p-4 text-center">Method</th>
//                 <th className="p-4 text-center">Payment Type</th>
//                 <th className="p-4 text-center">Status</th>
//                 <th className="p-4 text-center">Date</th>
//                 <th className="p-4 text-center">Receipt</th>
//               </tr>
//             </thead>

//             <tbody>
//               {payments.map((p) => (
//                 <tr key={p.id} className="border-t hover:bg-gray-50">
//                   <td className="p-4 font-medium">{p.order_id}</td>
//                   <td className="p-4 text-center">{p.cards}</td>
//                   <td className="p-4 text-center font-semibold">₹{p.amount}</td>
//                   <td className="p-4 text-center">{p.method}</td>
//                   <td className="p-4 text-center">{p.payment_type}</td>
//                   <td className="p-4 text-center">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         p.status === "Paid"
//                           ? "bg-green-100 text-green-600"
//                           : p.payment_status === "Pending"
//                             ? "bg-yellow-100 text-yellow-600"
//                             : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {p.status}
//                     </span>
//                   </td>
//                   <td className="p-4 text-center">{p.date}</td>
//                   <td className="p-4 text-center">
//                     <button
//                       onClick={() => setReceipt(p)}
//                       className="text-indigo-600 hover:underline"
//                     >
//                       <FileText size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* PAGINATION */}
//       <div className="flex justify-between mt-4">
//         <button
//           disabled={!pagination.prev_page_url}
//           onClick={() => setPage(page - 1)}
//           className="px-4 py-2 border rounded"
//         >
//           Previous
//         </button>

//         <button
//           disabled={!pagination.next_page_url}
//           onClick={() => setPage(page + 1)}
//           className="px-4 py-2 border rounded"
//         >
//           Next
//         </button>
//       </div>

//       {/* RECEIPT MODAL */}
//       {receipt && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//           <div className="bg-white rounded-3xl shadow-2xl w-[420px] overflow-hidden">
//             <div className="bg-indigo-600 p-5 text-white relative">
//               <button
//                 onClick={() => setReceipt(null)}
//                 className="absolute right-4 top-4"
//               >
//                 <X size={18} />
//               </button>

//               <div className="flex items-center gap-4">
//                 <img
//                   src={org.logo}
//                   className="w-14 h-14 rounded-xl bg-white p-1"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold">{org.name}</h3>
//                   <p className="text-sm opacity-90">Payment Receipt</p>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 space-y-4 text-sm">
//               <div className="flex justify-between">
//                 <span>Order ID</span>
//                 <span>{receipt.order_id}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Payment Method</span>
//                 <span>{receipt.payment_method}</span>
//               </div>

//               <div className="border-t pt-4 flex justify-between">
//                 <span>Total Paid</span>
//                 <span className="text-2xl font-bold text-indigo-600">
//                   ₹{receipt.amount}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </AdminLayout>
//   );
// }


// src/pages/organizations/PaymentTransactions.jsx
import { useState, useEffect } from "react";
import { Search, ArrowLeft, FileText, Download, X } from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function PaymentTransactions() {
  const navigate = useNavigate();

  /* ---------------- STATE ---------------- */
  const [payments, setPayments] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [method, setMethod] = useState("all");
  const [page, setPage] = useState(1);
  const [receipt, setReceipt] = useState(null);

  /* ---------------- ORGANIZATION INFO ---------------- */
  const org = {
    name: "ABC Corporation",
    logo: "https://via.placeholder.com/100x100",
    email: "support@abccorp.com",
    phone: "+91 98765 43210",
  };

  /* ---------------- FETCH PAYMENTS ---------------- */
  useEffect(() => {
    fetchPayments();
  }, [search, status, method, page]);

  const fetchPayments = async () => {
    try {
      setLoading(true);

      const res = await api.get("/orginazation-dashboard/payment-history", {
        params: {
          search,
          status,
          method,
          page,
        },
      });

      setPayments(res?.data?.data ?? []);
      setPagination(res.data || {});
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- EXPORT CSV ---------------- */
  const exportCSV = () => {
    const headers = ["Order ID", "Cards", "Amount", "Method", "Status", "Date"];

    const rows = payments.map((p) => [
      p.order_id,
      p.cards,
      p.amount,
      p.payment_method,
      p.payment_status,
      p.date,
    ]);

    const csv =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "organization_payments.csv";
    link.click();
  };

  /* ---------------- EXPORT EXCEL ---------------- */
  const exportExcel = () => {
    let table = `<table><tr>
      <th>Order ID</th>
      <th>Cards</th>
      <th>Amount</th>
      <th>Method</th>
      <th>Status</th>
      <th>Date</th>
    </tr>`;

    payments.forEach((p) => {
      table += `<tr>
        <td>${p.order_id || ""}</td>
        <td>${p.cards || ""}</td>
        <td>${p.amount || ""}</td>
        <td>${p.payment_method || ""}</td>
        <td>${p.payment_status || ""}</td>
        <td>${p.date || ""}</td>
      </tr>`;
    });

    table += "</table>";

    const uri =
      "data:application/vnd.ms-excel;charset=utf-8," +
      encodeURIComponent(table);

    const link = document.createElement("a");
    link.href = uri;
    link.download = "organization_payments.xls";
    link.click();
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--text-primary))]">
              Payment History
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[hsl(var(--border))] 
                         text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent)/0.1)] 
                         hover:text-[hsl(var(--accent))] transition-all"
            >
              <Download size={18} />
              CSV
            </button>

            <button
              onClick={exportExcel}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[hsl(var(--border))] 
                         text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent)/0.1)] 
                         hover:text-[hsl(var(--accent))] transition-all"
            >
              <Download size={18} />
              Excel
            </button>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-start md:items-center mb-8">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--text-muted))]"
            />
            <input
              placeholder="Search Order ID..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[hsl(var(--border))] 
                         bg-[hsl(var(--card-bg))] text-[hsl(var(--text-primary))] 
                         placeholder-[hsl(var(--text-muted))] 
                         focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] 
                         outline-none transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setPage(1);
              }}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-[hsl(var(--border))] 
                         bg-[hsl(var(--card-bg))] text-[hsl(var(--text-primary))]
                         focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] 
                         outline-none transition-all"
            >
              <option value="all">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>

            <select
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
                setPage(1);
              }}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-[hsl(var(--border))] 
                         bg-[hsl(var(--card-bg))] text-[hsl(var(--text-primary))]
                         focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent)/0.3)] 
                         outline-none transition-all"
            >
              <option value="all">All Methods</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
              <option value="Netbanking">Netbanking</option>
              <option value="Wallet">Wallet</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-[hsl(var(--card-bg))] rounded-2xl shadow-2xl overflow-hidden border border-[hsl(var(--border))]">
          {loading ? (
            <div className="p-12 text-center text-[hsl(var(--text-muted))]">
              Loading transactions...
            </div>
          ) : payments.length === 0 ? (
            <div className="p-12 text-center text-[hsl(var(--text-muted))]">
              No transactions found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm divide-y divide-[hsl(var(--border))]">
                <thead className="bg-[hsl(var(--bg-secondary)/0.6)]">
                  <tr>
                    <th className="p-5 text-left text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="p-5 text-center text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Cards
                    </th>
                    <th className="p-5 text-center text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="p-5 text-center text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Method
                    </th>
                    <th className="p-5 text-center text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Payment Type
                    </th>
                    <th className="p-5 text-center text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="p-5 text-center text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Date
                    </th>
                    <th className="p-5 text-center text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider">
                      Receipt
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-[hsl(var(--accent)/0.08)] transition-colors"
                    >
                      <td className="p-5 font-medium text-[hsl(var(--text-primary))]">{p.order_id}</td>
                      <td className="p-5 text-center text-[hsl(var(--text-primary))]">{p.cards}</td>
                      <td className="p-5 text-center font-semibold text-[hsl(var(--accent))]">₹{p.amount}</td>
                      <td className="p-5 text-center text-[hsl(var(--text-secondary))]">{p.payment_method || "—"}</td>
                      <td className="p-5 text-center text-[hsl(var(--text-secondary))]">{p.payment_type || "—"}</td>
                      <td className="p-5 text-center">
                        <span
                          className={`px-4 py-1.5 rounded-full text-xs font-medium border
                            ${p.status === "Paid" || p.payment_status === "Paid"
                              ? "bg-emerald-900/40 text-emerald-400 border-emerald-700/30"
                              : p.payment_status === "Pending"
                              ? "bg-amber-900/40 text-amber-400 border-amber-700/30"
                              : "bg-rose-900/40 text-rose-400 border-rose-700/30"}`}
                        >
                          {p.status || p.payment_status || "—"}
                        </span>
                      </td>
                      <td className="p-5 text-center text-[hsl(var(--text-secondary))]">{p.date}</td>
                      <td className="p-5 text-center">
                        <button
                          onClick={() => setReceipt(p)}
                          className="text-[hsl(var(--accent))] hover:text-[hsl(var(--accent-dark))] transition-colors"
                        >
                          <FileText size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 text-sm text-[hsl(var(--text-muted))]">
          <p>
            Showing {payments.length} of {pagination.total || payments.length} transactions
          </p>

          <div className="flex gap-3">
            <button
              disabled={!pagination.prev_page_url}
              onClick={() => setPage((p) => p - 1)}
              className="px-5 py-2.5 rounded-xl border border-[hsl(var(--border))] disabled:opacity-50 hover:bg-[hsl(var(--accent)/0.1)] transition"
            >
              Previous
            </button>

            <button
              disabled={!pagination.next_page_url}
              onClick={() => setPage((p) => p + 1)}
              className="px-5 py-2.5 rounded-xl border border-[hsl(var(--border))] disabled:opacity-50 hover:bg-[hsl(var(--accent)/0.1)] transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* RECEIPT MODAL */}
        {receipt && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-[hsl(var(--card-bg))] rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-[hsl(var(--border))]">
              {/* Modal Header */}
              <div className="bg-[hsl(var(--accent))] p-6 text-white relative">
                <button
                  onClick={() => setReceipt(null)}
                  className="absolute right-6 top-6 text-white/80 hover:text-white transition"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-4">
                  <img
                    src={org.logo}
                    alt="Organization Logo"
                    className="w-14 h-14 rounded-xl bg-white/20 p-1.5"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{org.name}</h3>
                    <p className="text-sm opacity-90">Payment Receipt</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-5 text-[hsl(var(--text-primary))]">
                <div className="flex justify-between text-base">
                  <span className="font-medium">Order ID</span>
                  <span className="font-semibold">{receipt.order_id}</span>
                </div>

                <div className="flex justify-between text-base">
                  <span className="font-medium">Payment Method</span>
                  <span className="font-semibold">{receipt.payment_method || "—"}</span>
                </div>

                <div className="border-t border-[hsl(var(--border))] pt-5 flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Paid</span>
                  <span className="text-3xl font-bold text-[hsl(var(--accent))]">
                    ₹{receipt.amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}