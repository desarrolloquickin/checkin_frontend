<template>
  <div class="body">
    <!-- HEAD FIJO CON BACKGROUND -->
        <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
            <img src="{URL_IMAGEN_FONDO}" alt="" class="img w-100 h-100 img-auto">
        </div>
        <!-- HEAD FIJO CON BACKGROUND -->

        <!-- FORM -->
        <div class="container-fluid principal mt-start mb-5">
            <div class="row justify-content-center">
                <div class="c-form p-3 py-lg-5 col-11 col-md-7 position position-z-1" style="background-color: #00a5b1;">
                    <div class="c-brand col-6 px-4 mx-auto mb-3 mb-lg-5">
                        <a href="" class="btn btn-reset btn-block">
                            <img src="https://www.aluahotels.com/uploads/logoshotel/svg/logo-alua-header.svg" alt="" class="img img-w img-auto">
                        </a>
                    </div>
                    <form class="form d-flex flex-wrap">
                        <div class="form-group col-12 col-md-6">
                            <label for="" class="text label">Nombre</label>
                            <input type="text" class="form-control text" placeholder="Nombre" required data-msg="{MENSAJE_DATO_OBLIGATORIO}">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="" class="text label">Apellido</label>
                            <input type="text" class="form-control text" placeholder="Apellido" required data-msg="{MENSAJE_DATO_OBLIGATORIO}">
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <label for="" class="text label">Mail</label>
                            <input type="email" class="form-control text" placeholder="Mail">
                        </div>
                        <div class="c-calendar form-group col-12 col-md-6 reservas__entrada">
                            <p for="" class="text label">Fecha de Nacimiento</p>
                            <div class="date text--date form-control d-lg-flex flex-lg-wrap mb-0 entrada text">
                                <span class="item dia text"></span>
                                <span class="item mes text"></span>
                                <span class="item anio text"></span>
                            </div>
                        </div>
                        <input type="hidden" name="arrival" id="MADG_fechaIn" />
                        <div class="form-group col-12 col-md-6">
                            <label for="" class="sr-only"></label>
                            <select name="" id="" class="form-control text">
                                <option value="">Sexo</option>
                                <option value="">Masculino</option>
                                <option value="">Femenino</option>
                            </select>
                        </div>
                        <div class="form-group col-12 col-md-6 d-flex align-items-center flex-row-reverse justify-content-start mb-4">
                            <label for="" class="text mr-auto mb-0" style="color: #ffffff;">Acepto termino</label>
                            <input type="checkbox" class="form-control form-control-check mr-3" aria-label="Checkbox for following text input">
                        </div>

                        <div class="col-12 mb-3">
                            <p class="text mb-2" style="color: #ffffff;">(*) opcional</p>
                            <p class="text" style="color: #ffffff;">(**) opcional</p>
                        </div>

                        <div class="form-group col-12 col-md-6">
                            <label for="" class="sr-only"></label>
                            <button type="button" class="btn btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">Guardar</button>
                        </div>

                        <div class="form-group col-12 col-md-6">
                            <label for="" class="sr-only"></label>
                            <button type="button" class="btn disable btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">Cancelar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <!-- FORM -->

        <!-- FOOTER DE MARCAS -->
        <div class="container-fluid mb-3">
            <div class="row">
                <div class="c-logos col-12 py-3" style="background-color: {HEX_BACKGROUND_FONDO_CUADRO_MARCAS};">
                    <h2 class="text title col-12 col-md-6 col-xl-4 mx-md-auto text-center mb-3">
                        <img src="{URL_LOGO_MARCA_AM_RESORTS}" alt="" class="img img-w">
                    </h2>
                    <div class="wrapper d-flex w-100 flex-wrap justify-content-lg-center">
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_1}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_2}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_3}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_N}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FIN FOOTER DE MARCAS-->

        <!-- SELECTOR IDIOMÁTICO -->
        <div class="c-menu-lenguage position-fixed p-2 position position-z-1" style="background-color: {HEX_BACKGROUND_CUADRO_IDIOMAS};">
            <i class="icon fas fa-angle-down"></i>
            <ul class="menu list-none mb-0">
                <li class="item active w-100">
                    <a href="{URL_LANG_1}" class="btn btn-reset text text-uppercase p-1">{LANG_1}</a>
                </li>
                <li class="item w-100">
                    <a href="{URL_LANG_2}" class="btn btn-reset text text-uppercase p-1">{LANG_2}</a>
                </li>
                <li class="item w-100">
                    <a href="{URL_LANG_3}" class="btn btn-reset text text-uppercase p-1">{LANG_3}</a>
                </li>
            </ul>
        </div>
        <!-- FIN SELECTOR IDIOMÁTICO-->

  </div>
</template>

<script>
// @ is an alias to /src
require ("./../static/js/index")


export default {
  name: 'Home',
  components: {
  }
}
</script>
