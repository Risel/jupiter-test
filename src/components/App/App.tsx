import { FC } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Catalog />
      </main>
    </>
  );
};

export default App;
