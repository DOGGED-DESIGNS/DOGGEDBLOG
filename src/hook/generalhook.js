import { Contextgeneral } from "../context/general";
import { useContext } from "react";

const Generalhook = () => {
  const { dispatch, general, tog } = useContext(Contextgeneral);
  return { general, dispatch, tog };
};

export default Generalhook;
