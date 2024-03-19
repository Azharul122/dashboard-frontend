
import { useState, useEffect } from "react";
import axios from "axios";

const useCandidates = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:5000/candidates"
                );
                setCandidates(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCandidates();

        return () => { };
    }, []);

    return { loading, error, candidates };
};

export default useCandidates;
