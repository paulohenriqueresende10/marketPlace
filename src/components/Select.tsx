import React from "react";

type selectProps = {
    categorias: {
        id: number;
        categoria: string,
        montadora: string
    }[];
    tipo: "montadora" | "categoria";
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ onChange, categorias, tipo }: selectProps) {  
  categorias = categorias.filter((value, index, self) =>
  index === self.findIndex((t) => (
    tipo === 'montadora' 
      ? t.montadora === value.montadora
      : t.categoria === value.categoria
  ))
); 
  return (
    <select onChange={onChange}> 
        <option value={"selecione"} defaultValue={0}>Selecione</option>  
        {
            categorias.map((categoria) => (
              <option 
                key={categoria.id}
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