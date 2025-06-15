import '../assets/styles/Footer.css'
import logoIcon from '../assets/images/logo.png'
import fillIcon from '../assets/images/enterEmail.png'

function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__column1">
          <a href="#">
            <img src={logoIcon} />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer__column2">
          <p>Quick Links</p>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#plants">Products</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#footer">Footer</a>
            </li>
          </ul>
        </div>
        <div className="footer__column3">
          <p>For Every Update.</p>
          <img src={fillIcon} />
        </div>
      </footer>
    </>
  )
}
export default Footer
