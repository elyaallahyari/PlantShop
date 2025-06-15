import '../assets/styles/TopSelling.css'
import topSellingIcon from '../assets/images/topSelling.png'
import productBackground from '../assets/images/plantBac.svg'
function TopSelling() {
  return (
    <>
      <div className="topSelling">
        <div className="topSelling__title">
          <img src={topSellingIcon} alt="topSellingIcon" id="plants" />
        </div>
        <div className="topSelling__products">
            <img src={productBackground} />
            <img src={productBackground} />
            <img src={productBackground} />
            <img src={productBackground} />
            <img src={productBackground} />
            <img src={productBackground} />

        </div>
      </div>
    </>
  )
}
export default TopSelling
