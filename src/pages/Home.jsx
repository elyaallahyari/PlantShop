import React, { useState } from 'react'
import '../assets/styles/Home.css'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import TopSellings from '../sections/TopSellings'
import CustomerReview from '../sections/CustomerReviews'
import Footer from '../components/Footer'
import CartSideBar from '../components/CartSideBar'

function Home() {
  let [isCartOpen, setIsCartOpen] = useState(false)
  let [cartList, setCartList] = useState([])

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }
  const badgeHandler = () => {
    return cartList.reduce((total, item) => total + item.count, 0)
  }

  const addToCartHandler = (item) => {
    let cartListState = [...cartList]
    // let cartIndex = cartList.indexOf(item)
    let cartIndex = cartListState.findIndex((p) => p.id === item.id)
    // console.log(cartIndex)
    // console.log(item)
    if (cartIndex > -1) {
      cartListState[cartIndex].count += 1
      setCartList(cartListState)
    } else {
      setCartList([...cartList, { ...item, count: 1 }])
    }
  }

  const getCountForItem = (id) => {
    const item = cartList.find((p) => p.id === id)
    return item ? item.count : 0
  }

  const handleDeleteItem = (index) => {
    // setCartList(cartList.filter((item) => item.id !== id))
    let indexList = [...cartList]
    indexList.splice(index, 1)
    setCartList(indexList)
  }
  // const handleIncreaseItem = (id) => {
  //   setCartList((prev) =>
  //     prev.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item))
  //   )
  // }

  // const handleDecreaseItem = (id) => {
  //   setCartList((prev) =>
  //     prev
  //       .map((item) => {
  //         if (item.id === id) {
  //           const newCount = item.count - 1
  //           if (newCount <= 0) return null // حذف کن اگه رسید به صفر
  //           return { ...item, count: newCount }
  //         }
  //         return item
  //       })
  //       .filter(Boolean)
  //   )
  // }
  const handleCounter = (item, num) => {
    let cartListState = [...cartList]
    let cartIndex = cartListState.findIndex((p) => p.id === item.id)

    if (cartIndex > -1) {
      if (cartListState[cartIndex].count + num <= 0) {
        cartListState.splice(cartIndex, 1)
      } else {
        cartListState[cartIndex].count += num
      }
      setCartList(cartListState)
    }
  }

  return (
    <>
      <div className="home">
        <Header onCartClick={toggleCart} size={badgeHandler()} />
        {isCartOpen ? (
          <CartSideBar list={cartList} onDelete={handleDeleteItem} handleCounter={handleCounter} />
        ) : (
          <span></span>
        )}
        <Hero />
        <TopSellings addToCartHandler={addToCartHandler} getCountForItem={getCountForItem} />
        <CustomerReview />
        <Footer />
      </div>
    </>
  )
}
export default Home
