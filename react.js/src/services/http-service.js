import "whatwg-fetch";

class HttpService {

    getUsers = () => {
        fetch('http://localhost:8080/users')
            .then(response => {
                console.log(response.json());
            })
    }

}

export default HttpService;