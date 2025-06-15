import '../assets/styles/Home.css'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import TopSellings from '../sections/TopSellings'
import CustomerReview from '../sections/CustomerReviews'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Hero />
        <TopSellings />
        <CustomerReview />
        <Footer />
      </div>
    </>
  )
}
export default Home
