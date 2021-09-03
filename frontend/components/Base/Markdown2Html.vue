<template>

  <div data-server-rendered="true" class="nuxt-content" v-html="md_render(this,content)"></div>
</template>

<script>
import {md_render} from "../../helpers/functions";

export default {
  name: "Markdown2Html",
  props:['content'],
  methods:{md_render}
}
</script>
<style scoped>
.nuxt-content>>>code[class*="language-"], .nuxt-content>>>pre[class*="language-"] {
  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: normal;
  background: #2b3846;
  text-shadow: none;
}
.nuxt-content>>>pre[class*="language-"] {

  position: relative;
  padding: 3rem;
  padding-top: 4rem;
  border-radius: 8px;
  border: 1px solid #e1e1e8;
  margin-bottom: 1rem;
}
.nuxt-content>>>pre[class*="language-"] {
  -webkit-mask: url(/images/code-mask.svg);
  mask: url(/images/code-mask.svg);
  -webkit-mask-repeat: no-repeat;

}
.nuxt-content>>>pre[class*="language-"] {
  margin: .5em 0;
  overflow: auto;
  background: #2b3846;
}
.nuxt-content>>>pre[class*="language-"] {
  position: relative;

  border-radius: 8px;
  border: 1px solid #e1e1e8;
  margin-bottom: 1rem;
}


.nuxt-content>>>code, .nuxt-content>>>code[class*="language-"], .nuxt-content>>>pre[class*="language-"] {
  font-family: FiraCode,Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
  font-size: 12px;
  color: #31ba99;
  text-align: left;
  padding: 21px;
  padding-top: 31px;
}


.nuxt-content>>>pre[class*="language-"]::before {
  font-family: "iAWriterDuo","Roboto Mono",serif;
  font-size: 10px;
  font-weight: 600;
  text-align: right;
  padding: 0 .35rem;
  border-radius: 5px;
  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);
  box-shadow: 0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);
  z-index: 2;
  position: absolute;
  left: 10px;
  right: auto;
  float: left;
  top: 10px;
}

.nuxt-content>>>pre[class*="language-javascript"]::before {
  content: "Javascript";
  background: linear-gradient(135deg,#f2cd48,#fd803f);
  color: #2b3846;
}
.nuxt-content>>>pre[class*="language-html"]::before {
  content: "Html";
  background: linear-gradient(135deg,#09e485,#0291e3);
  color: #f8f9fa;
}
.nuxt-content>>>pre[class*="language-css"]::before {
  content: "Css";
  background: linear-gradient(135deg,#8019c6,#2f93cc);
  color: #f8f9fa;
}
.nuxt-content>>>pre[class*="language-bash"]::before {
  content: "Bash";
  background: linear-gradient(135deg,#8019c6,#2f93cc);
  color: #f8f9fa;
}
.nuxt-content>>>h2::before {
  left: -30px;
  bottom: -17px;
  width: 75px;
  height: 75px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiNBN0YwQkEiIGQ9Ik0zMC4zLC00My4zQzQ0LjYsLTM4LDY1LjIsLTM4LjYsNzMuNywtMzAuNUM4Mi4zLC0yMi41LDc4LjksLTUuOCw2OS44LDUuMkM2MC43LDE2LjIsNDUuOCwyMS41LDM2LDI5LjFDMjYuMSwzNi43LDIxLjQsNDYuNiwxMS42LDU4QzEuOCw2OS4zLC0xMyw4Mi4xLC0yNy43LDgzQy00Mi40LDgzLjksLTU2LjksNzIuOSwtNjIuMSw1OC41Qy02Ny4yLDQ0LjEsLTYzLDI2LjMsLTYwLjMsMTEuN0MtNTcuNywtMi44LC01Ni41LC0xNC4xLC01My41LC0yNkMtNTAuNSwtMzcuOSwtNDUuNSwtNTAuNSwtMzYuMywtNTguMUMtMjcuMSwtNjUuNywtMTMuNSwtNjguMiwtMi44LC02My45QzgsLTU5LjcsMTYsLTQ4LjYsMzAuMywtNDMuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIiAvPgo8L3N2Zz4K);
}
.nuxt-content>>>h3::before {
  left: -18px;
  bottom: -10px;
  width: 50px;
  height: 50px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiNGMUMyMUIiIGQ9Ik0xOS4yLC0yM0MyNC4zLC0xOC43LDI3LjIsLTEyLDMyLjcsLTIuNUMzOC4yLDcsNDYuNCwxOS4yLDQ2LjEsMzMuMkM0NS45LDQ3LjEsMzcuMiw2Mi43LDI2LjEsNjIuOEMxNS4xLDYyLjksMS43LDQ3LjYsLTExLjIsMzkuM0MtMjQuMSwzMC45LC0zNi41LDI5LjYsLTQ1LDIyLjRDLTUzLjUsMTUuMSwtNTgsMi4xLC01Ni41LC0xMC42Qy01NSwtMjMuMiwtNDcuNCwtMzUuMywtMzcsLTM4LjZDLTI2LjYsLTQxLjksLTEzLjMsLTM2LjQsLTMuMSwtMzIuN0M3LjEsLTI5LDE0LjIsLTI3LjIsMTkuMiwtMjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==);
}



.nuxt-content>>>.warning{
  background: #ffa50021;
  padding: 3px 11px;
}
.nuxt-content>>>.warning >>>a{
  color: orange;
}
.nuxt-content>>>code,.nuxt-content>>>p>>>code{
  background: #0080000a;
  border-radius: 3px;
  padding: 5px;
  color: #0028ff5e;
}
.nuxt-content>>>h1::before, .nuxt-content>>> h2::before, .nuxt-content>>> h3::before, .nuxt-content>>> h4::before {
  content: "";
  display: block;
  /*position: absolute;*/
  /*opacity: .4;*/
  /*z-index: -1;*/
  margin-bottom: -50px;
}


</style>
