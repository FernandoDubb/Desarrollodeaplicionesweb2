"use client";

import { useState, useEffect } from "react";
import BotonIdioma from "@/components/BotonIdioma";
import palabras from "@/data/palabras";

type Palabra = {
  es: string;
  en: string;
};

export default function Home() {
  const [idioma, setIdioma] = useState<"es" | "en">("es");
  const [lista, setLista] = useState<string[]>([]);

  const cambiarIdioma = (lang: string) => {
    setIdioma(lang as "es" | "en");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLista(palabras.map((item: Palabra) => item[idioma]));
    }, 0);
    return () => clearTimeout(timer);
  }, [idioma]);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      background: "var(--background)",
    }}>
      <div style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "40px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}>
        <h1 style={{
          fontSize: "1.6rem",
          fontWeight: "700",
          marginBottom: "8px",
          color: "var(--accent)",
          letterSpacing: "-0.5px",
        }}>
          Traductor
        </h1>
        <p style={{
          fontSize: "0.85rem",
          color: "#7a9cc0",
          marginBottom: "28px",
        }}>
          Selecciona un idioma para ver la lista
        </p>

        <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
          <BotonIdioma
            idioma="es"
            texto="🇪🇸 Español"
            cambiarIdioma={cambiarIdioma}
            activo={idioma === "es"}
          />
          <BotonIdioma
            idioma="en"
            texto="🇺🇸 Inglés"
            cambiarIdioma={cambiarIdioma}
            activo={idioma === "en"}
          />
        </div>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
          {lista.map((palabra, i) => (
            <li key={i} style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "10px 16px",
              fontSize: "0.95rem",
              color: "var(--foreground)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <span style={{ color: "var(--accent)", fontWeight: "600", minWidth: "20px" }}>
                {i + 1}.
              </span>
              {palabra}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
