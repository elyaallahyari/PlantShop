import '../assets/styles/Home.css'
import Header from "../components/Header"
import Hero from '../sections/Hero'
import TopSelling from '../components/TopSelling'
import CustomerReview from '../components/CustomerReview'
import Footer from '../components/Footer'
function Home(){
    return(
        <>
        <div className="home">
        <Header/>
        <Hero/>
        <TopSelling/>
        <CustomerReview/>
        <Footer/>
        </div>
        </>
    )
}
export default Home