<template>

  <!--header start-->

  <header id="site-header" class="header header-3">
    <div id="header-wrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg">
              <Logo :global="global"/>

              <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarNavDropdown" aria-expanded="false" :aria-label="$t('Change navigation')">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto mr-auto">
                  <!-- Home -->
                  <li v-for="(ParentMenu,parentIndex) in menus" :class="ParentMenu.childs.length>0?'nav-item dropdown':'nav-item' " data-toggle="hover">
                    <p-link :class="ParentMenu.childs.length>0?(parentIndex===0?'active nav-link dropdown-toggle':'nav-link dropdown-toggle'):'nav-link '" :to="ParentMenu.url" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ ParentMenu.title }}
                    </p-link>
                    <div v-if="ParentMenu.childs.length>0" class="dropdown-menu">
                      <ul class="list-unstyled">
                        <li v-for="(childMenu,childIndex) in ParentMenu.childs">
                          <p-link :to="childMenu.url">{{ childMenu.title }}</p-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="right-nav align-items-center d-flex justify-content-end list-inline">
                <ul class="navbar-nav ml-auto mr-auto ">
                  <!-- Home -->
                  <li class="nav-item dropdown" data-toggle="hover">

                    <a class="nav-link active dropdown-toggle " href="#" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>{{
                        $i18n.locale
                      }} </span>
                    </a>
                    <div class="dropdown-menu">
                      <ul class="list-unstyled">
                        <li v-if="language.code!==$i18n.locale" v-for="(language,langIndex) in $i18n.locales">
                          <nuxt-link :prefetch="true"
                              :to="switchLocalePath(language.code)">{{ language.name }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div class="header-call d-flex align-items-center ml-3">
                  <h5>{{ $t('Call:') }} </h5>
                  <a :href="'tel:'+global.phone_number"><b>{{ global.phone_number }}</b></a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!--header end-->
</template>

<script>
import Logo from "./NuxtLogo";
import PLink from "./Base/p-link";

export default {
  name: "LayoutTopHeader",
  components: {PLink, Logo},
  props: ['menus', 'global']
}
</script>

<style scoped>

</style>
