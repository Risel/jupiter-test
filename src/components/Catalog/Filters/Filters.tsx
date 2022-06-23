import { FC, useEffect } from "react";
import s from "./Filters.module.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import { IFilter } from "../../../types/filter";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
  deleteProducts,
  filterProducts,
} from "../../../store/slices/productsSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import cn from "classnames";

const filterItems: IFilter[] = [
  { id: 1, text: "Show All" },
  { id: 2, text: "Design" },
  { id: 3, text: "Branding" },
  { id: 4, text: "Illustration" },
  { id: 5, text: "Motion" },
];

const Filters: FC = () => {
  const match = useMediaQuery("(max-width: 992px)");
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.product.currentFilter);

  // Для выставления дефолтного фильтра
  useEffect(() => {
    dispatch(filterProducts("Show All"));
  }, []);

  return (
    <>
      {!match ? (
        <div className={s.wrapper}>
          {filterItems.map((filter) => (
            <button
              onClick={() => dispatch(filterProducts(filter.text))}
              key={filter.id}
              className={cn(
                s.button,
                currentFilter === filter.text && s.active
              )}
            >
              {filter.text}
            </button>
          ))}
        </div>
      ) : (
        <Dropdown data={filterItems} />
      )}
    </>
  );
};

export default Filters;
