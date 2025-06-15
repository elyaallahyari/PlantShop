import '../assets/styles/CustomerReview.css'
import titleIcon from '../assets/images/CustomerReview.png'
import reviewBackground from '../assets/images/newsBac.svg'
function CustomerReview(){
    return(
        <>
        <div className="CustomerReview" id='reviews'>
            <div className="CustomerReview__title">
                <img src={titleIcon}/>
            </div>
            <div className="CustomerReview__items">
                <img src={reviewBackground}/>
                <img src={reviewBackground}/>
                <img src={reviewBackground}/>


            </div>
        </div>
        </>
    )
}
export default CustomerReview