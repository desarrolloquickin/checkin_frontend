<template style="overflow: hidden" >
  <div>
    <div
      class="
        c-background
        w-100
        h-100
        position-fixed
        bg bg-mask bg-mask-white-05
      "
    >
      <img
        :src="this.style.URL_IMAGEN_FONDO"
        alt=""
        class="img w-100 h-100 img-auto"
      />
    </div>

    <div class="container-fluid principal mt-start mb-5">
      <div class="row justify-content-center">
        <div
          class="
            c-form c-form-documents
            p-3
            py-lg-5
            col-11 col-md-11
            position position-z-1
          "
          style="background-color: #00a5b1"
        >
          <div class="c-brand col-6 px-4 mx-auto mb-3 mb-lg-5">
            <a
              :href="
                '/checkin?lang=' +
                $route.query.lang +
                '&profile=' +
                $route.query.profile +
                '&hotel=' +
                $route.query.hotel +
                '&localizator=' +
                $route.query.localizator +
                '&fechaentrada=' +
                $route.query.fechaentrada +
                '&fechasalida=' +
                $route.query.fechasalida +
                '&apellido=' +
                $route.query.apellido +
                '&id=' +
                $route.query.id +
                '&reserva=' +
                $route.query.reserva
              "
              class="btn btn-reset btn-block"
            >
              <img
                src="https://www.aluahotels.com/uploads/logoshotel/svg/logo-alua-header.svg"
                alt=""
                class="img img-w img-auto"
              />
            </a>
          </div>
          <div class="d-flex flex-wrap">
            <!-- <div class="c-objectpdf col-12 col-md-8" > -->
            <!-- <div class="c-objectpdf col-12 col-md-8" @scroll="scrollEvent" style="background-color: white; height: 50px; overflow: auto;" v-html="html"> -->
            <div
              class="c-objectpdf col-12 col-md-8"
              style="background-color: white; height: 50px; overflow: auto"
              v-html="html"
            >
              <!-- <div id="test" >
                          <iframe id="iframeId" ref="iframe1" frameborder="0" :src="'ReservaH20RE200003827/Firma-1.pdf'" ></iframe>
                        </div> -->
            </div>
            <div class="mt-5 col-12 col-md-4" style="padding-left: 10px">
              <form class="form d-flex flex-wrap">
                <div class="form-group col-12">
                  <label for="" class="text text-white text-left">{{
                    this.textValues.FIRMA_DOCUMENTO
                  }}</label>
                  <div class="w-100">
                    <!-- <canvas class="w-100" style="background-color: white;" width="100%" height="250px" id="myCanvas" @mousemove="draw" @mousedown="beginDrawing" @mouseup="stopDrawing"/> -->
                    <canvas
                      id="sig-canvas"
                      
                       height="250"
                       width="250"
                    >
                    </canvas>
                  </div>
                </div>

                <div class="form-group col-12 justify-content-end d-flex">
                  <button
                    type="button"
                    @click="clearCanvas()"
                    class="
                      py-2
                      btn btn-solid
                      text-uppercase
                      btn-block
                      text
                      col-6 col-md-4
                      my-2
                    "
                    style="background-color: #006682; color: #ffffff"
                  >
                    {{ this.textValues.LIMPIAR }}
                  </button>
                </div>

                <div
                  class="
                    form-group
                    col-12
                    d-flex
                    align-items-center
                    flex-row-reverse
                    justify-content-start
                    mb-4
                  "
                >
                  <label
                    for=""
                    class="text mr-auto mb-0"
                    style="color: #ffffff"
                    >{{ this.textValues.ALERTA_COVID }}</label
                  >
                  <input
                    type="checkbox"
                    v-model="data.covid"
                    @click="showCanvasFunct()"
                    class="form-control form-control-check mr-3"
                    aria-label="Checkbox for following text input"
                  />
                </div>

                <div class="form-group col-12 col-md-6">
                  <label for="" class="sr-only"></label>
                  <button
                    type="button"
                    @click="
                      $router.push(
                        'form?lang=' +
                          $route.query.lang +
                          '&profile=' +
                          $route.query.profile +
                          '&hotel=' +
                          $route.query.hotel +
                          '&localizator=' +
                          $route.query.localizator +
                          '&fechaentrada=' +
                          $route.query.fechaentrada +
                          '&fechasalida=' +
                          $route.query.fechasalida +
                          '&apellido=' +
                          $route.query.apellido +
                          '&id=' +
                          $route.query.id +
                          '&reserva=' +
                          $route.query.reserva +
                          '&completado=' +
                          $route.query.completado +
                          '&referencia=' +
                          $route.query.referencia
                      )
                    "
                    class="
                      btn btn-solid
                      text-uppercase
                      btn-block
                      text
                      py-2
                      mx-2
                    "
                    style="background-color: #006682; color: #ffffff"
                  >
                    {{ this.textValues.BOTON_CANCELAR }}
                  </button>
                </div>

                <div class="form-group col-12 col-md-6">
                  <label for="" class="sr-only"></label>
                  <button
                    type="button"
                    :disabled="!this.finishCheck || !this.data.covid"
                    @click="updateClientData()"
                    :class="'btn btn-solid text-uppercase btn-block text py-2'"
                    :style="
                      'background-color: #' +
                      (this.data.covid && this.finishCheck
                        ? '108705'
                        : '006682') +
                      '; color: #ffffff;'
                    "
                  >
                    {{ this.textValues.BOTON_GUARDAR }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mb-3" v-if="activeProfile.showBanner == 1">
      <div class="row">
        <div
          class="col-12 py-3"
          :style="'background-color: ' + this.activeProfile.colorBrand + ';'"
        >
          <h2
            class="
              text
              title
              col-12 col-md-6 col-xl-4
              mx-md-auto
              text-center
              mb-3
            "
          >
            <!-- https://www.amresortseu.com/wp-content/themes/adgtravel/img/logo.png -->
            <a
              :href="this.activeProfile.bannerHeader.url"
              class="btn btn-reset btn-block"
            >
              <img
                :src="this.activeProfile.bannerHeader.img"
                alt=""
                class="img img-w"
              />
            </a>
          </h2>
          <div class="wrapper d-flex w-100 flex-wrap justify-content-center">
            <div
              class="col-6 col-md-1 mb-3"
              v-for="element in banners"
              v-bind:key="element.img"
            >
              <a :href="element.url" class="btn btn-reset btn-block">
                <img
                  :src="element.img"
                  alt=""
                  class="img img-w img-auto"
                  width="50px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SELECTOR IDIOMÁTICO -->
    <div
      class="c-menu-lenguage position-fixed bg p-2 position position-z-1"
      style="background-color: #ffffff"
    >
      <i class="icon fas fa-angle-down"></i>
      <ul class="menu list-none mb-0">
        <li id="listEsp" class="item w-100">
          <a
            @click="changeLang('es')"
            :href="
              '/checkin?lang=es&profile=' +
              this.actualProfile +
              '&hotel=' +
              this.$route.query.hotel +
              '&localizator=' +
              this.$route.query.localizator +
              '&fechaentrada=' +
              this.$route.query.fechaentrada +
              '&fechasalida=' +
              this.$route.query.fechasalida +
              '&apellido=' +
              this.$route.query.apellido +
              '&id=' +
              this.$route.query.id +
              '&reserva=' +
              this.$route.query.reserva
            "
            class="btn btn-reset text text-uppercase p-1"
            >{{ this.textValues.ESPAÑOL }}</a
          >
        </li>
        <li id="listEng" class="item w-100">
          <a
            @click="changeLang('en')"
            :href="
              '/checkin?lang=en&profile=' +
              this.actualProfile +
              '&hotel=' +
              this.$route.query.hotel +
              '&localizator=' +
              this.$route.query.localizator +
              '&fechaentrada=' +
              this.$route.query.fechaentrada +
              '&fechasalida=' +
              this.$route.query.fechasalida +
              '&apellido=' +
              this.$route.query.apellido +
              '&id=' +
              this.$route.query.id +
              '&reserva=' +
              this.$route.query.reserva
            "
            class="btn btn-reset text text-uppercase p-1"
            >{{ this.textValues.INGLES }}</a
          >
        </li>
        <li id="listDe" class="item w-100">
          <a
            @click="changeLang('de')"
            :href="
              '/checkin?lang=de&profile=' +
              this.actualProfile +
              '&hotel=' +
              this.$route.query.hotel +
              '&localizator=' +
              this.$route.query.localizator +
              '&fechaentrada=' +
              this.$route.query.fechaentrada +
              '&fechasalida=' +
              this.$route.query.fechasalida +
              '&apellido=' +
              this.$route.query.apellido +
              '&id=' +
              this.$route.query.id +
              '&reserva=' +
              this.$route.query.reserva
            "
            class="btn btn-reset text text-uppercase p-1"
            >{{ this.textValues.ALEMAN }}</a
          >
        </li>
        <li id="listFr" class="item w-100">
          <a
            @click="changeLang('fr')"
            :href="
              '/checkin?lang=fr&profile=' +
              this.actualProfile +
              '&hotel=' +
              this.$route.query.hotel +
              '&localizator=' +
              this.$route.query.localizator +
              '&fechaentrada=' +
              this.$route.query.fechaentrada +
              '&fechasalida=' +
              this.$route.query.fechasalida +
              '&apellido=' +
              this.$route.query.apellido +
              '&id=' +
              this.$route.query.id +
              '&reserva=' +
              this.$route.query.reserva
            "
            class="btn btn-reset text text-uppercase p-1"
            >{{ this.textValues.FRANCES }}</a
          >
        </li>
      </ul>
    </div>
    <!-- FIN SELECTOR IDIOMÁTICO-->
  </div>
</template>

<script>
import pdf from "vue-pdf";
import json from "../../public/config/lang.json";
// import profilesJson from '../../public/config/profiles.json'

export default {
  components: {
    pdf,
  },
  name: "Checkin",
  data() {
    return {
      activeProfile: {},
      html: "",
      json: {},
      isScrollDown: false,
      finishCheck: false,
      show: true,
      //clienteIdUrl: this.$route.query.id,
      pdfList: [],
      pdfList2: [
        "Doc_1_H00_1_eng_txt.txt",
        "Doc_1_H00_1_esp_txt.txt",
        "Doc_1_H00_1_fra_txt.txt",
        "Doc_1_H00_1_ger_txt.txt",
        "Doc_1_H20_1_eng_txt.txt",
        "Doc_1_H20_1_esp_txt.txt",
        "Doc_1_H20_1_fra_txt.txt",
        "Doc_1_H20_1_ger_txt.txt",
        "Doc_1_H21_1_eng_txt.txt",
        "Doc_1_H21_1_esp_txt.txt",
        "Doc_1_H21_1_fra_txt.txt",
        "Doc_1_H21_1_ger_txt.txt",
        "Doc_1_H22_1_eng_txt.txt",
        "Doc_1_H22_1_esp_txt.txt",
        "Doc_1_H22_1_fra_txt.txt",
        "Doc_1_H22_1_ger_txt.txt",
        "Doc_1_H25_1_eng_txt.txt",
        "Doc_1_H25_1_esp_txt.txt",
        "Doc_1_H25_1_fra_txt.txt",
        "Doc_1_H25_1_ger_txt.txt",
        "Doc_2_H00_2_eng_txt.txt",
        "Doc_2_H00_2_esp_txt.txt",
        "Doc_2_H00_2_fra_txt.txt",
        "Doc_2_H00_2_ger_txt.txt",
        "Doc_3_HBL_3_eng_txt.txt",
        "Doc_3_HBL_3_esp_txt.txt",
        "Doc_3_HBL_3_fra_txt.txt",
        "Doc_3_HBL_3_ger_txt.txt",
        "policia_eng_txt.txt",
        "policia_esp_txt.txt",
        "policia_fra_txt.txt",
        "policia_ger_txt.txt",
      ],
      src: "",
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0,
      data: {
        reserva_id: "",
        fecha_entrada: "",
        fecha_salida: "",
        habitacion: "",
        num_documento: "",
        tipo_doc: "",
        fecha_expedición: "",
        pais_residencia: "",
        pais_nacimiento: "",
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
        acepta_terminos: false,
        covid: false,
        num_reserva: "",
        tipo_habitacion: "",
        regimen: "",
      },
      dataForRequest: {
        hotel: this.$route.query.hotel,
        localizador: this.$route.query.localizator,
        fecha_entrada: this.$route.query.fechaentrada,
        fecha_salida: this.$route.query.fechasalida,
        apellido: this.$route.query.apellido,
      },
      customersData: {},
      reservaData: {},
      actualProfile: "default",
      actualLang: "es",
      textValues: {},
      profilesJson: {},
      banners: [],
      hotelsData: "",
      style: {},
      client_data: {},
      api_url: "",
      showCanvas: '',
      reverseShowCanvas: '',
      /* CANVAS */
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false,
      /* ----------- */
    };
  },
  methods: {
    showCanvasFunct() {
      console.log(this.data.covid)
      if (this.data.covid) {
        this.showCanvas = 'visibility: visible;';
        this.reverseShowCanvas = "visibility: hidden;"
      } else {
        this.showCanvas = 'visibility: hidden;';
        this.reverseShowCanvas = "visibility: visible;"
      }
    },
    async loadProfiles() {
      await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.profilesJson = json;
          this.checkLang();
          this.checkProfile();
          this.getReserva();
          this.getFiles();
        });
    },

    async getFiles() {
      this.activeProfile.hotels.forEach((hotel) => {
        if (hotel.id == this.$route.query.hotel) {
          hotel.docs.forEach((documents) => {
            this.pdfList.push(documents);
          });
        }
      });

      let pdfsToPrint = [];

      let aux = this.pdfList;
      let actualFileLang = () => {
        if (this.$route.query.lang == "es") return "esp";
        if (this.$route.query.lang == "en") return "eng";
        if (this.$route.query.lang == "de") return "ger";
        if (this.$route.query.lang == "fr") return "fra";
      };

      aux.forEach((pdfName) => {
        if (this.$route.query.id == 1) {
          pdfsToPrint.push(pdfName + actualFileLang() + "_txt.txt");
        }

        if (this.$route.query.id != 1 && !pdfName.includes("Doc_1")) {
          pdfsToPrint.push(pdfName + actualFileLang() + "_txt.txt");
        }
      });

      // await this.axios.post("http://localhost:8081/getPDFs", {
      //   id: this.data.num_reserva,
      //   pdfList: pdfsToPrint,
      //   personaId: this.$route.query.id
      // }).then(response => {
      //   return;
      // }).catch(error => {
      //   console.error(error)
      // })

      let data = JSON.parse(localStorage.data);
      let extraData = JSON.parse(localStorage.extraData);

      if (data.sexo === "0") {
        data.sexo = this.textValues.HOMBRE;
      } else {
        data.sexo = this.textValues.MUJER;
      }

      await this.axios
        .post(this.activeProfile.custom_api_url + "/getHTMLText", {
          pdf: {
            pdfList: pdfsToPrint,
          },
          reserva: {
            nombre1: data.nombre,
            apellido1: data.primer_apellido,
            apellido2: data.segundo_apellido,
            numeroPasaporte: data.num_documento,
            domicilio: data.direccion,
            poblacion: data.poblacion,
            provincia: data.provincia,
            hotel: this.$route.query.hotel,
            fechaEntrada: this.$route.query.fechaentrada,
            fechaSalida: this.$route.query.fechasalida,
            habitacion: extraData.habitacion,
            nacionalidad: data.pais_nacimiento,
            tipoDocumento: data.tipo_doc,
            fechaExpedicion: data.fecha_expedicion,
            fechaNacimiento: data.fecha_nacimiento,
            postal: data.codigo_postal,
            movil: data.telefono,
            tipoHabitacion: data.tipo_habitacion,
            regimen: extraData.regimen,
            reserva: this.$route.query.reserva,
            email: data.email,
            sexo: data.sexo,
          },
        })
        .then((response) => {
          this.html = response.data;
          // console.log(this.html);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async getReserva() {
      this.hotels.forEach((item) => {
        if (item.id == this.data.hotel && item.api_url != "") {
          this.api_url = item.api_url;
        }
      });

      //this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida + "&Apellido=" + this.dataForRequest.apellido)
      await this.axios
        .get(
          this.api_url +
            "/GetAWAReservationPCI?Hotel=" +
            this.dataForRequest.hotel +
            "&Localizador=" +
            this.dataForRequest.localizador +
            "&FechaEntrada=" +
            this.dataForRequest.fecha_entrada +
            "&FechaSalida=" +
            this.dataForRequest.fecha_salida
        )
        .then((response) => {
          this.client_data = response.data;
          let clienteId = this.$route.query.id - 1;

          this.client_data.LSReservas.forEach((reserva) => {
            if (reserva.Reserva === this.$route.query.reserva) {
              this.customersData =
                reserva.LSReservaHabAWA[0].LSReservaCliente[clienteId];
            }
          });

          this.data = JSON.parse(localStorage.data);
          this.data.num_reserva = this.$route.query.reserva;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    scrollEvent({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.isScrollDown = true;
      }
    },

    toggleBodyClass(langId) {
      const el = document.body;
      if (langId === "langEsp") {
        document.getElementById("listEsp").classList.add("active");
        document.getElementById("listEng").classList.remove("active");
        document.getElementById("listDe").classList.remove("active");
        document.getElementById("listFr").classList.remove("active");
      }
      if (langId === "langEng") {
        document.getElementById("listEsp").classList.remove("active");
        document.getElementById("listDe").classList.remove("active");
        document.getElementById("listFr").classList.remove("active");
        document.getElementById("listEng").classList.add("active");
      }
      if (langId === "langDe") {
        document.getElementById("listEsp").classList.remove("active");
        document.getElementById("listEng").classList.remove("active");
        document.getElementById("listFr").classList.remove("active");
        document.getElementById("listDe").classList.add("active");
      }
      if (langId === "langFr") {
        document.getElementById("listEsp").classList.remove("active");
        document.getElementById("listEng").classList.remove("active");
        document.getElementById("listDe").classList.remove("active");
        document.getElementById("listFr").classList.add("active");
      }
    },

    isCanvasBlank(canvas) {
      return !canvas
        .getContext("2d")
        .getImageData(0, 0, canvas.width, canvas.height)
        .data.some((channel) => channel !== 0);
    },

    checkFinish() {
      if (this.isCanvasBlank(this.canvas) && this.data.covid) {
        this.finishCheck = true;
      }
    },

    async updateClientData() {
      let c = document.getElementById("sig-canvas");

      this.axios
        .post(this.activeProfile.custom_api_url + "/exportPDF", {
          pdfName: "PEPE",
          base64Sign: c.toDataURL(),
          reservaInfoForPDF: {
            reservaID: this.$route.query.reserva,
            clienteID: this.$route.query.id,
          },
        })
        .then((response) => {
          console.log("response");
        });

      this.client_data.LSReservas.forEach((reserva) => {
        if (reserva.Reserva === this.$route.query.reserva) {
          reserva.LSReservaHabAWA.forEach((habitacion) => {
            if (habitacion.Referencia == this.$route.query.referencia) {
              habitacion.LSReservaCliente.forEach((element) => {
                if (element.NumeroCliente == this.$route.query.id) {
                  let dc = element.DC;
                  element.IDDocumento = this.data.num_documento;
                  element.TipoDocumento = this.data.tipo_doc;
                  element.FechaExpedicion = this.data.fecha_expedicion;
                  element.PaisNacimiento = this.data.pais_nacimiento;
                  element.Email = this.data.email;
                  element.FechaNacimiento = this.data.fecha_nacimiento;
                  element.Sexo = this.data.sexo;
                  element.Nombre = this.data.nombre;
                  element.Apellido1 = this.data.primer_apellido;
                  element.Apellido2 = this.data.segundo_apellido;
                  element.AceptaInfo = this.data.acepta_terminos;
                  element.Firma = c.toDataURL("image/png").split(";base64,")[1];
                  (dc.ApartadoCorreos = null),
                    (dc.CodigoPostal = this.data.codigo_postal),
                    (dc.ComunidadAutonoma = ""),
                    (dc.Descripcion = null),
                    (dc.Direccion = this.data.direccion),
                    (dc.EMail = null),
                    (dc.Fax = null),
                    (dc.Pais = this.data.pais),
                    (dc.Poblacion = this.data.poblacion),
                    (dc.Provincia = this.data.provincia),
                    (dc.Telefono = this.data.telefono),
                    (dc.TelefonoMovil = null);
                }
              });
            }
          });
        }
      });

      this.client_data.LSReservas.forEach((reserva) => {
        if (reserva.Reserva === this.$route.query.reserva) {
          this.axios
            .post(this.api_url + "/PostAWAReservationGuests", {
              Hotel: this.$route.query.hotel,
              LSReservas: [
                {
                  HotelFactura: reserva.HotelFactura,
                  Reserva: reserva.Reserva,
                  Localizador: reserva.Localizador,
                  EntidadNegocio: reserva.EntidadNegocio,
                  LSReservaHabAWA: reserva.LSReservaHabAWA,
                  // 'LSReservaHabAWA': [
                  //   {
                  //     'Linea': reserva.LSReservaHabAWA[0].Linea,
                  //     'Referencia': reserva.LSReservaHabAWA[0].Referencia,
                  //     'LSReservaCliente': reserva.LSReservaHabAWA[0].LSReservaCliente
                  //   }
                  // ]
                },
              ],
            })
            .then((response) => {
              //console.log(reserva.LSReservaHabAWA[0].LSReservaCliente)
              this.$router.push(
                "/listausuarios?lang=" +
                  this.actualLang +
                  "&profile=" +
                  this.actualProfile +
                  "&hotel=" +
                  this.$route.query.hotel +
                  "&localizator=" +
                  this.$route.query.localizator +
                  "&fechaentrada" +
                  this.$route.query.fechaentrada +
                  "&fechasalida=" +
                  this.$route.query.fechasalida +
                  "&apellido=" +
                  this.$route.query.apellido +
                  "&reserva=" +
                  this.$route.query.reserva +
                  "&referencia=" +
                  this.$route.query.referencia
              );
            });
        }
      });
    },

    changeLang(lang) {
      if (lang === "es") {
        this.textValues = json.es;
        this.toggleBodyClass("langEsp");
        this.actualLang = "es";
      }
      if (lang === "en") {
        this.textValues = json.en;
        this.toggleBodyClass("langEng");
        this.actualLang = "en";
      }
      if (lang === "de") {
        this.textValues = json.de;
        this.toggleBodyClass("langDe");
        this.actualLang = "de";
      }
      if (lang === "fr") {
        this.textValues = json.fr;
        this.toggleBodyClass("langFr");
        this.actualLang = "fr";
      }
    },

    checkLang() {
      if (this.$route.query.lang === "es") {
        this.textValues = json.es;
        this.actualLang = "es";
      }

      if (this.$route.query.lang === "en") {
        this.textValues = json.en;
        this.actualLang = "en";
      }

      if (this.$route.query.lang === "de") {
        this.textValues = json.de;
        this.actualLang = "de";
      }

      if (this.$route.query.lang === "fr") {
        this.textValues = json.fr;
        this.actualLang = "fr";
      }
    },

    async loadLang() {
      await fetch("/config/lang.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.json = json;
        });
    },

    checkProfile() {
      let profile = this.$route.query.profile;
      let aux = this.profilesJson[profile];

      this.style = aux.style;
      this.actualProfile = profile;
      this.api_url = aux.api_url;
      this.hotels = aux.hotels;
      this.banners = aux.banner;
      this.activeProfile = aux;
    },

    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    drawLine(x1, y1, x2, y2) {
      this.canvas.beginPath();
      this.canvas.strokeStyle = "black";
      this.canvas.lineWidth = 1;
      this.canvas.moveTo(x1, y1);
      this.canvas.lineTo(x2, y2);
      this.canvas.stroke();
      this.canvas.closePath();
    },
    draw(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.finishCheck = true;
      }
    },
    getTouchPos(e) {
      if (e.touches) {
        if (e.touches.length == 1) {
          // Only deal with one finger
          var touch = e.touches[0]; // Get the information for finger #1
          this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
          this.x = e.offsetX;
          this.y = e.offsetY;
          this.finishCheck = true;
        }
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },
    clearCanvas() {
      this.canvas.clearRect(0, 0, 1000, 1000);
      this.finishCheck = false;
    },
    /* ------------------------------------------------------ */
  },

  created() {
    this.loadLang();
    this.loadProfiles();
  },

  mounted() {
    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    window.requestAnimFrame = (function (callback) {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    // Set up the canvas
    var canvas = document.getElementById("sig-canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#222222";
    ctx.lineWith = 2;

    // Set up the UI
    // Set up mouse events for drawing
    var drawing = false;
    var mousePos = { x: 0, y: 0 };
    var lastPos = mousePos;
      canvas.addEventListener(
      "mousedown",
      function (e) {
        drawing = true;
        lastPos = getMousePos(canvas, e);
      },
      false
    );
    canvas.addEventListener(
      "mouseup",
      function (e) {
        drawing = false;
      },
      false
    );
    canvas.addEventListener(
      "mousemove",
      function (e) {
        mousePos = getMousePos(canvas, e);
      },
      false
    );

    

    // Set up touch events for mobile, etc
    canvas.addEventListener(
      "touchstart",
      function (e) {
        mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        canvas.dispatchEvent(mouseEvent);
      },
      false
    );
    canvas.addEventListener(
      "touchend",
      function (e) {
        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
      },
      false
    );
    canvas.addEventListener(
      "touchmove",
      function (e) {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        canvas.dispatchEvent(mouseEvent);
        if (e.target == canvas) {
          e.preventDefault();
        }
      },
      false
    );

    // Prevent scrolling when touching the canvas
	document.body.addEventListener("touchstart", function (e) {
		if (e.target == canvas) {
			e.preventDefault();
		}
	}, false);
	document.body.addEventListener("touchend", function (e) {
		if (e.target == canvas) {
			e.preventDefault();
		}
	}, false);
	document.body.addEventListener("touchmove", function (e) {
		if (e.target == canvas) {
			e.preventDefault();
		}
	}, false);


    // Get the position of the mouse relative to the canvas
    function getMousePos(canvasDom, mouseEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top,
      };
    }

    // Get the position of a touch relative to the canvas
    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top,
      };
    }

    // Draw to the canvas
    function renderCanvas() {
      if (drawing) {
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        lastPos = mousePos;
      }
    }

    function clearCanvas() {
      canvas.width = canvas.width;
    }

    // Allow for animation
    (function drawLoop() {
      requestAnimFrame(drawLoop);
      renderCanvas();
    })();

    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */

    //this.$refs.iframe1.contentWindow.document.body.addEventListener('scroll', () => console.log('sdd'))
    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    // // // // // var c = document.getElementById("myCanvas");
    // // // // // this.canvas = c.getContext("2d");

    // // // // // const setUpCanvas = () => {
    // // // // //   // Feed the size back to the canvas.
    // // // // //   c.width = c.clientWidth;
    // // // // //   c.height = c.clientHeight;
    // // // // // };

    // // // // // const min = Math.min(c.height, c.width);

    // // // // // this.canvas.fillStyle = "#FFAA1D";
    // // // // // this.canvas.beginPath();
    // // // // // this.canvas.arc(c.width / 2, c.height / 2, min * 0.04, 0, 2 * Math.PI);
    // // // // // this.canvas.fill();

    // // // // // const drawComponents = (data) => {
    // // // // //   /* Code for drawing on the canvas, based on data */

    // // // // //   // Return the animation interval.
    // // // // //   return setInterval(() => {
    // // // // //     /* Code for changes to canvas over time. */
    // // // // //   }, 100);
    // // // // // };

    // const reset = (data, animationInterval) => {
    //   // Clear the canvas.
    //   this.canvas.clearRect(0, 0, c.width, c.height);

    //   // End the old animation.
    //   clearInterval(animationInterval);

    //   // Draw it all again.
    //   setUpCanvas();
    //   return drawComponents(data);
    // };

    // setUpCanvas();
    // let data = "";
    // let animationInterval = drawComponents(data);
    // //let mousePos = { x: 0, y: 0 };

    // setInterval(() => {
    //   // Update data.
    //   data = "cool new data";
    //   animationInterval = reset(data, animationInterval);
    // }, 60000);

    window.addEventListener("resize", () => {
      clearCanvas();
      this.finishCheck = false;
    });

    // document.addEventListener("mousewheel", this.mousewheel.bind(this), { passive: false });

    /* ------------------------------------------------------ */

    if (this.$route.query.lang === "es") {
      document.getElementById("listEsp").classList.add("active");
    } else if (this.$route.query.lang === "en") {
      document.getElementById("listEng").classList.add("active");
    } else if (this.$route.query.lang === "de") {
      document.getElementById("listDe").classList.add("active");
    } else if (this.$route.query.lang === "fr") {
      document.getElementById("listFr").classList.add("active");
    }
  },
};
</script>

<style scoped>

#sig-canvas {
  left: 0;
  top: 0;
  z-index: -1;
	background-color: white;	
  }
</style>