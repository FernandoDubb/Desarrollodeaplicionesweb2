export type Persona = {
  id: number;
  nombre: string;
  ocupacion: string;
  pais: string;
};

const personas: Persona[] = [
  { id: 1, nombre: "Fernando Dubon", ocupacion: "Futbolista", pais: "Honduras" },
  { id: 2, nombre: "Oscar Hernandez", ocupacion: "Chef", pais: "Colombia" },
  { id: 3, nombre: "Miguel Hernandez", ocupacion: "Entrenandor", pais: "Argentina" },
  { id: 4, nombre: "Daniel Hernandez", ocupacion: "Jugador Profesional", pais: "Chile" },
  { id: 5, nombre: "Fernando Messi", ocupacion: "Presentador", pais: "Honduras" },
];

export default personas;