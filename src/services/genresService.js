import http from './httpService'

export function getGenres() {
  return http.get('http://localhost:8088/api/genres')
}


// import http from "./httpService";
// //import {apiUrl} from "../config.json"
// import * as apiUrl from '../config.json'

// export function getGenres(){
//     //return http.get(apiUrl + "/genres");
//     return http.get(`${apiUrl}/genres`) ;
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