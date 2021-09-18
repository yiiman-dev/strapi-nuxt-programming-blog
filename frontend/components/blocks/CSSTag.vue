<template>
  <style :id="session.name" v-html="session.stylesheet"/>
</template>

<script>
export default {
  props:['session'],
  name: "CSSTag"
}
</script>


