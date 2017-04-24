export function hideAllControls() {
  return {
    type: "HIDE_ALL_CONTROLS",
    payload: {
      isActive: false
    }
  }
}

export function toggleControl(isActive) {
  return {
    type: "TOGGLE_CONTROL",
    payload: {
      isActive: !isActive
    }
  }
}
