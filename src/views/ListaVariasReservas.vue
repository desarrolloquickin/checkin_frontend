<template>
  <div class="body">
    <!-- HEAD FIJO CON BACKGROUND -->
        <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
            <img :src="this.style.URL_IMAGEN_FONDO" alt="" class="img w-100 h-100 img-auto">
        </div>
        <!-- HEAD FIJO CON BACKGROUND -->

        <!-- FORM -->
        <div class="container-fluid principal mt-start mb-5">
            <div class="row justify-content-center">
                <div class="c-form p-3 p-lg-5 col-11 col-md-7 col-xl-5 position position-z-1" :style="'background-color: ' + this.style.COLOR_FONDO_CUADRO_FORMULARIO + ';'">
                    <div class="c-brand col-6 px-4 mx-auto mb-3 mb-lg-5">
                        <a :href="'/reservas?lang=' + $route.query.lang + '&profile=' + $route.query.profile + '&hotel=' + $route.query.hotel + '&localizator=' + $route.query.localizator + '&fechaentrada=' + $route.query.fechaentrada + '&fechasalida=' + $route.query.fechasalida + '&apellido=' + $route.query.apellido + '&id=' + $route.query.id" class="btn btn-reset btn-block">
                            <img src="https://www.aluahotels.com/uploads/logoshotel/svg/logo-alua-header.svg" alt="" class="img img-w img-auto">
                        </a>
                    </div>
                    <div class="w-100">
                        <div v-for="cliente in customersData.LSReservaHabAWA" v-bind:key="cliente.Reserva">
                            <div class="b-user col-12 mb-3 d-flex flex-wrap align-items-center pr-0" :style="'background-color: ' + style.COLOR_TEXTO_BOTON + ';'">
                                
                                <div>
                                    <p class="text mb-0"><i :style="'color: ' + style.COLOR_ICONO_GRIS + ';'" class="icon fas fa-user-friends mr-2"></i>{{cliente.LSReservaCliente[0].Apellido1}}</p>
                                </div>
                                
                                <div class="actions d-flex ml-auto">
                                    <button @click="$router.push('listausuarios?lang=' + actualLang + '&profile=' + actualProfile + '&hotel=' + customersData.HotelFactura + '&localizator=' + customersData.Localizador + '&fechaentrada=' + $route.query.fechaentrada + '&fechasalida=' + $route.query.fechasalida + '&apellido=' + cliente.LSReservaCliente[0].Apellido1 + '&referencia=' + cliente.Referencia)" class="btn btn-solid p-lg-3" :style="'background-color: ' + style.COLOR_BOTON_EDITAR + ';'"><i :style="'color: ' + style.COLOR_ICONO_GRIS + ';'" class="icon fas fa-angle-right "></i></button>
                                    <!-- <button class="btn btn-solid p-lg-3" :style="'background-color: ' + style.COLOR_BOTON_BORRAR + ';'"><i class="icon far fa-trash-alt icon-color-white"></i></button> -->
                                </div>
                            </div>
                        </div>

                        <!-- <div class="form-group col-12 px-0">
                            <button @click="$router.push('/nuevousuario')" type="button" class="btn btn-solid btn-block text" style="background-color: {COLOR_BOTON_AÑADIRNUEVO}; color: {COLOR_TEXT};">{{textValues.AGREGAR_NUEVO_USUARIO}}</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- FORM -->

    <div class="container-fluid mb-3" v-if="activeProfile.showBanner == 1">
        <div class="row">
            <div class="col-12 py-3" :style="'background-color: ' + this.activeProfile.colorBrand + ';'">
                <h2 class="text title col-12 col-md-6 col-xl-4 mx-md-auto text-center mb-3">
                    <!-- https://www.amresortseu.com/wp-content/themes/adgtravel/img/logo.png --> 
                    <a :href="this.activeProfile.bannerHeader.url" class="btn btn-reset btn-block">
                        <img :src="this.activeProfile.bannerHeader.img" alt="" class="img img-w">
                    </a>
                </h2>
                <div class="wrapper d-flex w-100 flex-wrap justify-content-center">
                    <div class="col-6 col-md-1 mb-3" v-for="element in banners" v-bind:key="element.img" >
                        <a :href="element.url" class="btn btn-reset btn-block">
                            <img :src="element.img" alt="" class="img img-w img-auto" width="50px">
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

        <div class="c-menu-lenguage position-fixed bg p-2 position position-z-1" style="background-color: #ffffff;">
            <i class="icon fas fa-angle-down"></i>
            <ul class="menu list-none mb-0">
                <li id="listEsp" class="item active w-100">
                <a @click="changeLang('es')" :href="'/reservas?lang=es&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ESPAÑOL}}</a>
                </li>
                <li id="listEng" class="item w-100">
                <a @click="changeLang('en')" :href="'/reservas?lang=en&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.INGLES}}</a>
                </li>
                <li id="listDe" class="item w-100">
                <a @click="changeLang('de')" :href="'/reservas?lang=de&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ALEMAN}}</a>
                </li>
                <li id="listFr" class="item w-100">
                <a @click="changeLang('fr')" :href="'/reservas?lang=fr&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.FRANCES}}</a>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
