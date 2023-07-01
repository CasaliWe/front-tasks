import axios from "axios"


//PEGAR DADOS
export const pegarDados = async (rota) => {
    try {
        const response = await axios.get(`http://localhost:3000${rota}`);
        return response.data;
    } catch (error) {
        return error
    }
};



//ENVIAR DADOS COM ARQUIVO
export const enviarDadosArquivo = async (rota, dados) => {
    try {
        const response = await axios.post(`http://localhost:3000${rota}`, dados, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
      return error;
    }
};

