import axios from "axios";

import { useState } from "react";

const Related = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  const [error, setError] = useState(false);

  const relate = async (uuid, category) => {
    try {
      const data = await axios.post(
        "http://localhost:4000/api/related",
        {
          uuid: uuid,
          category: category,
        },
        {
          Headers: {
            "Content-type": "application/json",
          },
        }
      );

      setData(data.data);

      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  return { relate, loading, data, error };
};

export default Related;
