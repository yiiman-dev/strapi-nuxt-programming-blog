<template>
    <script :id="session.name" v-html="session.content"/>
</template>

<script>
export default {
  props:[
    'session'
  ],
  name: "JSTag"
}
</script>
