import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <div className="h-100 card">
      <img
        className="card-img-top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <div className="d-flex flex-column card-body">
        <div className="d-flex justify-content-between align-items-baseline mb-4 card-title h5">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button type="button" className="w-100 btn btn-primary" onClick={() => increaseCartQuantity(id)}>
              + Adicionar
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button type="button" className="btn btn-primary" onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span className="fs-3">{quantity}</span> no Carrinho
                </div>
                <button type="button" className="btn btn-primary" onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(id)}
              >
                Remover
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
