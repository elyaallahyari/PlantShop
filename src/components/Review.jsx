import '../assets/styles/Review.css'

function Review(props) {
  let { icon, name, rate, text } = props
  return (
    <>
      <div className="review">
        <div className="review__head">
          <img src={icon} />
          <div className="review__headTitle">
            <p>{name}</p>
            <img src={rate} />
          </div>
        </div>
        <div className="review__text">
          <span>{text}</span>
        </div>
      </div>
    </>
  )
}
export default Review
