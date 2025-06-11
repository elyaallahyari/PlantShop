import '../assets/styles/CustomerReview.css'
import titleIcon from '../assets/images/CustomerReview.png'
import reviewIcon1 from '../assets/images/review1.png'
import reviewIcon2 from '../assets/images/review2.png'
import reviewIcon3 from '../assets/images/review3.png'

function CustomerReview(){
    return(
        <>
        <div className="CustomerReview" id='reviews'>
            <div className="CustomerReview__title">
                <img src={titleIcon}/>
            </div>
            <div className="CustomerReview__items">
                <img src={reviewIcon1}/>
                <img src={reviewIcon2}/>
                <img src={reviewIcon3}/>


            </div>
        </div>
        </>
    )
}
export default CustomerReview