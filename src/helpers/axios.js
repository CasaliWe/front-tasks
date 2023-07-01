import axios from "axios"

const baseUrl = 'http://localhost:3000'


//PEGAR DADOS
export const pegarDados = async (rota) => {
    try {
        const response = await axios.get(`${baseUrl}${rota}`);
        return response.data;
    } catch (error) {
        return error
    }
};



//ENVIAR DADOS COM ARQUIVO
export const enviarDadosArquivo = async (rota, dados) => {
    try {
        const response = await axios.post(`${baseUrl}${rota}`, dados, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
      return error;
    }
};



//ENVIAR DADOS JSON
export const enviarDados = async (rota, dados) => {
    try {
        const response = await axios.post(`${baseUrl}${rota}`, dados, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
      return error;
    }
};

