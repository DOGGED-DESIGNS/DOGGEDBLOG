import axios from "axios";

import { useState } from "react";

const Onlycat = () => {
  const [draw, setDraw] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const Add = async () => {
    try {
      const data = await axios.get("http://localhost:4000/api/onlycat", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Type": "application/json",
        },
      });
      setDraw(data.data);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  return { Add, draw, loading, error };
};

export default Onlycat;
