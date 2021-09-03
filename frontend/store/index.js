export const state = () => ({
  globalOptions: {
    favicon: {url: ''},
    siteName: '',
    defaultSeo: {
      metaTitle: '',
      metaDescription: '',
      sharedImage: {url: ''}
    },
    ha_customized_panel: false
  },
  menu:[],
  locals:[
    {
      name:"English",
      code:"en",
    }
  ],
  menuFetched:false,
  globalFetched:false
})

export const mutations = {
  updateGlobal(state, newval) {
    state.globalOptions = newval;
    state.globalFetched=true;
  },
  updateMenu(state, newval) {
    state.menu = newval;
    state.menuFetched=true;
  },
  updateLocals(state,locals){

  }
}
export const getters = {
  global(state) {
    if (state.globalFetched) {
      return state.globalOptions;
    }else{
      return false;
    }
  },
  menu(state) {
    if (state.menuFetched) {
      return state.menu;
    }else{
      return false;
    }
  },
  locals(state){
    return state.locals;
  }

}
