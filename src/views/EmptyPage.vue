<template>
  <div>
  </div>
</template>

<script>


export default {
  mounted() {
    let lang = this.$route.query.lang;
    let profile = this.$route.query.profile;

    if (lang == undefined) lang = "es";
    if (profile == undefined) profile = "alua";

    this.$router.push("/busqueda?lang=" + lang + "&profile=" + profile)
  }
 
}
</script>
