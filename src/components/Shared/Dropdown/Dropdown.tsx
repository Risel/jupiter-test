import { FC, useState } from "react";
import { IFilter } from "../../../types/filter";
import s from "./Dropdown.module.scss";
import cn from "classnames";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { filterProducts } from "../../../store/slices/productsSlice";

interface DropdownProps {
  data: IFilter[];
}

const Dropdown: FC<DropdownProps> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [items,setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState<any>(items[0]);

  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClickOnItem = (id: number, text: string) => {
    const selected = items.find((item) => item.id === id);
    setSelectedItem(selected);
    dispatch(filterProducts(text));
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={cn(s.dropdown, isOpen && s.open)}>
      <div className={s.header} onClick={toggleDropdown}>
        {selectedItem.text}
      </div>
      {
        isOpen
          ?
          (
          <div className={s.body}>
            {items.map((item) => (
              <div
                key={item.id}
                className={s.item}
                onClick={(e) => handleClickOnItem(item.id, item.text)}
              >
                {item.text}
              </div>
            ))}
          </div>
      ) :
        null
      }
    </div>
  );
};

export default Dropdown;
