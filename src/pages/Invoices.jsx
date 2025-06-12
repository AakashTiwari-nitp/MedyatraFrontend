import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';

const Invoices = () => {
  return (
    <div className="bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4 text-blue-900 dark:text-blue-100">
        <FaFileInvoiceDollar className="text-2xl mr-3" />
        <h2 className="text-2xl font-semibold">Invoice</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        content
      </p>
    </div>
  );
};

export default Invoices;
