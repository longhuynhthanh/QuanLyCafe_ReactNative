import callAPI from '../utils/callAPI';

export const FetchAll = () => {
    return callAPI('GET', 'users', null)
    .then(res => {
        return res.data;
    })
}
export const Regist = (user) => {
    return callAPI('POST', 'users', user);
}