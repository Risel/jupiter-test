import { FC } from "react";
import { IProduct } from "../../../types/product";
import s from "./ProductList.module.scss";
import ProductItem from "./ProductItem/ProductItem";

interface ProductsListProps {
  products: IProduct[];
}

const ProductList: FC<ProductsListProps> = ({ products }) => {
  return (
    <>
      <div className={s.wrapper}>
        {products.map((product) => (
          <ProductItem key={product.title} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
