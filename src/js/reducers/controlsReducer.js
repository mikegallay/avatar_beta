export default function reducer(state={
    activeControl:'face',
    activeInput:'rotate',

    mouthRZ:null,
    noseRZ:null,
    rightEarRZ:null,
    leftEarRZ:null,
    leftEyeRZ:null,
    rightEyeRZ:null,
    rightBrowRZ:null,
    leftBrowRZ:null,
    faceRZ:null,
    faceOverRZ:null,
    rightEyeBallRZ: null,
    leftEyeBallRZ:null,

    mouthSX:null,
    noseSX:null,
    rightEarSX:null,
    leftEarSX:null,
    leftEyeSX:null,
    rightEyeSX:null,
    rightBrowSX:null,
    leftBrowSX:null,
    faceSX:null,
    faceOverSX:null,
    rightEyeBallSX: null,
    leftEyeBallSX:null,

    mouthSY:null,
    noseSY:null,
    rightEarSY:null,
    leftEarSY:null,
    leftEyeSY:null,
    rightEyeSY:null,
    rightBrowSY:null,
    leftBrowSY:null,
    faceSY:null,
    faceOverSY:null,
    rightEyeBallSY: null,
    leftEyeBallSY:null

  }, action) {

    switch (action.type) {
      case "ADJUST_KEYABLE_VALUE": {
        var el = action.payload.id + action.payload.prop;
        return {...state, [el] : action.payload.value}
      }
      case "TOGGLE_CONTROL": {
        console.log('otg',action.payload);
        return {...state, activeControl: action.payload}
      }
      case "TOGGLE_INPUT": {
        console.log('otg',action.payload);
        return {...state, activeInput: action.payload}
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
