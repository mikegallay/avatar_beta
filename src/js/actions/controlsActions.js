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

export function adjustKeyableValue(id,value) {
  return {
    type: "ADJUST_KEYABLE_VALUE",
    payload: {
      id: id,
      value: value
    }
  }
}
