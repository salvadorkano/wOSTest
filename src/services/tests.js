import enviroment from '../enviroment';
import axios from 'axios';

export default class TestServices {

    static async users() {
        let url = `${enviroment.ENDPOINT}users`
        let options = {
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
        let response = await axios(options);
        return response.data
    }

    static async albums() {
        let url = `${enviroment.ENDPOINT}photos`
        let options = {
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        };
        let response = await axios(options);
        return response.data
    }
}