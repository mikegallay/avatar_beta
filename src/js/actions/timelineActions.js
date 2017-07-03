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

export function addKeyFrame(id,subTL){//prop,val,time) {
  return {
    type: "ADD_KEYFRAME",
    payload: {
      id: id,
      subTL: subTL,
      // val:val,
      // time: time
    }
  }
}
