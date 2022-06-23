import { FC } from "react";
import Button from "../../Shared/Button/Button";
import s from "./LoadMore.module.scss";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { loadMore } from "../../../store/slices/productsSlice";

const LoadMore: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.wrapper}>
      <Button
        text="LOAD MORE"
        variant="light"
        onClick={() => dispatch(loadMore(9))}
      />
    </div>
  );
};

export default LoadMore;
