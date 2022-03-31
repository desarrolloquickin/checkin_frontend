<template>

  <div>
    <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
    <img :src="this.style.URL_IMAGEN_FONDO" alt="" class="img w-100 h-100 img-auto">
  </div>

  <div class="container-fluid principal mt-start mb-5">
    <div class="row justify-content-center">
        <div class="c-form p-3 py-lg-5 col-11 col-md-7 position position-z-1" style="background-color: #00a5b1;">
            <div class="c-brand col-6 px-4 mx-auto mb-3 mb-lg-5">
                <a :href="'/form?lang=' + $route.query.lang + '&profile=' + $route.query.profile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id + '&reserva=' + this.$route.query.reserva" class="btn btn-reset btn-block">
                    <img src="https://www.aluahotels.com/uploads/logoshotel/svg/logo-alua-header.svg" alt="" class="img img-w img-auto">
                </a>
            </div>
            <form class="form d-flex flex-wrap">

              <div class="c-message col-12" v-if="$route.query.completado == 'true'">
                <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                <p class="text alert alert-warning mb-0 mb-lg-4">{{this.textValues.SOBREESCRIBIR_RESERVA}}</p>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- NOMBRE -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.NOMBRE + (this.activeProfile.camposObligatorios.nombre ? ' *' : '')}}</label>
                <input v-model="data.nombre" type="text" class="form-control text">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- PRIMER APELLIDO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.PRIMER_APELLIDO + (this.activeProfile.camposObligatorios.primer_apellido ? ' *' : '')}}</label>
                <input v-model="data.primer_apellido" type="text" class="form-control text">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- SEGUNDO APELLIDO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.SEGUNDO_APELLIDO + (this.activeProfile.camposObligatorios.segundo_apellido ? ' *' : '')}}</label>
                <input v-model="data.segundo_apellido" type="text" class="form-control text">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- TIPO DOCUMENTO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.TIPO_DOCUMENTO + (this.activeProfile.camposObligatorios.tipo_doc ? ' *' : '')}}</label>
                <select name="tipo_doc" v-model="data.tipo_doc">
                  <option value="" selected disabled hidden></option>
                  <option value="DNI" >DNI</option>
                  <option value="NIE" >NIE</option>
                  <option value="PASAPORTE" >{{this.textValues.PASAPORTE}}</option>
                  <option value="TARJETA_IDENTIDAD" >{{this.textValues.TARJETA_IDENTIDAD}}</option>
                </select>
              </div>
              
              <!-- ------------------------------------------------ -->
              <!-- NUMERO DOCUMENTO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.NUM_DOCUMENTO + (this.activeProfile.camposObligatorios.num_documento ? ' *' : '')}}</label>
                <input v-model="data.num_documento" type="text" class="form-control text">
                <div class="text alert alert-danger mb-0 mb-lg-4" v-if="!$v.data.num_documento">{{this.textValues.MENSAJE_ERROR_REVISAR_NUM_DOCUMENTO}}</div>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- FECHA EXPEDICION -->
              <!-- ------------------------------------------------ -->
              <div class="c-calendar form-group col-12 col-md-6 reservas__entrada text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.FECHA_EXPEDICION + (this.activeProfile.camposObligatorios.fecha_expedicion ? " *" : "")}}</label>
                <date-picker
                  v-model="data.fecha_expedicion"
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

              <!-- ------------------------------------------------ -->
              <!-- NACIONALIDAD -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.NACIONALIDAD + (this.activeProfile.camposObligatorios.pais_nacimiento ? ' *' : '')}}</label>

                <select v-if="$route.query.lang == 'es'" name="fecha_expedicion" v-model="data.pais_nacimiento" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesEs" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>

                <select v-if="$route.query.lang == 'en'" name="fecha_expedicion" v-model="data.pais_nacimiento" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesEn" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>

                <select v-if="$route.query.lang == 'fr'" name="fecha_expedicion" v-model="data.pais_nacimiento" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesFr" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>

                <select v-if="$route.query.lang == 'de'" name="fecha_expedicion" v-model="data.pais_nacimiento" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesDe" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>

              </div>
              

              <!-- ------------------------------------------------ -->
              <!-- PAIS RESIDENCIA -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.PAIS_RESIDENCIA + (this.activeProfile.camposObligatorios.pais ? ' *' : '')}}</label>

                <select v-if="$route.query.lang == 'es'" name="fecha_expedicion" v-model="data.pais" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesEs" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>

                <select v-if="$route.query.lang == 'en'" name="fecha_expedicion" v-model="data.pais" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesEn" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>

                <select v-if="$route.query.lang == 'fr'" name="fecha_expedicion" v-model="data.pais" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesFr" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>

                <select v-if="$route.query.lang == 'de'" name="fecha_expedicion" v-model="data.pais" class="text">
                  <option value="" selected disabled hidden></option>                
                  <option v-for="pais in paisesDe" v-bind:key="pais.alpha3" :value="pais.alpha3">{{pais.name}}</option>
                </select>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- EMAIL -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.EMAIL + (this.activeProfile.camposObligatorios.email || emailFirstCliente ? ' *' : '')}}</label>
                <input v-model="$v.data.email.$model" type="text" :class="status($v.data.email) + ' form-control text'">
                <div class="text alert alert-danger mb-0 mb-lg-4" v-if="!$v.data.email.email">{{this.textValues.MENSAJE_ERROR_EMAIL_INCORRECTO}}</div>
              </div>
              

              <!-- ------------------------------------------------ -->
              <!-- TELEFONO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.TELEFONO + (this.activeProfile.camposObligatorios.telefono || telefonoFirstCliente ? ' *' : '')}}</label>
                <input v-model="data.telefono" type="text" class="form-control text">
                <div class="text alert alert-danger mb-0 mb-lg-4" v-if="!$v.data.telefono.numeric">{{this.textValues.MENSAJE_ERROR_REVISAR_NUM_DOCUMENTO}}</div>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- FECHA NACIMIENTO -->
              <!-- ------------------------------------------------ -->
              <div class="c-calendar form-group col-12 col-md-6 reservas__entrada text">
                <!-- ADULTO -->
                <div>
                  <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.FECHA_NACIMIENTO + (this.activeProfile.camposObligatorios.fecha_nacimiento ? " *" : "")}}</label>
                  <date-picker
                    v-model="data.fecha_nacimiento"
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
                      />
                    </template>
                  </date-picker>
                </div>
                
              </div>

              <!-- ------------------------------------------------ -->
              <!-- SEXO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.SEXO + (this.activeProfile.camposObligatorios.sexo ? ' *' : '')}}</label>
                <select class="form-control text" v-model="data.sexo">
                  <option value="" disabled selected hidden></option>
                  <option value="0">{{this.textValues.HOMBRE}}</option>
                  <option value="1">{{this.textValues.MUJER}}</option>
                </select>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- DIRECCIÓN -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.DIRECCION + (this.activeProfile.camposObligatorios.direccion ? ' *' : '')}}</label>
                <input v-model="data.direccion" type="text" class="form-control text">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- POBLACION -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.POBLACION + (this.activeProfile.camposObligatorios.poblacion ? ' *' : '')}}</label>
                <input v-model="data.poblacion" type="text" class="form-control text" >
              </div>

              <!-- ------------------------------------------------ -->
              <!-- PROVINCIA -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.PROVINCIA + (this.activeProfile.camposObligatorios.provincia ? ' *' : '' || data.pais == 'esp' ? ' *' : '')}}</label>
                <div v-if="data.pais == 'esp'">
                  <select name="provincia" v-model="data.provincia" class="text">
                    <option v-for="provincia in provincias" v-bind:key="provincia.name" :value="provincia.value">{{provincia.name}}</option>
                  </select>
                </div>
                <div v-else>
                  <select name="provincia" disabled v-model="data.provincia" class="text">
                    <!-- <option v-for="provincia in provincias" v-bind:key="provincia.name" :value="provincia.value">{{provincia.name}}</option> -->
                  </select>
                </div>
                
              </div>

              <!-- ------------------------------------------------ -->
              <!-- CODIGO POSTAL -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6 text">
                <label class="text mr-auto mb-0 " style="color: #ffffff;">{{this.textValues.CODIGO_POSTAL + (this.activeProfile.camposObligatorios.codigo_postal ? ' *' : '')}}</label>
                <input v-model="data.codigo_postal" type="text" class="form-control text">
              </div>

                <div class="form-group col-12 col-md-12 d-flex align-items-center flex-row-reverse justify-content-start mb-4">
                    <label for="" class="text mr-auto mb-0" style="color: #ffffff;">{{(this.activeProfile.camposObligatorios.acepta_terminos ? '* ' : '') + this.textValues.CONSENTIMIENTO_RECIBIR_NOTIFICANCIONES}}</label>
                    <input type="checkbox" v-model="data.acepta_terminos" class="form-control form-control-check mr-3 text" aria-label="Checkbox for following text input">
                </div>

                <div class="col-12 mb-3">
                    <p class="text mb-2" style="color: #ffffff;">(*) {{this.textValues.OBLIGATORIO}}</p>
                    <!-- <p class="text" style="color: #ffffff;">(**) {{this.textValues.OPCIONAL}}</p> -->
                </div>

                <!-- ------------------------------------------------ -->
                <!-- ERRORES -->
                <!-- ------------------------------------------------ -->
                <div class="c-message col-12">
                  <p v-if="error_cases.nombre" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_NOMBRE}}</p>
                  <p v-if="error_cases.primer_apellido" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_PRIMER_APELLIDO}}</p>
                  <p v-if="error_cases.segundo_apellido" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_SEGUNDO_APELLIDO}}</p>
                  <p v-if="error_cases.tipo_documento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_TIPO_DOCUMENTO}}</p>
                  <p v-if="error_cases.fecha_expedicion" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_FECHA_EXPEDICION}}</p>
                  <p v-if="error_cases.fecha_nacimiento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_FECHA_NACIMIENTO}}</p>
                  <p v-if="error_cases.num_documento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_NUM_DOCUMENTO}}</p>
                  <p v-if="error_cases.pais_nacimiento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_PAIS_NACIMIENTO}}</p>
                  <p v-if="error_cases.pais_residencia" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_PAIS_RESIDENCIA}}</p>
                  <p v-if="error_cases.sexo" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_SEXO}}</p>
                  <p v-if="error_cases.email" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_EMAIL}}</p>
                  <p v-if="error_cases.telefono" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_TELEFONO}}</p>                  
                  <p v-if="error_cases.direccion" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_DIRECCION}}</p>
                  <p v-if="error_cases.poblacion" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_POBLACION}}</p>
                  <p v-if="error_cases.provincia" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_PROVINCIA}}</p>
                  <p v-if="error_cases.codigo_postal" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_CODIGO_POSTAL}}</p>
                  <p v-if="error_cases.codigo_postal_incorrecto" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_CODIGO_POSTAL_INCORRECTO}}</p>
                  <p v-if="error_cases.acepta_terminos" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_ACEPTAR_INFO}}</p>
                </div>

                <div class="form-group col-12 col-md-6">
                    <label for="" class="sr-only"></label>
                    <button @click="goBack()" type="button" class="btn btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">{{this.textValues.SALIR}}</button>
                </div>

                <div class="form-group col-12 col-md-6">
                    <label for="" class="sr-only"></label>
                    <button @click="checkForm()" type="button" class="btn btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">{{this.textValues.CHECK_IN}}</button>
                </div>

            </form>
        </div>
    </div>
