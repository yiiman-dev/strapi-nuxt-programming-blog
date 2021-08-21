<template>
  <!-- Clients -->
  <div class="mcgill-clients clients">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 owl-carousel owl-theme">
          <div v-for="sec in session.companies" class="client-logo  radius-5">
            <a  href="#"><img class="radius-5 elevation-7" :src="sec.logo?getStrapiMedia(sec.logo.url):''" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getStrapiMedia} from "../../utils/medias";


export default {
  name: "LogosBlock",
  props:['session'],
  methods:{getStrapiMedia}
}
</script>

<style scoped>

</style>
