
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Kontakt from './components/Contact';
import Products from './components/Products';
import Upit from './components/Query';
import 'bootstrap/dist/css/bootstrap.min.css';
import SviUpiti from './components/AllQueries';


function App() {
  
  const [cartNum, setCartNum] = useState(0);
  const [proizvodi] = useState([
    {
      id: 1,
      naziv: "LINA GOLD RING",
      proizvod: "Ring",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/anillo-lina-oro.jpg?v=1671448846&width=713",
      opis:  "The LINA GOLD ring is a very attractive and striking ring. Its central opal stone is always the focus of all attention.The design of the LINA GOLD is made up of a fine ring and a half-moon on one side and a round Opal stone on the other side. It is not one of our adjustable rings, but it is a bit flexible - just be careful not to lose the space between the crescent and the stone, that space makes the ring prettier.The LINA GOLD ring matches any other kind of ring or accessory, it is a very versatile jewel.",
      cena:4400,
      kolicina: 1,

    },
    {
      id: 2,
      naziv: "ARAVINDA GOLD EARRINGS",
      proizvod: "Earrings",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/piercing-aftan-oro.jpg?v=1668684908&width=713",
      opis:  "The ARAVINDA GOLD (16mm) earrings will make you fall in love. These hoops are very light and medium-sized. They are made of 925 Sterling Silver and plated with 22-carat gold.The ARAVINDA GOLD (16mm) stand out for their special and unique design that reminds of a mandala. They are full of little details. The design is a composition of circles and little golden balls.This piece leaves no one indifferent. Combine your ARAVINDA GOLD (16mm) with other smaller earrings. You'll love the combo!",
      cena:4000,
      kolicina: 0

    },
    {
      id: 3,
      naziv: "DEVRAJ GOLD EARRINGS",
      proizvod: "Earrings",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/pendientes-jivanta-oro.jpg?v=1668693146&width=713",
      opis: "The DEVRAJ GOLD earrings are beautiful moon-shaped hoops.The DEVRAJ are made of gold pleated 925 Sterling Silver. Its design stands out for the silhouette of the moon, giving the hoop an original and elegant touch.If you liked these earrings but you are more into silver, you are in luck! We also have silver ones. And if you love this style of earrings, you will adore the AMMAR GOLD and the VRINDA GOLD earrings in the shape of a star and a heart.",
      cena:5000,
      kolicina: 0
    },
    {
      id: 4,
      naziv: "AMMAR GOLD",
      proizvod: "Earrings",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/pendientes-halakon_705da39a-c97e-421b-b5f8-701c6c1a2dad.jpg?v=1668684208&width=713",
      opis:  "The AMMAR GOLD hoop earrings are made of 925 Sterling Silver and 22-carat gold plated.The AMMAR GOLD have a very eye-catching design, defined by the silhouette of a star. They are ideal for special nights and are perfect when combed with smaller earrings.If you like these hoops, you will love the DEVRAJ GOLD and VRINDA GOLD earrings in the shape of the moon and a heart.",
      cena:3000,
      kolicina: 0,

    },
    {
      id: 5,
      naziv: "PENDIENTES DAHANA",
      proizvod: "Ring",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/anillo-ausat-oro_851dce4f-7f9d-48c6-a813-3b527c505419.jpg?v=1669716897&width=713",
      opis: "DAHANA is handmade in 925 Sterling Silver22K Gold Plated. It is a very versatile piece of jewellery, perfect for combining with thicker and bolder rings with gemstones. It is adjustable and that will allow you to put it on the finger you like the most!A must-have among all our midi rings! Gorgeous!",
      cena:4500,
      kolicina: 0,

    },
    {
      id: 6,
      naziv: "HEMATA GOLD",
      proizvod: "Earrings",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/pendientes-garaj_f0e3fd4b-81a6-4eaf-adb0-00f1f1cd7df0.jpg?v=1668683153&width=713",
      opis: "The HEMLATA GOLD earrings are 30mm diameter earrings of ethnic style. They are made of 925 Sterling Silver and 22 carat gold plated. They look amazing!The design of the HEMLATA GOLD is inspired by the shape of a flower, adding a boho touch.The ARAVINDA GOLD have the same style, so you will surely love them too! ",
      cena:4000,
      kolicina: 0,
    },
    {
      id: 7,
      naziv: "UDAY GOLD",
      proizvod: "Necklase",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/collar-kamini-oro.jpg?v=1674198891&width=713",
      opis: "The UDAY GOLD is one of our favorite necklaces. It has a very simple and beautiful style, that goes with anything and always looks good.The design of the UDAY GOLD is made up of a fine chain with little balls of 2,5 mm diameter. All of them with the same separation between.We love the gold UDAY necklace. It is the perfect jewel to create really nice combinations. Once you wear it, you can't live without it!",
      cena:1200,
      kolicina: 0
    },
    {
      id: 8,
      naziv: "SARANI GOLD",
      proizvod: "Ring",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/anillo-swati-oro_098f6aa6-cea4-4d64-a4c8-21146c92b293.jpg?v=1672406370&width=713",
      opis: "The SARANI GOLD ring is an open knuckle ring, which can be nicely adapted to your finger. It is ideal to combine this ring with other rings, to create a attractive combos.The SARANI GOLD is designed with dots in the middle of the ring and fine smooth lines at both ends. Around the dots, we have darker shadows creating a contrast and a feeling of depth.The ANK ring will give a different touch to your outfits. It is a very original 925 Sterling Silver ring, which has been handmade with love for you.",
      cena:3000,
      kolicina: 0
    },
    {
      id: 9,
      naziv: "ELESH GOLD BRACELET",
      proizvod:"Bracelet",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/pulsera-elesh-oro.jpg?v=1671800650&width=713",
      opis: "The ELESH GOLD is a very fine and versatile bracelet. This gold vermeil bracelet is handmade of 925 Sterling Silver and 22-carat gold-plated.. Its style is wonderful!The design of the ELESH GOLD is very simple. It is made up of small gold balls, separated from each other by the same distance. Its elemental style combines very well with other bracelets.If you like the ELESH GOLD, you'll love its matching necklace: the UDAY necklace. Both designs are very trendy and they look great together.",
      cena:3900,
      kolicina: 0
    },
    {
      id: 10,
      naziv: "AFTAN GOLD",
      proizvod: "Earrings",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/pendientes-sansa-oro.jpg?v=1668756216&width=713",
      opis: "The AFTAN GOLD earrings with a diameter of 8mm are fine plain gold vermeil earrings, with a small ball on one side of the hoop.The AFTAN GOLD piercings are perfect for the helix and for your nose piercing. These earrings go great with other accessories and gold jewelry pieces, all combinations will look amazing with them.The AFTAN GOLD are quite simple but the ball detail makes it really special. You'll fall in lvoe!",
      cena:1900,
      kolicina: 0
    },
    {
      id: 11,
      naziv: "FIROZA EARRINGS",
      proizvod: "Earrings",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/pendientes-amshu-oro.jpg?v=1669012757&width=713",
      opis: "The FIROZA earrings stand out for their gorgeous green-blue Turquoise stone. They are really beautiful and eye-catching.The FIROZA have a rounded shape. The Turquoise stone is the highlight of the earrings, and it is framed by a fine 925 Sterling Silver line.The FIROZA earrings have an intense color that make them very special. They won't leave anyone indifferent. These earrings will look so good on you!",
      cena:5000,
      kolicina: 0
    },
    {
      id: 12,
      naziv: "BAHUT GOLD",
      prozivod: "Necklase",
      slika: "https://cdn.shopify.com/s/files/1/2592/6488/products/collar-chirayu-oro_ba39bdf7-4a26-4231-a30f-dbfdb407642b.jpg?v=1671786305&width=713",
      opis: "The BAHUT GOLD necklace is a simple and essential, but very striking choker. It fits snugly around the neck and adapts very well.The design of the BAHUT GOLD is made up of a wide chain with a flat or crushed effect. It has a very intense and striking golden color, it looks beautiful!The BAHUT GOLD can be worn alone or together with other longer necklaces. Get inspired by our combos to find your favorite set.",
      cena:6000,
      kolicina: 0
    },

    
    
  ]);
  
  const [searchProduct, setsearchProduct] = useState(proizvodi[0]);
  //proizvodiUKorpi
  const [cartProducts, setCartProducts] = useState([]);
  //ukupnaCenaProizvoda
  const [totalPrice, settotalPrice] = useState(0);

  function osveziUpite(){
    let noviProizvodi=proizvodi.filter((prod)=>prod.kolicina>0);
    setCartProducts(noviProizvodi);
  }
  function detaljnije(id) {
    proizvodi.forEach((prod) => {
      if (prod.id === id) {
        setsearchProduct(prod);
      }

    });

  }
  function posaljiUpit(id, kolicina) {

    let num = parseInt(kolicina);
    proizvodi.forEach((prod) => {
      if (prod.id === id) {
        if (prod.kolicina === 0) setCartNum(cartNum + 1);
        prod.kolicina = prod.kolicina + num;
        let price=totalPrice+prod.cena*num;
        settotalPrice(price);
        console.log(totalPrice);
      }

    }
    );
    osveziUpite();
  }
  function otkaziUpit(id, kolicina) {
    setCartNum(cartNum - 1);
    let num = parseInt(kolicina);
    proizvodi.forEach((prod) => {
      if (prod.id === id) {
        prod.kolicina = prod.kolicina - num;
        let price=totalPrice-prod.cena*num;
        settotalPrice(price);
        console.log(totalPrice);
      }

    }
    );
    osveziUpite();
  }

  function potvrdiPorudzbinu(){
    document.getElementById("uspešno").style.visibility="visible";
    setTimeout(
      function () {
      document.getElementById("uspešno").style.visibility="hidden";
      setCartNum(0);
      proizvodi.forEach((prod)=> prod.kolicina=0);
      settotalPrice(0);
      setCartProducts([]);},3000);
    }
  
  return (
  <BrowserRouter>
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Main />}
          
        />
         <Route
          path="/proizvodi/:id"
          element={<Upit product={searchProduct} products={proizvodi} detaljnije={detaljnije} posaljiUpit={posaljiUpit} />}
        />
         <Route
          path="/proizvodi"
          element={<Products products={proizvodi} detaljnije={detaljnije} />}
        />
        <Route
          path="/upiti"
          element={ <SviUpiti upiti={cartProducts} otkaziUpit={otkaziUpit} totalPrice={totalPrice} potvrdiPorudzbinu={potvrdiPorudzbinu}/>}
        />
        <Route
        path="/kontakt" element={<Kontakt />}
        />
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
