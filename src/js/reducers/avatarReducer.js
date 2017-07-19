export default function reducer(state={
    id: null,
    spriteULR: '',
    mainElement: {artId: 'face',id:'face',w:350,h:350,sx:.5,sy:.5,artSx:.4,artSy:.5},
    //activeControl:'face',
    //activeInput:null,
    eyes:{
      leftEye :       {artId: 'eye01', id:'leftEye', useEyeBall: true, eyeBallId:'eyeBall', bgColor:'white',useLids:true,useMask:true,w:60,h:60,x:38,y:42,sx:.5,sy:.5},
      rightEye :      {artId: 'eye01', id:'rightEye', useEyeBall: true, eyeBallId:'eyeBall', bgColor:'white',useLids:true,useMask:true,w:60,h:60,x:62,y:42,sx:.5,sy:.5},

    },
    elements: {
      rightEar :      {artId: 'ear', id:'rightEar',w:100,h:100,x:80,y:43,sx:.5,sy:.5},
      leftEar :       {artId: 'ear', id:'leftEar',w:100,h:100,x:-9,y:43,sx:.5,sy:.5},
      faceOver:       {artId: 'faceOver', id:'faceOver',w:350,h:350,x:50,y:-3,sx:.4,sy:.5},
      rightBrow :     {artId: 'brow', id:'rightBrow',w:60,h:60,x:64,y:33,sx:.5,sy:.5},
      leftBrow :      {artId: 'brow', id:'leftBrow',w:60,h:60,x:36,y:33,sx:.5,sy:.5},
      mouth :         {artId: 'mouth', id:'mouth',w:110,h:110,x:50,y:62,sx:.5,sy:.5},
      nose :          {artId: 'nose02', id:'nose',w:100,h:100,x:50,y:43,sx:.5,sy:.5},
    },
  }, action) {

    switch (action.type) {
      case "HIDE_ALL_CONTROLS": {
        return {...state}
      }
      /*case "TOGGLE_CONTROL": {
        console.log('otg',action.payload);
        return {...state, activeControl: action.payload}
      }
      case "TOGGLE_INPUT": {
        console.log('otg',action.payload);
        return {...state, activeInput: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
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
