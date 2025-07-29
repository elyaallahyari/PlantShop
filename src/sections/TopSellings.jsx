import '../assets/styles/TopSelling.css'
import topSellingIcon from '../assets/images/topSelling.svg'
import Product from '../components/Product'
import plantIcon1 from '../assets/images/plant1.svg'
import plantIcon2 from '../assets/images/plant2.svg'
import plantIcon3 from '../assets/images/plant3.svg'
import plantIcon4 from '../assets/images/plant4.svg'
import plantIcon5 from '../assets/images/plant5.svg'
import plantIcon6 from '../assets/images/plant6.svg'

function TopSellings({ addToCartHandler, getCountForItem }) {
  let producrList = [
    {
      id: 1,
      img: plantIcon1,
      name: 'Calathea plant 1',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      cost: 100,
      count: 1
    },
    {
      id: 2,
      img: plantIcon2,
      name: 'Calathea plant 2',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      cost: 300,
      count: 1
    },
    {
      id: 3,
      img: plantIcon3,
      name: 'Calathea plant 3',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      cost: 600,
      count: 1
    },
    {
      id: 4,
      img: plantIcon4,
      name: 'Calathea plant 4',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      cost: 200,
      count: 1
    },
    {
      id: 5,
      img: plantIcon5,
      name: 'Calathea plant 5',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      cost: 500,
      count: 1
    },
    {
      id: 6,
      img: plantIcon6,
      name: 'Calathea plant 6',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      cost: 100,
      count: 1
    }
  ]
  return (
    <>
      <div className="topSelling">
        <div className="topSelling__title">
          <img src={topSellingIcon} alt="topSellingIcon" id="plants" />
        </div>
        <div className="topSelling__products">
          {producrList.map((prod) => (
            <Product
              className="product"
              key={prod.id}
              img={prod.img}
              name={prod.name}
              info={prod.info}
              cost={prod.cost}
              count={prod.count}
              item={prod}
              addToCartHandler={addToCartHandler}
              getCountForItem={getCountForItem}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default TopSellings
