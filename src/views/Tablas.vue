<template>
  <div class="">
    <h1>Tablas</h1>
    <table>
      <tr>
        <th>Cliente</th>
        <th>Nombre</th>
        <th>PAX</th>
        <th>Fecha de entrada</th>
        <th>Fecha de salida</th>
        <th>Núm. de documento</th>
        <th>T</th>
        <th>País</th>
      </tr>
      <tr v-for="cliente in clientes" v-bind:key="cliente.id" @click="onRowClick(cliente)">
        <td>{{cliente.id}}</td>
        <td>{{cliente.nombre}}</td>
        <td>{{cliente.pax}}</td>
        <td>{{cliente.fecha_entrada}}</td>
        <td>{{cliente.fecha_salida}}</td>
        <td>{{cliente.num_documento}}</td>
        <td>{{cliente.t}}</td>
        <td>{{cliente.pais}}</td>
      </tr>
    </table>

  </div>
</template>

<script>

export default {
  name: 'Tablas',
  data() {
    return {
      clientes: [
        {
          "id"           : 1,
          "nombre"       : "LOPEZ, JUAN",
          "pax"          : 3,
          "fecha_entrada": "27/05/2020",
          "fecha_salida" : "31/08/2020",
          "num_documento": "43231645V",
          "t"            : "T",
          "pais"         : "España"
        },
        {
          "id"           : 2,
          "nombre"       : "GOMEZ, ANDREA",
          "pax"          : 3,
          "fecha_entrada": "27/05/2020",
          "fecha_salida" : "31/08/2020",
          "num_documento": "43231646V",
          "t"            : "T",
          "pais"         : "España"
        },
        {
          "id"           : 3,
          "nombre"       : "SANCHEZ, MIGUEL",
          "pax"          : 3,
          "fecha_entrada": "27/05/2020",
          "fecha_salida" : "31/08/2020",
          "num_documento": "43231644V",
          "t"            : "T",
          "pais"         : "España"
        },
        {
          "id"           : 4,
          "nombre"       : "DURAN, MARIA",
          "pax"          : 3,
          "fecha_entrada": "27/05/2020",
          "fecha_salida" : "31/08/2020",
          "num_documento": "43231544V",
          "t"            : "T",
          "pais"         : "España"
        },
        {
          "id"           : 5,
          "nombre"       : "MUÑOZ, JOSE",
          "pax"          : 3,
          "fecha_entrada": "27/05/2020",
          "fecha_salida" : "31/08/2020",
          "num_documento": "43231694V",
          "t"            : "T",
          "pais"         : "España"
        },
      ]
    }
  },
  methods: {
    onRowClick(item) {
      console.log(item)
      this.$router.push("/form")
    }
  }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

tr:not(:first-child):hover {
  background-color: #0088ff;
}
</style>
