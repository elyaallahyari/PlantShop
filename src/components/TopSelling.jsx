import '../assets/styles/TopSelling.css'
import topSellingIcon from '../assets/images/topSelling.png'
import productIcon1 from '../assets/images/plant1.png'
import productIcon2 from '../assets/images/plant2.png'
import productIcon3 from '../assets/images/plant3.png'
import productIcon4 from '../assets/images/plant4.png'
import productIcon5 from '../assets/images/plant5.png'
import productIcon6 from '../assets/images/plant6.png'

function TopSelling() {
  return (
    <>
      <div className="topSelling">
        <div className="topSelling__title">
          <img src={topSellingIcon} alt="topSellingIcon" id="plants" />
        </div>
        <div className="topSelling__products">
            <img src={productIcon1} />
            <img src={productIcon2} />
            <img src={productIcon3} />
            <img src={productIcon4} />
            <img src={productIcon5} />
            <img src={productIcon6} />

        </div>
      </div>
    </>
  )
}
export default TopSelling
