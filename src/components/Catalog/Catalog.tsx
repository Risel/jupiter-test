import { FC, useEffect } from "react";
import Container from "../Shared/Container/Container";
import s from "./Catalog.module.scss";
import Filters from "./Filters/Filters";
import ProductList from "./ProductList/ProductList";
import LoadMore from "./LoadMore/LoadMore";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteProducts } from "../../store/slices/productsSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import useMediaQuery from "../../hooks/useMediaQuery";

const Catalog: FC = () => {
  const delKeyPress = useKeyPress("Delete");
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.product.showItems);
  const match = useMediaQuery("(max-width: 992px)");

  const filteredProducts = useAppSelector(
    (state) => state.product.filteredProducts
  );

  useEffect(() => {
    if (delKeyPress && !match) {
      dispatch(deleteProducts());
    }
  }, [delKeyPress]);

  return (
    <section className={s.section}>
      <Container>
        <Filters />
        <ProductList products={filteredProducts.slice(0, limit)} />
        {filteredProducts.length > limit ? <LoadMore /> : null}
      </Container>
    </section>
  );
};

export default Catalog;
