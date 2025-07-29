import '../assets/styles/Products.css'
import shopIcon from '../assets/images/shop.svg'

function Product(props) {
  let { img, name, info, cost, item, addToCartHandler, getCountForItem } = props

  const size = getCountForItem(item.id)
  return (
    <>
      <div className="product">
        <div className="product__img">
          <img src={img} />
        </div>
        <div className="product__name">
          <h4>{name}</h4>
        </div>
        <div className="poduct__info">
          <span>{info}</span>
        </div>
        <div className="pruducts__footer">
          <div className="product__footerCost">
            <span>Price: {cost}$</span>
          </div>
          <div className="product__footerBtn" onClick={() => addToCartHandler(item)}>
            <img src={shopIcon} />
          </div>
          <div className="product__badge">{size > 0 && <span>{size}</span>}</div>
        </div>
      </div>
    </>
  )
}
export default Product
