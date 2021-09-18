import axios from "axios";
export const getMoviesDetails = async (condition) => {
    try {
        const response = await axios.get(
            `https://yts.mx/api/v2/list_movies.json/${condition}`
        );
        const data = await response.data;
        return {
            data: data,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error.message || "Oppps, Movies Details Not Found.",
        };
    }
};
