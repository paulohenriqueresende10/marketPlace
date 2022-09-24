import storeItems from "../data/items.json"

export function Home() {
  return (
    <>
      <h1 className="titulo-pagina">Home</h1>
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            {storeItems.map(item => (
              <figure key={item.id} className="shadow"><img src={item.imgUrl}/></figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
