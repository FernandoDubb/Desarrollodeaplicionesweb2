'use client'

import { useState, useEffect } from 'react';
import TarjetaPersona from './components/TarjetaPersona';
import personasData, { Persona } from './data/personas';

export default function Home() {
    const [personas, setPersonas] = useState<Persona[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPersonas(personasData);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full max-w-md p-6">
                <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                    Personas
                </h1>
                <p className="text-sm text-zinc-500 mb-6">
                    Lista de tarjetas con información
                </p>
                <div className="flex flex-col gap-3">
                    {personas.map((persona) => (
                        <TarjetaPersona
                            key={persona.id}
                            nombre={persona.nombre}
                            ocupacion={persona.ocupacion}
                            pais={persona.pais}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
