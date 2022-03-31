# Checkin Frontend

## Instalación
Para empezar necesitamos instalar [node.js](https://nodejs.org/es/).

Una vez instalado, nos descargamos el proyecto y lo abrimos con nuestro IDE. En mi caso utilizo [Visual Studio Code](https://code.visualstudio.com/).

Al tener el proyecto abierto, abrimos una terminal, accedemos a la ruta del proyecto e instalamos la dependencias con el siguiente comando:


```
npm install
```

Una vez terminada la descarga podemos escribir lo siguiente para ejecutar el proyecto y así poder trabajar con él:

```
npm run serve
```

### Compilación del proyecto para producción
```
npm run build
```

## Características
- Esta webapp está programa en [Vue.js](https://vuejs.org/).

- Para su completo funcionamiento necesitamos tener en funcionamiento nuestro servidor backend.

## Los perfiles

- Aquí está la configuración general del proyecto que se generaliza por perfiles. Cada perfil se define por un nombre; ejemplo ‘alua’:

```
/public/config/config.json
```

Dentro de cada perfil tenemos los siguientes parametros:

	· “api_url”: String → url de la API REST de los hoteles
	
    · “custom_api_url”: String → url de nuestro backend de Java
	
    · “style”: Object : aquí podemos parametrizar colores, estilos y rutas de imagenes para tener 
    el estilo centralizado.
	
    · “showBanner”: Integer → ‘1’ si queremos mostrar el banner o ‘0’ si lo queremos 	deshabilitar.
	
    · “colorBrand”: String → estilo
	
    · “bannerHeader”: Object → imagen a mostrar en grande en el banner, junto a la URL para 	
	redireccionar.
	
    · “banner”: Object[] → array de todos los logos que se van a mostrar en el banner.
	
    · “hotels”: Object[] → lista de hoteles que se mostraran en la lista del formulario. Esta 
    compuesto por:

		- ID: String único que identifica al hotel.
		- Title: nombre del hotel.
		- Docs: array de los documentos que cada hotel necesita que el cliente le firme.
		- API_URL: este campo por lo general está vacío y existe en caso de que un hotel
        requiera atacar a otra REST API en concreto ignorando así la API general.
		- CamposObligatorios: contiene los campos que ha de rellenar el cliente
        obligatoriamente u opcionalmente en el formulario de datos.