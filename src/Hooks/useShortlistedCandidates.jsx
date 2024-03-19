import { useState, useEffect } from "react";
import axios from "axios";

const useShortlistedCandidates = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shortlistedCandidates, setSortListedCandidates] = useState([]);

  useEffect(() => {
    const fetchShortlistedCandidates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dashboard-backend-woad.vercel.app/sortlisted-candidates"
        );
        setSortListedCandidates(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchShortlistedCandidates();

    return () => {};
  }, []);

  return { loading, error, shortlistedCandidates };
};

export default useShortlistedCandidates;
