import axios from "axios";
import { useState } from "react";

const Drawcat = () => {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [data, setData] = useState(null);

  const cat = async (take) => {
    try {
      const data = await axios.get(
        `http://localhost:4000/api/category/${take}`
      );
      setData(data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  return { cat, loading, error, data };
};

export default Drawcat;
