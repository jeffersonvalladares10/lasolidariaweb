import axios from "axios";
const BASE_URL = "http://localhost:3002";

export const createOrg = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/organizations`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;

    } catch (error) {
        console.error('Error al realizar la petición:', error);
    }
};