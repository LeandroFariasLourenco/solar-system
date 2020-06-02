import CacheSelectors from './../../../common/js/CacheSelectors';

const Actions = {
  init: () => {
    Actions.openKeyboardOptions();
    Actions.activateCameraKeys();
  },

  openKeyboardOptions: () => {
    const $showActions = CacheSelectors['openOptions'],
      $avaliableActions = CacheSelectors['avaliableOptions'],
      $closeAvaliableActions = CacheSelectors['closeAvaliableOptions'];


    $showActions.addEventListener("click", () => {
      $avaliableActions.classList.remove("hidden");
      $showActions.classList.add("is--closed");
    })

    $closeAvaliableActions.addEventListener("click", () => {
      $avaliableActions.classList.add("hidden");
      $showActions.classList.remove("is--closed");
    })
  },

  activateCameraKeys: () => {
    const $keys = CacheSelectors['keyboardKeys'];
    document.addEventListener("keyup", event => {
      $keys.forEach(key => {
        if (!key.classList.contains("is--active")) return;
        key.classList.remove("is--active");
      })
    })

    document.addEventListener("keydown", event => {
      const movement = {
        87: () => {
          Actions.toggleActiveKey($keys[0], event.keyCode);
          window.camera.translateZ(-5);
        },
        65: () => {
          Actions.toggleActiveKey($keys[1], event.keyCode);
          window.camera.rotateY(+0.01);
        },
        68: () => {
          Actions.toggleActiveKey($keys[3], event.keyCode);
          window.camera.rotateY(-0.01);
        },
        83: () => {
          Actions.toggleActiveKey($keys[2], event.keyCode);
          window.camera.translateZ(+5);
        },
        "default": () => {
          return;
        }
      }
      movement[event.keyCode]();
    })
  },

  toggleActiveKey: (_domKey, _keycode) => {
    _domKey.classList.add("is--active");
    _domKey.setAttribute("keycode", _keycode);
  }
}

export default Actions;