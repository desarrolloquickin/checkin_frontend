<template>
  <div class="body">
    <!-- HEAD FIJO CON BACKGROUND -->
        <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
            <img class="img w-100 h-100 img-auto" :src="this.style.URL_IMAGEN_FONDO">
        </div>
        <!-- HEAD FIJO CON BACKGROUND -->


        <!-- FORM DE BUSQUEDA DE RESERVA -->
        <div class="container-fluid principal mt-start mb-5">
            <div class="row justify-content-center">
                <div class="c-form p-3 py-lg-5 col-11 col-md-7 position position-z-1" :style="'background-color: ' + this.style.COLOR_FONDO_CUADRO_FORMULARIO + ';'">
                    <div class="c-brand col-6 px-4 mx-auto mb-3">
                        <a :href="'/busqueda?lang=' + $route.query.lang + '&profile=' + $route.query.profile" class="btn btn-reset btn-block">
                            <img :src="this.style.URL_LOGO_MARCA" alt="" class="img img-w img-auto">
                        </a>
                    </div>

                    <form class="form d-flex flex-wrap pb-md-3 px-md-3 mx-md-3 pt-md-5" action="{URL_ACTION}" method="{POST/GET}">
                        
                        <div class="c-message col-12" v-if="isFinish">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-success mb-0 mb-lg-4">{{this.textValues.RESERVA_COMPLETADA}}</p>
                        </div>

                        <div class="c-message col-12" v-if="!isCheckinAvalaible">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-warning mb-0 mb-lg-4">{{this.textValues.RESERVA_NO_DISPONIBLE_72_HORAS}}</p>
                        </div>

                        <div class="form-group col-12 col-md-6">
                            <label for="" class="sr-only"></label>
                            <select class="form-control text" required :data-msg="this.textValues.MENSAJE_DATO_OBLIGATORIO" v-model="data.hotel">
                                <option value="" disabled selected hidden>{{this.textValues.SELECCIONAR_HOTEL}}</option>
                                <option v-for="hotel in hotels" :value="hotel.id" v-bind:key="hotel.id">
                                {{hotel.title}}
                                </option>
                            </select>
                        </div>

                        <div class="form-group col-12 col-md-6">
                            <input v-model="data.primer_apellido" type="text" class="form-control text" :placeholder="this.textValues.PLACEHOLDER_FIELD">
                        </div>

                        <!--INPUT FECHA ENTRADA-->
                        <div class="c-calendar form-group col-12 col-md-6 reservas__entrada">
                            <!-- <input type="text" name="fecha_entrada" id="fecha_entrada" v-model="data.fecha_entrada"> -->
                            <date-picker
                                v-model="data.fecha_entrada"
                                :locale="{
                                    id: textValues.CALENDAR_IDIOMA,
                                    masks: {
                                        L: 'DD/MM/YYYY'
                                    }
                                }"
                            >
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                    :value="inputValue"
                                    v-on="inputEvents"
                                    type="text" 
                                    class="form-control text"
                                    :placeholder="textValues.PLACEHOLDER_FECHA_ENTRADA"
                                    />
                                </template>

                            </date-picker>
                            <!-- <p for="" class="text label">{{this.textValues.PLACEHOLDER_FECHA_ENTRADA}}</p>
                            <div class="date text--date form-control d-lg-flex flex-lg-wrap mb-0 entrada text">
                                <span class="item dia text"></span>
                                <span class="item mes text"></span>
                                <span class="item anio text"></span>
                                
                            </div> -->
                        </div>
                        <input type="hidden" name="arrival" id="MADG_fechaIn" />
                        <!-- fin INPUT FECHA ENTRADA -->

                        <!-- INPUT FECHA SALIDA -->
                        <div class="c-calendar form-group col-12 col-md-6 reservas__salida">
                            <!-- <input type="text" name="fecha_salida" id="fecha_salida" v-model="data.fecha_salida"> -->
                            <date-picker
                                v-model="data.fecha_salida"
                                :locale="{
                                    id: textValues.CALENDAR_IDIOMA,
                                    masks: {
                                        L: 'DD/MM/YYYY'
                                    }
                                }"
                                :min-date="data.fecha_entrada"
                            >
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                    :value="inputValue"
                                    v-on="inputEvents"
                                    type="text" 
                                    class="form-control text"
                                    :placeholder="textValues.PLACEHOLDER_FECHA_SALIDA"
                                    />
                                </template>
                                
                            </date-picker>
                            <!-- <p for="" class="text label">{{this.textValues.PLACEHOLDER_FECHA_SALIDA}}</p>
                            <div class="date text--date form-control d-lg-flex flex-lg-wrap mb-0 salida text">
                                <span class="item dia text"></span>
                                <span class="item mes text"></span>
                                <span class="item anio text"></span>
                            </div> -->
                        </div>
                        <input type="hidden" name="departure" id="MADG_fechaOut" />
                        <!-- fin INPUT FECHA SALIDA -->


                        <div class="form-group col-12 mb-lg-4">
                            <input v-model="data.localizador" type="text" class="form-control text" :placeholder="this.textValues.PLACEHOLDER_LOCALIZADOR">
                        </div>

                        <div class="c-message col-12" v-if="submitStatus === 'ERROR'">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR}}</p>
                        </div>

                        <div class="c-message col-12" v-if="reserva_not_found">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.RESERVA_NO_ENCONTRADA}}</p>
                        </div>

                        <div class="c-message col-12" v-if="fecha_salida_incorrecta">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.FECHA_SALIDA_INCORRECTA}}</p>
                        </div>

                        <div class="c-message col-12" v-if="multiples_reservas_founds">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-warning mb-0 mb-lg-4">{{this.textValues.MULTIPLES_RESERVAS_ENCONTRADAS}}</p>
                        </div>

                        <div class="form-group col-12 mb-4">
                            <label for="" class="sr-only"></label>
                            <button @click="submit"  type="button" class="btn btn-solid btn-block text" :style="'background-color: ' + this.style.COLOR_BOTON + '; color: ' + this.style.COLOR_TEXTO_BOTON + ';'">{{this.textValues.TEXTO_BOTON_SIGUIENTE}}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- FIN FORM DE BUSQUEDA DE RESERVA -->

    <div class="container-fluid mb-3" v-if="activeProfile.showBanner == 1">
        <div class="row">
            <div class="col-12 py-3 " :style="'background-color: ' + this.activeProfile.colorBrand + ';'">
                <h2 class="text title col-12 col-md-6 col-xl-4 mx-md-auto text-center mb-3">
                    <!-- https://www.amresortseu.com/wp-content/themes/adgtravel/img/logo.png --> 
                    <a :href="this.activeProfile.bannerHeader.url" class="btn btn-reset btn-block">
                        <img :src="this.activeProfile.bannerHeader.img" alt="" class="w-75">
                    </a>
                </h2>
                <div class="wrapper d-flex p-3 w-100 flex-wrap justify-content-center align-items-center">
                    <div class="col-8 col-md-3 col-lg-3 col-xl-1" v-for="element in banners" v-bind:key="element.img" >
                        <a :href="element.url" class="btn btn-reset btn-block" style="margin: 0 auto;">
                            <img :src="element.img" alt="" class="w-100" >
                        </a>
                    </div>
                    
                </div>


                <!-- <div class="">
                    <div class="" v-for="element in banners" v-bind:key="element.img">
                        <a :href="element.url" class="btn btn-reset btn-block">
                            <img :src="element.img" alt="" class="img img-w img-auto d-md-block d-none" :width="element.width">
                            <img :src="element.img" alt="" class="img img-w img-auto d-md-none d-block" :width="element.width">

                            <img :src="element.img" alt="" class="img img-w img-auto d-md-block d-none" :width="element.width">
                            <img :src="element.img" alt="" class="img img-w img-auto d-md-none d-block" :width="element.width">
                        </a>
                    </div>
                    
                </div> -->
            </div>
        </div>
    </div>


        <div class="c-menu-lenguage position-fixed bg p-2 position position-z-1" style="background-color: #ffffff;">
            <i class="icon fas fa-angle-down"></i>
            <ul class="menu list-none mb-0">
                <li id="listEsp" class="item w-100">
                <a @click="changeLang('es')" :href="'/busqueda?lang=es&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ESPAÑOL}}</a>
                </li>
                <li id="listEng" class="item w-100">
                <a @click="changeLang('en')" :href="'/busqueda?lang=en&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.INGLES}}</a>
                </li>
                <li id="listDe" class="item w-100">
                <a @click="changeLang('de')" :href="'/busqueda?lang=de&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ALEMAN}}</a>
                </li>
                <li id="listFr" class="item w-100">
                <a @click="changeLang('fr')" :href="'/busqueda?lang=fr&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.FRANCES}}</a>
                </li>
            </ul>
        </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import json from '../../public/config/lang.json'
