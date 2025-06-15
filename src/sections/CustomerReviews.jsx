import '../assets/styles/CustomerReview.css'
import titleIcon from '../assets/images/CustomerReview.svg'
import Review from '../components/Review'
import icon1 from '../assets/images/reviewIcon1.svg'
import icon2 from '../assets/images/reviewIcon2.svg'
import icon3 from '../assets/images/reviewIcon3.svg'
import rate from '../assets/images/rate.svg'

function CustomerReview() {

  let reviewList = [
    {
      icon: icon1,
      name: 'Lii thakur',
      rate: rate,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
      icon: icon2,
      name: 'venely k',
      rate: rate,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    },
    {
      icon: icon3,
      name: 'Maxn Raval',
      rate: rate,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
    }
  ]
  return (
    <>
      <div className="CustomerReview" id="reviews">
        <div className="CustomerReview__title">
          <img src={titleIcon} />
        </div>
        <div className="CustomerReview__items">
          {reviewList.map((item, index) => (
            <Review
              key={index}
              icon={item.icon}
              name={item.name}
              rate={item.rate}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default CustomerReview
