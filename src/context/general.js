import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";

// reducer function;

import { Generalreducer } from "../reducers/generalreducer";

export const Contextgeneral = createContext();

const Generalprovider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [general, dispatch] = useReducer(Generalreducer, [
    { user: null, all: null },
  ]);

  const tog = () => {
    setToggle(!toggle);
  };

  return (
    <Contextgeneral.Provider value={{ general, dispatch, tog }}>
      {props.children}
    </Contextgeneral.Provider>
  );
};

export default Generalprovider;
