import axios from "axios";
export const getMoviesDetails = async (condition) => {
    try {
        const response = await axios.get(condition);
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
