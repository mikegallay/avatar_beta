import axios from "axios";

export function toggleSpriteSheet(newURL) {

  return function(dispatch) {
    axios.get(newURL)
      .then((response) => {
        dispatch({type: "TOGGLE_SPRITE_SHEET_FULFILLED", payload: newURL})
      })
      .catch((err) => {
        dispatch({type: "TOGGLE_SPRITE_SHEET_REJECTED", payload: err})
      })
  }
}

export function setBuildItemStyle(id,prop,value) {

  return {
    type: "SET_BUILD_ITEM_STYLE",
    payload: {
      id: id,
      prop:prop,
      value: value
    }
  }
}
/*export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Will",
      age: 35,
    }
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}*/
