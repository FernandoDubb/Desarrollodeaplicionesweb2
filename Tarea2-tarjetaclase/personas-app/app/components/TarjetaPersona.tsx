import { Persona } from '../data/personas';

interface Props {
    nombre: Persona['nombre'];
    ocupacion: Persona['ocupacion'];
    pais: Persona['pais'];
}

export default function TarjetaPersona({ nombre, ocupacion, pais }: Props) {
    return (
        <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-900 shadow-sm flex flex-col gap-1">
            <span className="font-semibold text-zinc-800 dark:text-zinc-100">{nombre}</span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{ocupacion}</span>
            <span className="text-sm text-zinc-400 dark:text-zinc-500">{pais}</span>
        </div>
    );
}
