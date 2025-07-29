import '../assets/styles/Products.css'
import shopIcon from '../assets/images/shop.svg'

function Product(props) {
  let { img, name, info, cost, item, addToCartHandler, getCountForItem } = props

  // const addToCartHandler = (item) => {
  //   setCartList((prev) => {
  //     const existingItem = prev.find((p) => p.id === item.id)
  //     if (existingItem) {
  //       // اگه بود، فقط count شو زیاد کن
  //       return prev.map((p) => (p.id === item.id ? { ...p, count: p.count + 1 } : p))
  //     } else {
  //       // اگه نبود، اضافه کن با count: 1
  //       return [...prev, { ...item, count: 1 }]
  //     }
  //   })
  //   setCartList([...cartList , item])
  // }
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
