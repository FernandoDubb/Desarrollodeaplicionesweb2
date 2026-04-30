type Props = {
  idioma: string;
  texto: string;
  cambiarIdioma: (lang: string) => void;
  activo?: boolean;
};

export default function BotonIdioma({ idioma, texto, cambiarIdioma, activo }: Props) {
  return (
    <button
      onClick={() => cambiarIdioma(idioma)}
      style={{
        flex: 1,
        padding: "10px 16px",
        borderRadius: "10px",
        border: activo ? "2px solid #4a90d9" : "2px solid #2a4060",
        background: activo ? "#4a90d9" : "transparent",
        color: activo ? "#fff" : "#7a9cc0",
        fontWeight: "600",
        fontSize: "0.9rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      {texto}
    </button>
  );
}