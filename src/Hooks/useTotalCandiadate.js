
import { useState, useEffect } from "react";
import axios from "axios";

const useTotalCandidates = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalCandidates, setTotalCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:5000/total-candidates"
                );
                setTotalCandidates(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCandidates();

        return () => { };
    }, []);

    return { loading, error, totalCandidates };
};

export default useTotalCandidates;
