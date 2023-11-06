import './App.css'
import Cart from "./components/Cart"

function App() {
  const URL = "https://github.com/serpensmaru/hw5_composit.git"
  
  const cart1 = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the\nbulk of the card's content.",
    url: URL,
    img: "https://static.tildacdn.com/tild6638-6562-4464-b862-646261613836/photo.jpg"

  },
  cart2 = {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    url: URL
  }
  return (
    <>
      <Cart
        title={cart1.title}
        text={cart1.text}
        url={cart1.url}>
      <img
          alt={""}
          src={cart1.img}
          className="card-img-top"/>
      </Cart>
      <Cart
        title={cart2.title}
        text={cart2.text}
        url={cart2.url}/>
    </>
  )
}

export default App
