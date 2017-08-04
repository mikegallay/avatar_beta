export function hideAllControls() {
  return {
    type: "HIDE_ALL_CONTROLS",
    payload: {
      activeControls: false
    }
  }
}

export function toggleActiveControl(id) {
  return {
    type: "TOGGLE_CONTROL",
    payload: id
  }
}

export function toggleActiveInput(input) {
  return {
    type: "TOGGLE_INPUT",
    payload: input
  }
}

export function setActiveInput(id,input) {
  return {
    type: "SET_INPUT",
    payload: {
      id: id,
      input:input
    }
  }
}

export function adjustKeyableValue(id,prop,value) {
  return {
    type: "ADJUST_KEYABLE_VALUE",
    payload: {
      id: id,
      prop:prop,
      value: value
    }
  }
}

/*export function swapKeyableArt(id,prop,value) {
  return {
    type: "SWAP_KEYABLE_ART",
    payload: {
      id: id,
      value: value
    }
  }
}*/
