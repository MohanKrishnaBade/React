import axios from "axios";

class HttpService {

    getUsers = () => {
        return new Promise((resolve, reject) => {
            const url = 'http://127.0.0.1:8000/roles/6';
            axios.get(url).then(response => console.log(response));
        });
    }
}

export default HttpService;