const app = Vue.createApp({
    data(){
        return{
            galaxies: [
                {name: 'Andromeda', img: 'IMG/andromeda.png', messier: '31', isFav: false},
                {name: 'Cigar', img: 'IMG/cigar.png', messier: '82', isFav: false},
                {name: 'Pinwheel', img: 'IMG/pinwheel.png', messier: '101', isFav: false},
                {name: 'Triangulum', img: 'IMG/triangulum.png', messier: '33', isFav: false},
                {name: 'Whirlpool', img: 'IMG/whirlpool.png', messier: '51', isFav: false},
            ]
        }
    },
    methods:{
        changeFav(galaxy){
            galaxy.isFav = !galaxy.isFav
        }
    }
})

app.mount('#app')