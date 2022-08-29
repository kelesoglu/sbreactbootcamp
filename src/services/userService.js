import http from "./httpService";
import * as apiUrl from '../config.json'

const apiEndpoint = apiUrl +"/users";
//const apiEndpoint = `${apiUrl}/users`;
export  function register (user){
    return http.post(apiEndpoint,{
        email: user.email,
        password: user.password,
        name:user.name
    })
}

// export function getAuthors(){
//     return http.get(apiEndpoint);
// }

// export function getAuthor(authorId){
//     return http.get(authorUrl(authorId));
// }

// export function saveAuthor(author){
//     if(author.id){
//         const body = {...author};
//         delete body.id;

//         return http.put(authorUrl(author.id),body);
//     }

//     return http.post(apiEndpoint, author);
// }
// export function deleteAuthor(authorId){
//     return http.delete(authorUrl(authorId));
// }