require ("./../static/js/index")
//import json from '../../public/config/lang.json'
// import profilesJson from '../../public/config/profiles.json'

export default {
    name: 'Home',
    data() {
        return {
            json: {},
            activeProfile: {},
            banners: [],
            dataForRequest: {
                hotel: this.$route.query.hotel,
                localizador: this.$route.query.localizator,
                fecha_entrada: this.$route.query.fechaentrada,
                fecha_salida: this.$route.query.fechasalida,
                apellido: this.$route.query.apellido
            },
            customersWithConfirmation: [],
            customersData: {},
            reservaData: {},
            actualProfile: "default",
            actualLang: "es",
            textValues: {},
            profilesJson: {},
            style: {},
            async checkLang() {
                if (this.$route.query.lang === "es") {
                    this.textValues = this.json.es
                    this.actualLang = "es";
                }
                if (this.$route.query.lang === "en") {
                    this.textValues = this.json.en
                    this.actualLang = "en";
                }
                if (this.$route.query.lang === "de") {
                    this.textValues = this.json.de
                    this.actualLang = "de";
                }
                if (this.$route.query.lang === "fr") {
                    this.textValues = this.json.fr
                    this.actualLang = "fr";
                }
            },
            async checkProfile() {
                let profile = this.$route.query.profile;
                let aux = this.profilesJson[profile];

                this.style = aux.style;
                this.actualProfile = profile;
                this.api_url = aux.api_url;
                this.hotels = aux.hotels;
                this.banners = aux.banner;
                this.activeProfile = aux;

            },
            async changeLang(lang) {
                if (lang === "es") {
                    this.textValues = this.json.es;
                    this.toggleBodyClass("langEsp");
                    this.actualLang = "es";
                }
                if (lang === "en") {
                    this.textValues = this.json.en
                    this.toggleBodyClass("langEng");
                    this.actualLang = "en";
                }
                if (lang === "de") {
                    this.textValues = this.json.de
                    this.toggleBodyClass("langDe");
                    this.actualLang = "de";
                }
                if (lang === "fr") {
                    this.textValues = this.json.fr
                    this.toggleBodyClass("langFr");
                    this.actualLang = "fr";
                }
          }
            
        }
    },

    methods: {

        async loadProfiles() {
            await fetch("/config/config.json", {headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }})
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.profilesJson = json;
                this.checkLang();
                this.checkProfile();
                this.getReserva();
            })
    },
        async getReserva() {
            //this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida + "&Apellido=" + this.dataForRequest.apellido)
            
            this.hotels.forEach(item => {
                if (item.id == this.dataForRequest.hotel && item.api_url != "") {
                    this.api_url = item.api_url;
                } 
            })

            this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida + "&Apellido=" + this.dataForRequest.apellido)
                .then(response => {
                    this.customersData = response.data.LSReservas[0];
                    // console.log(this.customersData.LSReservaHabAWA)

                }).catch(error => {
                    console.log(error)
                });
            },

            async loadLang() {
                await fetch("/config/lang.json", {headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }})
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        this.json = json;
                    })
            },

        toggleBodyClass(langId) {
            const el = document.body;
            if (langId === "langEsp") {
                document.getElementById("listEsp").classList.add("active");
                document.getElementById("listEng").classList.remove("active");
                document.getElementById("listDe").classList.remove("active");
                document.getElementById("listFr").classList.remove("active");
            } if (langId === "langEng") {
                document.getElementById("listEsp").classList.remove("active");
                document.getElementById("listDe").classList.remove("active");
                document.getElementById("listFr").classList.remove("active");
                document.getElementById("listEng").classList.add("active");
            } if (langId === "langDe") {
                document.getElementById("listEsp").classList.remove("active");
                document.getElementById("listEng").classList.remove("active");
                document.getElementById("listFr").classList.remove("active");
                document.getElementById("listDe").classList.add("active");
            } if (langId === "langFr") {
                document.getElementById("listEsp").classList.remove("active");
                document.getElementById("listEng").classList.remove("active");
                document.getElementById("listDe").classList.remove("active");
                document.getElementById("listFr").classList.add("active");
            }   
        },
    },

    created() {
        this.loadLang();
        this.loadProfiles();
    },

    mounted() {
        if (this.$route.query.lang === "es") {
            document.getElementById("listEsp").classList.add("active");
        } else if (this.$route.query.lang === "en") {
            document.getElementById("listEng").classList.add("active");
        } else if (this.$route.query.lang === "de") {
            document.getElementById("listDe").classList.add("active");
        } else if (this.$route.query.lang === "fr") {
            document.getElementById("listFr").classList.add("active");
        }
    }
}
</script>
