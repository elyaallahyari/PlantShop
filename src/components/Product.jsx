import '../assets/styles/Products.css'
import shopIcon from '../assets/images/shop.svg'

function Product(props) {
  let { img, name, info, cost } = props
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
            <span>{cost}</span>
          </div>
          <div className="product__footerBtn">
            <img src={shopIcon} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Product
