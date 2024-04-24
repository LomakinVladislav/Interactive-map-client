import store from "./store";

export async function fetchPost(url, data) {
    let headers = {
        'Content-Type': 'application/json'    
    }
    return await fetch(`${store.state.api}/${url}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
}

export async function fetchGet(url) {
    const response = await fetch(`${store.state.api}/${url}`);
    return await response.json();
}

export function prepareData(data) {
    return JSON.stringify(data);
}

export default {fetchPost, prepareData};