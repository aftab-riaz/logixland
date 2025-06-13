import React, { useState, useEffect } from "react";
import useApiRequest from "../../hooks/useApiRequest";


function GlobalClient({ src, alt, width = "100px" }) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
    width: width,
    cursor: "pointer",
    margin: "40px 10px",
    backgroundColor: "transparent",
  };

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClients = async () => {
              setLoading(true);
              await useApiRequest({
                url: 'global-projects',
                method: 'get',
                data: {limit: 4}
              }).then(res => {
                setClients(res.data);
              }).catch(error => {
                console.log('Error ', error.data.message);
              }).finally(() => {
                setLoading(false);
              })
          };
  
      useEffect(() => {
          fetchClients();
      }, []);

  return (
    <div style={{ textAlign: "center", backgroundColor: "transparent", color: "white" }}>
      <h5 style={{ marginBottom: "10px", marginTop: "20px" }}>
        We’ve 1253+ Global Clients & lot’s of Project Completed
      </h5>

      {loading && <p>Loading clients...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "2vw",
          flexWrap: "wrap",
          backgroundColor: "transparent",
        }}
      >
        {clients.map((client) => (
          <GlobalClient
            key={client.id}
            src={client.logo_url}
            alt={`Client-${client.id}`}
            width="12%"
          />
        ))}
      </div>
    </div>
  );
}
