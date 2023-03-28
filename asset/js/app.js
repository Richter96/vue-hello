/* Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Buon divertimento e confermate lettura come al solito! :baby-yoda::vue: */

const { createApp } = Vue

createApp({
    data() {
        return {
            titolo: 'TiToLo',
            image: 'https://unsplash.it/300/300?image=',
            objectImg: {
                src: 'https://unsplash.it/300/300?image=',
                class: 'img'
            }


        }
    }
}).mount('#app')