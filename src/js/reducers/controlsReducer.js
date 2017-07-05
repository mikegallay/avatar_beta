export default function reducer(state={
    mouthZ:null,
    noseZ:null,
    rightEarZ:null,
    leftEarZ:null,
    leftEyeZ:null,
    rightEyeZ:null,
    rightBrowZ:null,
    leftBrowZ:null,
    faceZ:null,
    faceOverZ:null,
    rightEyeBallZ: null,
    leftEyeBallZ:null

  }, action) {

    switch (action.type) {
      case "ADJUST_KEYABLE_VALUE": {
        var el = action.payload.id + action.payload.prop;
        return {...state, [el] : action.payload.value}
      }
      /*case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.payload},
        }
      }
      case "SET_USER_AGE": {
        return {
          ...state,
          user: {...state.user, age: action.payload},
        }
      }*/
    }

    return state
}
