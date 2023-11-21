import api from '../services/api';

export class Repository {

    async getAll() {
        const{data} = await api.get('/aliquota/all');
        console.log(data)

        return data;
    }
}


