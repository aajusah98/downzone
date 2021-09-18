import { useEffect, useState } from "react";
import { getMoviesDetails } from "./api-service";

const useMoviesDetails = (condition) => {
    const [loading, setLoading] = useState(false);
    const [moviesDetail, setUserDetail] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMoviesDetail = async () => {
            setLoading(true);
            const { error, data } = await getMoviesDetails(condition);
            setLoading(false);

            if (error) {
                return setError(error);
            }

            return setUserDetail(data);
        };

        fetchMoviesDetail();
    }, []);

    return { loading, moviesDetail, error };
};

export default useMoviesDetails;
