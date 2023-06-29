import axios from "axios"


//PEGAR DADOS
export const fetchUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/');
        return response.data;
    } catch (error) {
        return error
    }
};

