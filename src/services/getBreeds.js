const url="https://dog.ceo/api/breeds/list/all";

export default function getBreeds(){

    return fetch(url)
        .then( response => response.json())
        .then( response => {
            
            //const breeds = [];
            const message = response.message;
            //Object.keys(message).map( breed => breeds.push(breed))
            //console.log(breeds)
            return message;
        })

}