</div>

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
          <li id="listEsp" :class="'item w-100 ' + (this.isListEsp ? 'active' : '')">
            <a @click="changeLang('es')" :href="'/form?lang=es&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id + '&reserva=' + this.$route.query.reserva + '&completado=' + this.$route.query.completado" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ESPAÑOL}}</a>
          </li>
          <li id="listEng" :class="'item w-100 ' + (this.isListEn ? 'active' : '')">
            <a @click="changeLang('en')" :href="'/form?lang=en&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id + '&reserva=' + this.$route.query.reserva + '&completado=' + this.$route.query.completado" class="btn btn-reset text text-uppercase p-1">{{this.textValues.INGLES}}</a>
          </li>
          <li id="listDe" :class="'item w-100 ' + (this.isListDe ? 'active' : '')">
            <a @click="changeLang('de')" :href="'/form?lang=de&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id + '&reserva=' + this.$route.query.reserva + '&completado=' + this.$route.query.completado" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ALEMAN}}</a>
          </li>
          <li id="listFr" :class="'item w-100 ' + (this.isListFr ? 'active' : '')">
            <a @click="changeLang('fr')" :href="'/form?lang=fr&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id + '&reserva=' + this.$route.query.reserva + '&completado=' + this.$route.query.completado" class="btn btn-reset text text-uppercase p-1">{{this.textValues.FRANCES}}</a>
          </li>
      </ul>
  </div>
  
