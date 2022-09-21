import React from "react";

type selectProps = {
    categorias: {
        categoria: string,
        montadora: string
    }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ onChange, categorias }: selectProps) {
  return (
    <select onChange={onChange}> 
        <option selected>Selecione</option>  
        {
            categorias.map((categoria) => (
              <option value={categoria.categoria}>{categoria.categoria}</option>
            )) 
        }
    </select>
  );
}