import React, { useState } from 'react';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await fetch('http://localhost:8080/api/resume/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await res.text();
      setResponse(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📄 ATS Resume Checker</h2>

        <input type="file" accept="application/pdf" onChange={handleFileChange} style={styles.input} />

        <button onClick={handleSubmit} style={styles.button}>
          Upload & Analyze
        </button>

        {response && <div style={styles.resultBox}>
          <h3 style={{ color: "#555" }}>📋 Result:</h3>
          <p>{response}</p>
        </div>}
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
    backgroundColor: '#fff'
  },
  button: {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#AEDFF7',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#00334e'
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
