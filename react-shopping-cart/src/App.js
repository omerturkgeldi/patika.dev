import React, {  useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

function App() {

    const [cart, setCart] = useState([
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
      ]);
    
      const [itemCount, setItemCount] = useState(0);

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const newCart = [...cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = newCart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    newCart[index] = { ...newCart[index] };
    newCart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const newItemCount = getItemCount(newCart);
    // state'i güncelle
    setCart(newCart);
    setItemCount(newItemCount);
  };

  const handleDecrement = (product) => {
    const newCart = [...this.state.cart];
    const index = newCart.indexOf(product);
    newCart[index] = { ...newCart[index] };
    newCart[index].value--;
    const newItemCount = this.getItemCount(newCart);
    setCart(newCart);
    setItemCount(newItemCount);
};

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };



    return (
      <div className="App">
        <Navbar totalItems={itemCount} />
        <ProductsGrid
          products={products}
          cart={cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
}

export default App;
