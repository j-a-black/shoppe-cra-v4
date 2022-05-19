import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;

/*
Attributes

<a href='https://pngtree.com/so/straight'>straight png from pngtree.com/</a>
<a href="https://storyset.com/worker">Worker illustrations by Storyset</a>

*/