</div>
</template>

<script>
import paisesJson from '../assets/paises'
import paisesJsonEs from '../assets/es/world'
import paisesJsonEn from '../assets/en/world'
import paisesJsonFr from '../assets/fr/world'
import paisesJsonDe from '../assets/de/world'
import provinciasJson from '../assets/provincias'
import codigopostalJson from '../assets/codigopostal'
import json from '../../public/config/lang.json'
//import profilesJson from '../../public/config/profiles.json'
import { required, requiredIf, email, minLength, numeric } from "vuelidate/lib/validators";

function CustomDocumentValidation() {

  let DNI_REGEX = /^(\d{8})([A-Z])$/;
  let NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

  if (this.data.num_documento == "") { return true; }

  if (this.data.tipo_doc == "DNI") {
    let numero
    let letr
    let letra
  
    if(DNI_REGEX.test(this.data.num_documento) == true){
      numero = this.data.num_documento.substr(0,this.data.num_documento.length-1);
      letr = this.data.num_documento.substr(this.data.num_documento.length-1,1);
      numero = numero % 23;
      letra='TRWAGMYFPDXBNJZSQVHLCKET';
      letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
        this.documentValidated = false;
        return false;
      }else{
        this.documentValidated = true;
        return true;
      }
    } else {
      this.documentValidated = false;
      return false;
    }
  } if (this.data.tipo_doc == "NIE") {
    if(NIE_REGEX.test(this.data.num_documento) == false)
        {
          this.documentValidated = false;
          return false;
        }
        else
        {
          this.documentValidated = true;
          return true;
        }
  } if (this.data.tipo_doc == "PASAPORTE") {
    this.documentValidated = true;
    return true;
  } if (this.data.tipo_doc == "TARJETA_IDENTIDAD") {
    this.documentValidated = true;
    return true;
  }

  return true;
}