//import profilesJson from '../../public/config/profiles.json'
import { required, requiredIf, minLength, between } from 'vuelidate/lib/validators'


export default {
  name: 'Home',
  data() {
      return {
          // idiomas
          activeProfile: {},
          multiples_reservas_founds: false,
          isFinish: false,
          json: {},
          banners: [],
          reserva_not_found: false,
          submitStatus: "OK",
          api_url: "",
          api_custom_url: "",
          isCheckinAvalaible: true,
          data: {
              hotel: "",
              nombre: "",
              primer_apellido: "",
              fecha_entrada: "",
              fecha_salida: "",
              localizador: ""
          },
          actualProfile: "default",
          actualLang: "es",
          textValues: {},
          profilesJson: {},
          fecha_salida_incorrecta: false,
          style: {},
          hotels: {},
        
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
  validations: {
    data: {
        hotel: {
          required
        },
        fecha_entrada: {
          required
        },
        primer_apellido: {
            required: requiredIf(function(data) {
                return data.localizador == "";
            })
        },
        localizador: {
            required: requiredIf(function(data) {
                return data.primer_apellido == "";
            })
        },
        fecha_salida: {
            required
        },
      },
  },
  methods: {
     
 requiredIf(el) {
         return data[el] == null;
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
            .catch(error => {
                console.error(error);
            })
    },
    async loadProfiles() {
        await fetch("/config/config.json", {
            method: 'GET'
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.profilesJson = json;
                this.checkLang();
                this.checkProfile();
            })
            .catch(error => {
                console.error(error);
            })
    },
    submit() {

        this.$v.$touch()
        if (this.$v.$invalid) {
            this.submitStatus = 'ERROR'
        } else {
            // do your submit logic here
            this.submitStatus = "OK";
            this.getReserva();
        }
    },
    getReserva() {
            let fechaEntrada = new Date(this.data.fecha_entrada)

            let fechaSalida;

            if (this.data.fecha_salida == "") {
                fechaSalida = "";
            } else {
                fechaSalida =  new Date(this.data.fecha_salida);
                if (fechaSalida < fechaEntrada)  {
                    this.fecha_salida_incorrecta = true;
                    return;    
                } else {
                    this.fecha_salida_incorrecta = false;
                }
            }

        fechaEntrada = fechaEntrada.getFullYear() + "-" + (fechaEntrada.getMonth() < 9 ? "0" : "") + (fechaEntrada.getMonth() + 1) + "-" + (fechaEntrada.getDate() < 10 ? "0" : "") + (fechaEntrada.getDate());
        fechaSalida = fechaSalida.getFullYear() + "-" + (fechaSalida.getMonth() < 9 ? "0" : "") + (fechaSalida.getMonth() + 1) + "-" + (fechaSalida.getDate() < 10 ? "0" : "") + (fechaSalida.getDate());

        // fechaEntrada = (fechaEntrada.getDate() < 10 ? "0" : "") + (fechaEntrada.getDate()) + "-" (fechaEntrada.getMonth() < 9 ? "0" : "") + (fechaEntrada.getMonth() + 1) + "-" + fechaEntrada.getFullYear();
        // fechaSalida = (fechaSalida.getDate() < 10 ? "0" : "") + (fechaSalida.getDate()) + "-" (fechaEntrada.getMonth() < 9 ? "0" : "") + (fechaEntrada.getMonth() + 1) + "-" + fechaEntrada.getFullYear();

        let apellido = this.data.primer_apellido.toLowerCase();

        this.hotels.forEach(item => {
            if (item.id == this.data.hotel && item.api_url != "") {
                this.api_url = item.api_url;
            }
        })

        this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.data.hotel + "&Localizador=" + this.data.localizador + "&FechaEntrada=" + fechaEntrada + "&FechaSalida=" + fechaSalida + "&Apellido=" + apellido)
        .then(response => {
            
            if (response.data.LSReservas.length == 1) {
                if (response.data.LSReservaHabAWA == 0) {
                    this.reserva_not_found = false;
                    if (this.data.localizador != "" && apellido != "") {
                        this.$router.push("listausuarios?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.data.hotel + "&localizator=" + this.data.localizador + "&fechaentrada=" + fechaEntrada + "&fechasalida=" + fechaSalida + "&apellido=")
                    }
                    else {
                        this.$router.push("listausuarios?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.data.hotel + "&localizator=" + this.data.localizador + "&fechaentrada=" + fechaEntrada + "&fechasalida=" + fechaSalida + "&apellido=" + apellido)
                    }  
                } if  (response.data.LSReservaHabAWA >= 4) {
                    this.isCheckinAvalaible = false;
                }
                else {
                    this.$router.push("reservas?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.data.hotel + "&localizator=" + this.data.localizador + "&fechaentrada=" + fechaEntrada + "&fechasalida=" + fechaSalida + "&apellido=" + apellido)
                }
            } if (response.data.LSReservas.length > 1) {
                this.multiples_reservas_founds = true;
                // this.$router.push("reservas?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.data.hotel + "&localizator=" + this.data.localizador + "&fechaentrada=" + fechaEntrada + "&fechasalida=" + fechaSalida + "&apellido=" + apellido)
            } else {
                this.reserva_not_found = true;
            }

        }).catch(error => {
            console.error(error)
        });
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
        
        if (localStorage.finish == 'true') {
            this.isFinish = true;
            setTimeout(() => {
                this.isFinish = false
                localStorage.finish = "";
            }, 10000);
        }
  }
 
}
</script>

<style scoped>
.column {
  float: left;
  width: 12.5%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>