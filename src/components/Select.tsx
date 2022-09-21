import React from "react";

type selectProps = {
    categorias: {
        name: string
    }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ onChange, categorias }: selectProps) {
  return (
    <select onChange={onChange}> 
        {
            categorias.map((categoria) => (
              <option value={categoria.name}>{categoria.name}</option>
            )) 
        }
    </select>
  );
}