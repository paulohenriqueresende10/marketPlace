import React from "react";

type selectProps = {
    categorias: {
        categoria: string,
        montadora: string
    }[];
    tipo: "montadora" | "categoria";
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ onChange, categorias, tipo }: selectProps) {  
  return (
    <select onChange={onChange}> 
        <option selected>Selecione</option>  
        {
            categorias.map((categoria) => (
              <option 
                value={tipo === 'categoria' 
                  ? categoria.categoria
                  : categoria.montadora
                }
              >
                {
                  tipo === 'categoria' 
                    ? categoria.categoria
                    : categoria.montadora
                }
              </option>
            )) 
        }
    </select>
  );
}