export function initializeTimeline(tl) {
  return {
    type: "INITIALIZE_TIMELINE",
    payload: tl
  }
}

export function initializeSubTimeline(id) {
  return {
    type: "INITIALIZE_SUB_TIMELINE",
    payload: id
  }
}
