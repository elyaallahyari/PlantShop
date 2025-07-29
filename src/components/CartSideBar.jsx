// import React, {useState} from 'react'
import '../assets/styles/CartSideBar.css'
import trashIcon from '../assets/images/trash-solid.svg'

function CartSideBar({ list, onDelete, handleCounter }) {
  return (
    <>
      <div className="cartSideBar">
        {list.length === 0 ? (
          <h2>Select your favorite..</h2>
        ) : (
          list.map((item, index) => (
            <div key={index} className="cartSideBar__item glass-card">
              <img src={item.img} style={{ width: '70px' }} />
              <h4>{item.name}</h4>
              <p>price: {item.cost}$</p>
              <div className="cartSideBar__counter">
                <button onClick={() => handleCounter(item, -1)}>-</button>
                <span style={{ border: '1px solid #8080808f', padding: ' 1px 8px' }}>
                  {item.count}
                </span>
                <button onClick={() => handleCounter(item, 1)}>+</button>
              </div>
              <span>Total: {item.cost * item.count} $</span>
              <img
                src={trashIcon}
                className="cartSideBar__deleteItem"
                onClick={() => onDelete(index)}
              />
            </div>
          ))
        )}
      </div>
    </>
  )
}
export default CartSideBar
