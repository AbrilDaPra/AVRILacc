import data from "../data/data.json";

export const requestData = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const requestItemById = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "The product was not found!"
            })
        }

    })
}