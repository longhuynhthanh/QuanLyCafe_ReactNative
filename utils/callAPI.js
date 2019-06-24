import {URL} from '../Consts/Home';
import axios from 'axios';
const callAPI = async(method, endpoint, data) => {
    return await axios({
        method, 
        url: `${URL}${endpoint}`,
        data
    }).catch(err => console.log(err));
}
export default callAPI;

