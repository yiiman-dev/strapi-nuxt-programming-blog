

var getObjectByValue = function (array, key, value) {
  return array.filter(function (object) {
    return object[key] === value;
  });
};

export  function md_render(app,content){
  let out= app.$md.render(content);
  let ret;
  out= String(out);
  ret= addAfter(out,"src=",`"${process.env.strapiBaseUri}`);
  // ret=replaceAt(ret,'<code>','<pre class="line-numbers language-bash"><code>');
  // ret=replaceAt(ret,'</code>','</pre></code>');
  return ret;
}
export  function replaceAt(string, find, replacement) {
  string=String(string);
  let out;
  let findIndex=string.indexOf(find);
  // console.log('string:'+string);
  // console.log('findIndex:'+findIndex);
  // console.log('find.length:'+find.length);
  // console.log('o1:'+String(string.substr(0, findIndex)));
  // console.log('o2:'+String(string.substr(findIndex + find.length)));
  // if (findIndex===0){
    out =String(string.substr(0, findIndex)) + replacement + String(string.substr(findIndex + find.length));
  // }else{
  //   out =String(string.substr(0, findIndex)) + replacement + String(string.substr(findIndex + find.length+1));
  // }
  // console.log('out:'+out+"\n\n\n");
  return out;
}
export function addAfter(string,find,replacement){
  let findIndex=string.indexOf(find);

  if (findIndex===-1){
    return  string;
  }
  return string.substr(0, findIndex+find.length) + replacement + string.substr(findIndex + find.length+1);
}

/**
 * Generate tag classes for sections
 * @param section
 * @param cls
 * @return {string|*}
 */
export function sectionClasses(section,cls){
  return section.boxStyle && section.boxStyle.classBackground?cls+' '+section.boxStyle.classBackground+'-bg':cls;
}


/**
 * Generate Section boxes Background, if exist
 * you should use this function in (v-bind:data-bg-img)
 * @param section
 * @return {string|boolean}
 */
export function sectionBgImg(section) {
  if (section.boxStyle && section.boxStyle.patternBackground){
    return '/images/bg/' + replaceAt(section.boxStyle.patternBackground, 'bg', '') + '.png';
  }else{
    return false;
  }
}

export function sectionBgColor(section){
  if (section.boxStyle && section.boxStyle.hexBackground){
    return section.boxStyle.hexBackground
  }else{
    return '';
  }
}
