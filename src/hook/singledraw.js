import axios from "axios";

import { useEffect, useState } from "react";

const Singledraw = () => {
  const [data, setData] = useState();

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const singleonly = async (singleid) => {
    try {
      const data = await axios.get(
        `http://localhost:4000/api/single/${singleid}`
      );

      setData(data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return { data, singleonly, loading, error };
};

export default Singledraw;
