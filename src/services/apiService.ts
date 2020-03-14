import axios from 'axios'

export default class ApiService {

    __baseURL: string = 'https://swapi.co/api'

    getResource = async (url: string) => {
        try {
            const data = await axios.get(`${this.__baseURL}${url}`)
            return data
        } catch(error) {
            console.log(error)
        }
    }

    getAllPeaple = async () => {
        const data = await this.getResource('/people/')
        return data?.data.results
    }

    getPerson = async(id: number) => {
        const data = await this.getResource(`/people/${id}`)
        return await data?.data
    }

    getAllPLanets = async() => {
        const data = await this.getResource('/planets/')
        return data?.data.results
    }

    getPlanet = async(id: number) => {
        const data = await this.getResource(`/planets/${id}`)
        return await data?.data
    }
}   