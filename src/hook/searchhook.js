import axios from "axios";

import { useState } from "react";

const Searchhook = () => {
  const [loading, setLoading] = useState(false);

  const [egg, setEgg] = useState(false);

  const [searchdate, setSearchdate] = useState({ data: [] });

  const searchz = async (param) => {
    if (param === "") {
      setSearchdate({ data: [] });
    } else {
      try {
        setLoading(true);
        const data = await axios.get(
          `http://localhost:4000/api/searchz/${param}`
        );

        if (data.data.data.length < 1) {
          throw new Error("search not found");
        }

        console.log(data.data.data);
        setSearchdate(data.data);
        setLoading(false);
        setEgg(false);
      } catch (err) {
        setEgg(true);
        setLoading(false);
      }
    }
  };

  return { searchz, loading, egg, searchdate };
};

export default Searchhook;
