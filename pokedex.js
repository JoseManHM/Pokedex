const app = Vue.createApp({
    data(){
        return{
            message: 'Hola',
            imagenDefault: './assets/imgs/pokeball.png',
            estado: '',
            imagenFront: '',
            nombre: '',
            id: '',
            altura: '',
            hp: '',
            attack: '',
            defense: '',
            specialAtack: '',
            specialDefense: '',
            speed: '',
            peso: '',
            habilidad: '',
            tipos: '',
            hasData: false,
            finded: true
        }
    },
    methods:{
      fetchPokemon(){
        const pokeNameInput = document.getElementById("pokeName");
        let pokeName = pokeNameInput.value;
        pokeName = pokeName.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                this.imagenDefault = "./assets/imgs/pokemon-sad.png";
                this.estado = "No existe un pokemon con ese nombre, verifica";
                this.hasData = false;
                this.finded = false;
            }
            else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                this.imagenDefault = "./assets/imgs/pokeball.png";
                this.estado = "";
                console.log(data);
                this.imagenFront = data.sprites.front_default;
                this.nombre = data.name;
                this.id = data.id;
                this.altura = data.height;
                this.hp = data.stats[0].base_stat;
                this.attack = data.stats[1].base_stat;
                this.defense = data.stats[2].base_stat;
                this.specialAtack = data.stats[3].base_stat;
                this.specialDefense = data.stats[4].base_stat;
                this.speed = data.stats[5].base_stat;
                this.peso = data.weight;
                this.habilidad = data.abilities[0].ability.name;
                this.tipos = data.types;
                this.hasData = true;
                console.log(pokeImg);
            }
        });
      },
    }
}).mount('#vue-container');