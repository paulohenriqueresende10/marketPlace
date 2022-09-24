import { useState } from "react"
import Input from "../components/input"
import Select from "../components/Select"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

type filterTypeSelect = "name" | "categoria" | "montadora";
  

export function Store() {
  const [car, setcars] = useState(storeItems);
  const [filter, setFilter] = useState<filterTypeSelect>("name");

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const searchInputValue = event.target.value; 
    const filterTypeValue = filter;
    const newCar = storeItems.filter((car) => car[filterTypeValue].toLowerCase().includes(searchInputValue));
    setcars(newCar);
  };
  
  const handleChangeCategoria = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const changeSelectValue = event.target.value;
    if(changeSelectValue === "selecione") {
      setcars(storeItems);
    } else {
      const newCar = storeItems.filter((car) => {
        return car.categoria === changeSelectValue ? true : false
      });
      setcars(newCar);
    }
  }
  const handleChangeMontadora = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const changeSelectValue = event.target.value;
    if(changeSelectValue === "selecione") {
      setcars(storeItems);
    } else {
      const newCar = storeItems.filter((car) => {
        return car.montadora === changeSelectValue ? true : false
      });
      setcars(newCar);
    }
  }
  const handleOnChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const changeSelectValue = event.target.value;
    if(changeSelectValue === "name") {
      setFilter("name");
    }
    if(changeSelectValue === "categoria") {
      setFilter("categoria");
    }
    if(changeSelectValue === "montadora") {
      setFilter("montadora");
    }   
  }

  return (
    <> 
      <div className="d-flex justify-content-between">
        <h1 className="titulo-pagina">Carros</h1> 
        <div className="d-flex justify-content-center gap-3 p-3">
          <Select 
            categorias={storeItems}
            tipo={"montadora"} 
            onChange={handleChangeMontadora} 
          />
          <Select 
            categorias={storeItems}
            tipo={"categoria"}  
            onChange={handleChangeCategoria} 
          />
          <div className="d-flex">
            <select onChange={handleOnChangeSelect}>
              <option value={"nome"}>Nome</option>
              <option value={"categoria"}>Categoria</option>
              <option value={"montadora"}>Montadora</option>
            </select>
            <Input
              type="text"
              placeholder="Procure seu carro"
              onChange={handleOnChangeInput}
              style={{
                outline: "none",
              }}
            />
          </div>
        </div> 
      </div>
      <div className="g-3 row row-cols-lg-3 row-cols-md-2 row-cols-1">
        {car.map(item => (
          <div className="col" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  )
}
