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

    mouthFX:1,
    noseFX:1,
    rightEarFX:1,
    leftEarFX:1,
    leftEyeFX:1,
    rightEyeFX:1,
    rightBrowFX:1,
    leftBrowFX:1,
    faceFX:1,
    faceOverFX:1,
    rightEyeBallFX: 1,
    leftEyeBallFX:1,

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
    leftEyeBallSY:null,

    mouthDX:null,
    noseDX:null,
    rightEarDX:null,
    leftEarDX:null,
    leftEyeDX:null,
    rightEyeDX:null,
    rightBrowDX:null,
    leftBrowDX:null,
    faceDX:null,
    faceOverDX:null,
    rightEyeBallDX: null,
    leftEyeBallDX:null,

    mouthDY:null,
    noseDY:null,
    rightEarDY:null,
    leftEarDY:null,
    leftEyeDY:null,
    rightEyeDY:null,
    rightBrowDY:null,
    leftBrowDY:null,
    faceDY:null,
    faceOverDY:null,
    rightEyeBallDY: null,
    leftEyeBallDY:null



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
