const keyableElements= [
  {name:'Right Ear',val:'rightEar'},
  {name:'Left Ear',val:'leftEar'},
  {name:'Right Eye',val:'rightEye'},
  {name:'Left Eye',val:'leftEye'},
  {name:'Mouth',val:'mouth'},
  {name:'Right Brow',val:'rightBrow'},
  {name:'Left Brow',val:'leftBrow'},
  {name:'Nose',val:'nose'},
  {name:'Face',val:'face'},
]

const positionID = ['RX','RY','RZ','FX','SX','SY','DX','DY'];
/*const positionID = [
  {id:'RX',val:null},
  {id:'RY',val:null},
  {id:'RZ',val:null},
  {id:'FX',val:1},
  {id:'SX',val:.5},
  {id:'SY',val:.5},
  {id:'DX',val:0},
  {id:'DY',val:0}
];*/

let initPositionValues = {};

for (var id of positionID) {
  // initPositionValues[id] = {};
  for (var ke of keyableElements){
    var val = (id=='FX') ? 1 : null;
    // if (id='SX' || id=='SY') val = .5;
    initPositionValues[ke.val + id] = val;
  }
}

// console.log('initPositionValues',initPositionValues);

export default function reducer(state={
    keyableElements : keyableElements,
    initPositionValues : initPositionValues,

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
