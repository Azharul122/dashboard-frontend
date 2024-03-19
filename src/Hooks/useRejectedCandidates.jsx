import { useState, useEffect } from "react";
import axios from "axios";

const useRejectedCandidates = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rejectedCandidates, setRejectedCandidates] = useState([]);

  useEffect(() => {
    const fetchShortlistedCandidates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dashboard-backend-woad.vercel.app/rejected-candidates"
        );
        setRejectedCandidates(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchShortlistedCandidates();

    return () => {};
  }, []);

  return { loading, error, rejectedCandidates };
};

export default useRejectedCandidates;
