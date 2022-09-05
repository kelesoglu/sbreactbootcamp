import jwtDecode from "jwt-decode";
import http from "./httpService";
//import {apiUrl} from "../config.json"

const apiEndpoint = "http://localhost:8088/api/auth";
//const apiEndpoint = {apiUrl} +"/auth";
//const apiEndpoint = apiUrl + "/auth";
//const apiEndpoint = `${apiUrl}/auth`;

const tokenKey ="token";
http.setJwt(getJwt());

export async function login(email,password){
    const {data: jwt} = await http.post(apiEndpoint,{email,password});
     localStorage.setItem(tokenKey,jwt);
}
export async function registerService(email, password) {
    return await http.post(apiEndpoint + '/register', { email, password })
  }

export  function loginWithJwt(jwt){
     localStorage.setItem(tokenKey,jwt);
}

export async function logout(){
     localStorage.removeItem(tokenKey);
}

export  function getCurrentUser(){
    try {
        const jwt =localStorage.getItem(tokenKey);
        return jwtDecode(jwt)
    } catch (ex) {
        return null;
    }
}

function getJwt(){
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
};

// function authorUrl(id){
//     return `${apiEndpoint}/${id}`
// }

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