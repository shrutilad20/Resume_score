import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setResponse("❗ Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // ✅ key = "file" to match Spring @RequestParam("file")

    try {
      const res = await axios.post("http://localhost:8080/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponse(res.data);
    } catch (err) {
      setResponse("❌ Upload failed: " + err.message);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-xl bg-white rounded-xl shadow-lg p-6 transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        📄 ATS Resume Checker
      </h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 mb-4"
      />

      <motion.button
        onClick={handleUpload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition"
      >
        Upload & Analyze
      </motion.button>

      {response && (
        <motion.div
          className="w-full mt-6 p-4 bg-gray-50 border border-teal-100 rounded-lg text-sm text-gray-800 whitespace-pre-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold text-teal-600 mb-2">📋 Result:</h3>
          <p>{response}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ResumeUploader;
