import CacheSelectors from './../../../common/js/CacheSelectors';

const Actions = {
  init: () => {
    Actions.openKeyboardOptions();
  },

  openKeyboardOptions: () => {
    const $showActions = CacheSelectors['openOptions'],
     $avaliableActions = CacheSelectors['avaliableOptions'],
     $closeAvaliableActions = CacheSelectors['closeAvaliableOptions'];
  

    $showActions.addEventListener("click" , () => {
      $avaliableActions.classList.remove("hidden");
      $showActions.classList.add("is--closed");
    })

    $closeAvaliableActions.addEventListener("click" , () => {
      $avaliableActions.classList.add("hidden");
      $showActions.classList.remove("is--closed");
    })
  }
}

export default Actions;