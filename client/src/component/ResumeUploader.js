import React, { useState } from 'react';
import axios from 'axios';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setResponse("Please select a file before uploading.");
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
      setResponse("Upload failed: " + err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📄 ATS Resume Checker</h2>

        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={styles.input} />

        <button onClick={handleUpload} style={styles.button}>
          Upload & Analyze
        </button>

        {response && (
          <div style={styles.resultBox}>
            <h3 style={{ color: "#555" }}>📋 Result:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FDF6F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  card: {
    backgroundColor: '#E0F7FA',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center'
  },
  heading: {
    marginBottom: '1rem',
    color: '#00796B'
  },
  input: {
    margin: '1rem 0',
    padding: '0.5rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    width: '100%'
  },
  button: {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#AEDFF7',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#00334e',
    marginTop: '1rem'
  },
  resultBox: {
    marginTop: '2rem',
    backgroundColor: '#FFF4F7',
    padding: '1rem',
    borderRadius: '10px',
    color: '#444',
    textAlign: 'left'
  }
};

export default ResumeUploader;