export default {
  name: "Formulario",
  data() {
    return {
      isListEsp: false,
      isListEn: false,
      isListFr: false,
      isListDe: false,
      paisesEs: paisesJsonEs,
      paisesEn: paisesJsonEn,
      paisesFr: paisesJsonFr,
      paisesDe: paisesJsonDe,
      emailFirstCliente: false,
      telefonoFirstCliente: false,
      documentValidated: false,
      isCPValidated: false,
      json: {},
      activeProfile: {
        camposObligatorios: {}
      },
      banners: [],
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DDTHH:mm:ss',
      },
      sexo: "",
      paises: paisesJson,
      provincias: provinciasJson,
      codigosPostales: codigopostalJson,
      isFormComplete: false,
      error_cases: {
        nombre: false,
        primer_apellido: false,
        segundo_apellido: false,
        tipo_documento: false,
        num_documento: false,
        fecha_expedicion: false,
        fecha_nacimiento: false,
        pais_nacimiento: false,
        pais_residencia: false, 
        sexo: false,
        direccion: false,
        poblacion: false,
        provincia: false,
        codigo_postal: false,
        codigo_postal_incorrecto: false,
        aceptar_info: false,
        email: false,
      },
      data: {
        reserva_id: "",
        fecha_entrada: "",
        fecha_salida: "",
        habitacion: "",
        num_documento: "",
        tipo_doc: "",
        fecha_expedicion: "",
        pais: "",
        email: "",
        telefono: "",
        fecha_nacimiento: "",
        sexo: "",
        direccion: "",
        nombre: "",
        poblacion: "",
        provincia: "",
        codigo_postal: "",
        primer_apellido: "",
        segundo_apellido: "",
        tipo_persona: "",
        acepta_terminos: false,
        pais_nacimiento: "",
        num_reserva: "",
        tipo_habitacion: "",
        regimen: ""
      },
      dataForRequest: {
        hotel: this.$route.query.hotel,
        localizador: this.$route.query.localizator,
        fecha_entrada: this.$route.query.fechaentrada,
        fecha_salida: this.$route.query.fechasalida,
        apellido: this.$route.query.apellido
      },
      state: {
        highlighted: {
          to: new Date(2016, 0, 5), // Highlight all dates up to specific date
          from: new Date(2016, 0, 26), // Highlight all dates after specific date
          days: [6, 0], // Highlight Saturday's and Sunday's
          daysOfMonth: [15, 20, 31], // Highlight 15th, 20th and 31st of each month
          dates: [ // Highlight an array of dates
            new Date(2016, 9, 16),
            new Date(2016, 9, 17),
            new Date(2016, 9, 18)
          ],
          // a custom function that returns true of the date is highlighted
          // this can be used for wiring you own logic to highlight a date if none
          // of the above conditions serve your purpose
          // this function should accept a date and return true if is highlighted
          customPredictor: function(date) {
            // highlights the date if it is a multiple of 4
            if(date.getDate() % 4 == 0){
              return true
            }
          },
          includeDisabled: true // Highlight disabled dates
        }
      },
      customersData: {},
      reservaData: {},
      actualProfile: "default",
      actualLang: "es",
      textValues: {},
      tipos_documento: ["DNI","NIF"],
      profilesJson: {},
      style: {},
      client_data: {},
      api_url: "",
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
          email: {
            email
          },
          telefono: {
            numeric
          },
          num_documento: CustomDocumentValidation,
          provincia: {
            required: requiredIf(function(data) {
              return data.pais == 'esp'
            })
          }
        }
      },

    methods: {
      checkCP() {
        if (this.data.pais != "esp") return true;

        let bool = false;

            this.codigosPostales.forEach(element => {
              if (element.CodigoPostal == this.data.codigo_postal && element.Provincia == this.data.provincia) {
                bool = true;
                return true;
              }
            });

          return bool;
      },
      status(validation) {
          return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      },
      goBack() {
        this.$router.push('listausuarios?lang=' + this.$route.query.lang + '&profile=' + this.$route.query.profile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id + '&referencia=' + this.$route.query.referencia)
      },
      checkForm() {

        if (this.activeProfile.camposObligatorios.nombre && this.data.nombre === "") {
          this.error_cases.nombre = true;
        } else {
          this.error_cases.nombre = false;
        }
        
        if (this.activeProfile.camposObligatorios.primer_apellido && this.data.primer_apellido === "") {
          this.error_cases.primer_apellido = true;
        } else {
          this.error_cases.primer_apellido = false;
        }

        if (this.activeProfile.camposObligatorios.segundo_apellido && this.data.segundo_apellido === "") {
          this.error_cases.segundo_apellido = true;
        } else {
          this.error_cases.segundo_apellido = false;
        }

        if (this.activeProfile.camposObligatorios.tipo_doc && this.data.tipo_doc === "") {
          this.error_cases.tipo_documento = true;
        } else {
          this.error_cases.tipo_documento = false;
        }
        if (this.activeProfile.camposObligatorios.num_documento && this.data.num_documento === "" && !this.documentValidated) {
          this.error_cases.num_documento = true;
        } else {
          this.error_cases.num_documento = false;
        }

        if (this.activeProfile.camposObligatorios.fecha_nacimiento && this.data.fecha_nacimiento === "" || this.data.fecha_nacimiento === "0001-01-01T00:00:00") {
          this.error_cases.fecha_nacimiento = true;
        } else {
          this.error_cases.fecha_nacimiento = false;
        }

        if (this.activeProfile.camposObligatorios.fecha_expedicion && this.data.fecha_expedicion === "" || this.data.fecha_expedicion === "0001-01-01T00:00:00") {
          this.error_cases.fecha_expedicion = true;
        } else {
          this.error_cases.fecha_expedicion = false;
        }

        if (this.activeProfile.camposObligatorios.pais_nacimiento && this.data.pais_nacimiento === "") {
          this.error_cases.pais_nacimiento = true;
        } else {
          this.error_cases.pais_nacimiento = false;
        }

        if (this.activeProfile.camposObligatorios.pais && this.data.pais === "") {
          this.error_cases.pais_residencia = true;
        } else {
          this.error_cases.pais_residencia = false;
        }

        if (this.activeProfile.camposObligatorios.sexo && this.data.sexo != "0" && this.data.sexo != "1") {
          this.error_cases.sexo = true;
        } else {
          this.error_cases.sexo = false;
        }

        if (this.activeProfile.camposObligatorios.direccion && this.data.direccion === "") {
          this.error_cases.direccion = true;
        } else {
          this.error_cases.direccion = false;
        }

        if (this.activeProfile.camposObligatorios.poblacion && this.data.poblacion === "") {
          this.error_cases.poblacion = true;
        } else {
          this.error_cases.poblacion = false;
        }

        if (this.activeProfile.camposObligatorios.provincia && this.data.provincia === "" || this.data.pais === "esp" && this.data.provincia === "") {
          this.error_cases.provincia = true;
        } else {
          this.error_cases.provincia = false;
        }

        if (this.activeProfile.camposObligatorios.codigo_postal && this.data.codigo_postal === "") {
          this.error_cases.codigo_postal = true;
        } else {
          this.error_cases.codigo_postal = false;
        }

        if (!this.checkCP()) {
          this.error_cases.codigo_postal_incorrecto = true;
          this.isCPValidated = false;
        } else {
          this.error_cases.codigo_postal_incorrecto = false;
          this.isCPValidated = true;
        }


        if (this.activeProfile.camposObligatorios.acepta_terminos && this.data.acepta_terminos == false) {
          this.error_cases.acepta_terminos = true;
        } else {
          this.error_cases.acepta_terminos = false;
        }

        if (this.activeProfile.camposObligatorios.email && this.data.email == "" || this.$route.query.id == "1" && this.data.email == "") {
          this.error_cases.email = true;
        } else {
          this.error_cases.email = false;
        }

        let isAllComplete = true;

        if (this.$route.query.id == "1" && this.data.telefono == "") {
          this.error_cases.telefono = true;
        } else {
          this.error_cases.telefono = false;
        }

        let aux = Object.keys(this.activeProfile.camposObligatorios);
        let aux2 = [];

        aux.forEach(key => {
          if (this.activeProfile.camposObligatorios[key]) {
            aux2.push({'id': key, 'value': this.activeProfile.camposObligatorios[key]})
          }
        });

        aux2.forEach(element => {
          if (this.data[element.id] == "" || this.$route.query.id == "1" && this.data.telefono == "" || this.$route.query.id == "1" && this.data.email == "" || !this.documentValidated || !this.$v.data.telefono.numeric || this.data.pais == "esp" && this.data.provincia == "" || !this.isCPValidated) {
            isAllComplete = false;
            return;
          };
        })

        if (isAllComplete) {
          this.error_cases.nombre                   = false;
          this.error_cases.primer_apellido          = false;
          this.error_cases.fecha_nacimiento         = false;
          this.error_cases.pais_nacimiento          = false;
          this.error_cases.pais_residencia          = false;
          this.error_cases.sexo                     = false;
          this.error_cases.tipo_doc                 = false;
          this.error_cases.num_documento            = false;
          this.error_cases.fecha_expedicion         = false;
          this.error_cases.pais                     = false;
          this.error_cases.aceptar_info             = false;
          this.error_cases.email                    = false;
          this.error_cases.acepta_terminos          = false;
          this.error_cases.provincia                = false;

          this.goSign();
        }

      },

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
                //this.getReserva();
            })
    },
    
      async getReserva() {

        this.hotels.forEach(item => {
            if (item.id == this.data.hotel && item.api_url != "") {
                this.api_url = item.api_url;
            }
        })
        
        //this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida + "&Apellido=" + this.dataForRequest.apellido)
        await this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida)
        .then(response => {
          this.data = {
            reserva_id: response.data.LSReservas[0].Reserva,
            // fecha_entrada: this.client_data.LSReservas[0].LSReservaHabAWA[0].FechaEntrada,
            // fecha_salida: this.client_data.LSReservas[0].LSReservaHabAWA[0].FechaSalida,
            habitacion: this.client_data.LSReservas[0].LSReservaHabAWA[0].Habitacion,
            num_documento: "",
            tipo_doc: "",
            fecha_expedicion: "",
            email: "",
            fecha_nacimiento: "",
            sexo: "",
            nombre: "",
            primer_apellido: "",
            segundo_apellido: "",
            acepta_terminos: "",
            // numero_cliente: this.customersData.NumeroCliente,
            // tipo_persona: this.customersData.TipoPersona,
            pais_nacimiento: "",
            num_reserva: response.data.LSReservas[0].Reserva,

            direccion: "",
            pais: "",
            codigo_postal: "",
            poblacion: "",
            provincia: "",
            telefono: "",

            regimen: response.data.LSReservas[0].LSReservaHabAWA[0].RegimenUso

          }
        })
        .then(() => {
          if (this.data.fecha_expedicion < new Date('1900-01-01')) {this.data.fecha_expedicion = new Date('2000-01-01')}
          if (this.data.fecha_nacimiento < new Date('1900-01-01')) { this.data.fecha_nacimiento = new Date('2000-01-01')}
        })
        .catch(error => {
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

        goSign() {
          let dayEx = new Date(this.data.fecha_expedicion).getDate();
          let monthEx = new Date(this.data.fecha_expedicion).getMonth() + 1;
          let yearEx = new Date(this.data.fecha_expedicion).getFullYear();

          let dayNa = new Date(this.data.fecha_nacimiento).getDate();
          let monthNa = new Date(this.data.fecha_nacimiento).getMonth() + 1;
          let yearNa = new Date(this.data.fecha_nacimiento).getFullYear();

          this.data.fecha_expedicion = yearEx + "-" + (monthEx < 10 ? '0' + monthEx : monthEx) + "-" + (dayEx < 10 ? '0' + dayEx : dayEx);
          this.data.fecha_nacimiento = yearNa + "-" + (monthNa < 10 ? '0' + monthNa : monthNa) + "-" + (dayNa < 10 ? '0' + dayNa : dayNa);
          localStorage.data = JSON.stringify(this.data);
          this.$router.push("/checkin?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.$route.query.hotel + "&localizator=" + this.$route.query.localizator + "&fechaentrada=" + this.$route.query.fechaentrada + "&fechasalida=" + this.$route.query.fechasalida + "&apellido=" + this.$route.query.apellido + "&id=" + this.$route.query.id + "&reserva=" + this.$route.query.reserva + '&referencia=' + this.$route.query.referencia);
        },
        test () {
          if (this.$route.query.lang === "es") {
            this.isListEsp = true;
        } else if (this.$route.query.lang === "en") {
            this.isListEn = true;
        } else if (this.$route.query.lang === "de") {
            this.isListDe = true;
        } else if (this.$route.query.lang === "fr") {
            this.isListFr = true;
        }
        }
    },

    created() {
      this.loadLang();
      this.loadProfiles();
    },

    async mounted() {
      if (this.$route.query.id == "1") {
          this.emailFirstCliente = true;
          this.telefonoFirstCliente = true;
        } 
        
        this.test();

        let xd = [];


        this.codigosPostales.forEach(element => {
          xd.push(element.Provincia)
        })

        let dfgdgf = new Set(xd);

        

        let aux = Array.from(dfgdgf);
        let aux2 = []


        aux.forEach(item => {
          aux2.push({"name": item, "value": item});
        })
        
    }
}
</script>

<style>

.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 10px;
}

.column > p {
  padding: 10px 0 20px 0;
}

.form_title {
  font-weight: 700;  
}

input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.dirty {
  border-color: #5A5;
  background: #EFE;
}

.error {
  border-color: red;
  background: #FDD;
}

</style>
