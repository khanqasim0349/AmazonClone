import React from "react";
import "./Home.css";
import Products from "./Products";
function Home() {
  return (
    <div className="home">
      <img
        src="https://thebestvpn.uk/wp-content/uploads/2022/06/watch-amazon-prime-uk-abroad-1024x480.jpg"
        className="home__image"
      />

      {/* products id,title,ratings,images */}
      <div className="home__row">
        <Products
          id="123"
          title="The lean startup"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"
        />
         <Products
          id="1234"
          title="The best Mixer"
          price={49.99}
          rating={5}
          image="https://shop.bajajelectricals.com/medias/?context=bWFzdGVyfGltYWdlc3wxMDY1NDZ8aW1hZ2UvanBlZ3xoOGUvaGNhLzg4NDM2MTEyMDk3NTh8NDJmMTRkMjk0YjIxMzgwZmM4ZTQ0MjFiMWZhZGJjMWVkM2ZjOWM1ODMyYWFjYTg2ZDIyMWQ4MDE3MGNkMmQ5MA"
        />
      </div>
      <div className="home__row">
        <Products
          id="12345"
          title="Full Cricket Kit"
          price={199.99}
          rating={4}
          image="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-84059765/84059765.jpg"
        />
         <Products
          id="123456"
          title="Iphone 15 Pro Max"
          price={1049.99}
          rating={5}
          image="https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=923,692,x364,y0,safe&width=960"
        />
        <Products
          id="1234567"
          title="Latest Macbook Pro"
          price={1199.99}
          rating={5}
          image="https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.og.jpg?202310101606"
        />
        <Products
          id="12"
          title="Christian Dior | Monogram Long Sleeves Cotton Logo Luxury Shirts "
          price={1099.99}
          rating={5}
          image="https://www.dior.com/couture/ecommerce/media/catalog/product/4/e/1691145805_H_23_4_LOOK_001_E07_GH.jpg"
        />
        <Products
          id="12345678"
          title="The Latest Smart Watch"
          price={99.99}
          rating={5}
          image="https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/w/i/wiwu-sw01-8.jpg.webp"
        />
      </div>
      <div className="home__row">
        <Products
          id="123456789"
          title="Hair LED"
          price={499.99}
          rating={5}
          image="https://www.multynet.com.pk/wp-content/uploads/2022/06/Blog-5.png"
        />
          <Products
          id="123456789"
          title="Hair LED"
          price={499.99}
          rating={5}
          image="https://www.multynet.com.pk/wp-content/uploads/2022/06/Blog-5.png"
        />
             <Products
          id="123456789"
          title="Hair LED"
          price={499.99}
          rating={5}
          image="https://www.multynet.com.pk/wp-content/uploads/2022/06/Blog-5.png"
        />
      </div>
    </div>
  );
}

export default Home;
