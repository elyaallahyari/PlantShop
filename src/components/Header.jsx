import '../assets/styles/Header.css'
import logoIcon from '../assets/images/logo.png'
import searchIcon from '../assets/images/search.svg'
import shopIcon from '../assets/images/shop.svg'
import menuIcon from '../assets/images/lines.svg'

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <a href="#">
            <img src={logoIcon} alt="logo" />
          </a>
        </div>
        <div className="header__menu">
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
        <div className="header__buttons">
          <img src={searchIcon} alt="search icon" />
          <img src={shopIcon} alt="shop icon" />
          <img src={menuIcon} alt="menu icon" />
        </div>
      </header>
    </>
  )
}
export default Header
