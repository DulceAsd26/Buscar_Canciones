import * as UI from './interfaz.js';

class API {
    constructor(artista, canción) {
        this.artista = artista;
        this.canción = cancion;
    }

    consultarAPI(){
        const url = ``;

        fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado =>{
            const {lyrics } = resultado;

            UI.divResultado.textContent = lyrics;
        })
    }
}
export default API;