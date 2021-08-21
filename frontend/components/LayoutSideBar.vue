<template>
  <aside id="mcgill-aside">
    <!-- Logo -->
    <div class="mcgill-logo">
      <NuxtLogo :global="global"/>
      <h1>
        <NuxtLink to="/">
          {{ global.siteName }}
        </NuxtLink>
        <span>{{ global.siteSubName }}</span>
      </h1>
    </div>
    <!-- Menu -->
    <nav id="mcgill-main-menu">
      <ul>
        <li v-for="item in list" :class="item.is_active?'active':''">
          <NuxtLink :to="item.url">
            <i :class="'fa fa-'+item.icon"></i>
            {{item.title}}
          </NuxtLink>

        </li>
      </ul>
    </nav>
    <!-- Info -->
    <div class="mcgill-contact-info">
      <div class="feat-inner">
        <div class="feat-info">
          <h6>{{global.phone_title}}</h6>
          <h5><a :href="'tel:'+global.phone_number">{{ global.phone_number }}</a></h5>
        </div>
      </div>
    </div>
    <!-- Sidebar Footer -->
    <div class="mcgill-footer">
      <ul>
        <li v-for="item in global.sosials">
          <a :href="item.url"><i :class="'fab fa-'+item.icon"></i></a>
        </li>
      </ul>
    </div>
    <div class="copyright text-center">
      <p>&copy;{{global.copywrite_text}}</p>
    </div>
  </aside>
</template>

<script>

import NuxtLogo from "./NuxtLogo";
export default {
  name: "LayoutSideBar",
  components: {NuxtLogo},
  props:
  [

      'list',
      'global',
      'cell_phone',

  ]
}
</script>

<style scoped>
@import 'assets/css/font-awesome.min.css';
</style>
