import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import Input from "../components/input"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  const [car, setcars] = useState(storeItems);
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInputValue = event.target.value; 
    const filterTypeValue = "name";
    const newCar = storeItems.filter((car) => car[filterTypeValue].toLowerCase().includes(searchInputValue));
    setcars(newCar);
  };
  return (
    <> 
      <div className="d-flex justify-content-between">
        <h1 className="titulo-pagina">Carros</h1> 
        <div className="d-flex justify-content-center p-3">
          <Input
            type="text"
            placeholder="Procure pelo carro desejado"
            onChange={handleOnChangeInput}
            style={{
              outline: "none",
            }}
          />
        </div> 
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {car.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
