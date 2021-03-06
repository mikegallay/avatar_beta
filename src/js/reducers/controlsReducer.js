const keyableElements= [
  {name:'Right Ear',val:'rightEar'},
  {name:'Left Ear',val:'leftEar'},
  {name:'Right Eye',val:'rightEye'},
  {name:'Left Eye',val:'leftEye'},
  // {name:'Right Lid',val:'rightEyeLid'},
  // {name:'Left Lid',val:'leftEyeLid'},
  {name:'Mouth',val:'mouth'},
  {name:'Right Brow',val:'rightBrow'},
  {name:'Left Brow',val:'leftBrow'},
  {name:'Nose',val:'nose'},
  {name:'Eye Focus',val:'eyeFocus'},
  {name:'Face',val:'face'},
]

const positionID = ['RX','RY','RZ','FX','FY','SX','SY','DX','DY','ID'];

let activeInputs = {};
let initPositionValues = {leftEyeBallDX:null,leftEyeBallDY:null,rightEyeBallDX:null,rightEyeBallDY:null};

for (var id of positionID) {
  // initPositionValues[id] = {};
  for (var ke of keyableElements){
    var val = (id=='FY' || id=='FX') ? 1 : null;
    if (id=='FX' && ke.val == 'rightEye') val = -1;
    if (id=='FX' && ke.val == 'rightBrow') val = -1;
    // if (id='SX' || id=='SY') val = .5;
    initPositionValues[ke.val + id] = val;

  }
}

for (var ke of keyableElements){
  activeInputs[ke.val] = 'move';
}

export default function reducer(state={
    keyableElements : keyableElements,
    initPositionValues : initPositionValues,
    activeInputs : activeInputs,
    activeControl:'face',
    activeInput:'rotate',

  }, action) {

    switch (action.type) {
      case "ADJUST_KEYABLE_VALUE": {
        let el = action.payload.id + action.payload.prop;
        return {
          ...state,
          initPositionValues: {
            ...state.initPositionValues,
            [el] : action.payload.value
          }
        }
      }
      /*case "SWAP_KEYABLE_ART": {
        let el = action.payload.id + 'ID';
        return {
          ...state,
          initPositionValues: {
            ...state.initPositionValues,
            [el] : action.payload.value
          }
        }
      }*/
      case "TOGGLE_CONTROL": {
        // console.log('otg',action.payload);
        return {...state, activeControl: action.payload}
      }
      case "TOGGLE_INPUT": {
        // console.log('otg',action.payload);
        return {...state, activeInput: action.payload}
      }
      case "SET_INPUT": {
        // console.log('set active input',action.payload);
        return {
          ...state,
          activeInputs: {
            ...state.activeInputs,
            [action.payload.id] : action.payload.input
          }
        }
      }
    }

    return state
}
