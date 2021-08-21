

let replaceAt = function (string, find, replacement) {

  let findIndex=string.indexOf(find)
  return string.substr(0, findIndex) + replacement + string.substr(findIndex + find.length+1);
}
let addAfter=function (string,find,replacement){
  let findIndex=string.indexOf(find);

  if (findIndex===-1){
    return  string;
  }
  return string.substr(0, findIndex+find.length) + replacement + string.substr(findIndex + find.length+1);
}
var getObjectByValue = function (array, key, value) {
  return array.filter(function (object) {
    return object[key] === value;
  });
};

export  function md_render(app,content){
  let out= app.$md.render(content);
  let ret;
  out= String(out);
  ret= '<div class="markdowned">'+addAfter(out,"src=",`"${process.env.strapiBaseUri}`)+'</div>';
  return ret;
}
