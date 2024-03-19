import { useState, useEffect } from "react";
import axios from "axios";

const useCandidatesByGender = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [femaleCandidates, setFemaleCandidates] = useState([]);
    const [maleCandidates, setMaleCandidates] = useState([]);

    useEffect(() => {
        const fetchMaleCandidates = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://dashboard-backend-woad.vercel.app/gender-filterd-candidates/male"
                );
                setMaleCandidates(response.data?.totalGenderFilteredCandidates);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchMaleCandidates();

        return () => { };
    }, []);

    useEffect(() => {
        const fetchFemaleCandidates = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://dashboard-backend-woad.vercel.app/gender-filterd-candidates/female"
                );
                setFemaleCandidates(response.data?.totalGenderFilteredCandidates);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchFemaleCandidates();

        return () => { };
    }, []);

    return { loading, error, maleCandidates, femaleCandidates };
};

export default useCandidatesByGender;
