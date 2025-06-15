import '../assets/styles/Hero.css'
import listenIcon from '../assets/images/LiveDemo.svg'

function Hero() {
  return (
    <>
      <div className="hero">
        <h1>Breath Natureal </h1>
        <span>
          Lorem ipsum ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labor.
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet elit, sed do
          eiusmod tempor incididunt.
        </span>
        <span>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua Lorem ipsum dolor sit amet.
        </span>
        <div className="hero__buttons">
          <button>Explore</button>
          <img src={listenIcon} alt="listen live" />
        </div>
      </div>
    </>
  )
}
export default Hero
