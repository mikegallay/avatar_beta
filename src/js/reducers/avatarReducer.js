export default function reducer(state={
    id: null,
    spriteULR: '',
    mainElement: {artId: 'face',id:'face',w:350,h:350,sx:.4,sy:.5},
    //activeControl:'face',
    //activeInput:null,
    eyes:{
      leftEye :       {artId: 'eye01', id:'leftEye', useEyeBall: true, eyeBallId:'eyeBall', bgColor:'white',useLids:true,useMask:true,w:60,h:60,bx:38,by:42,brx:0,bry:0,brz:0,cx:'30%',cy:'30%'},
      rightEye :      {artId: 'eye01', id:'rightEye', useEyeBall: true, eyeBallId:'eyeBall', bgColor:'white',useLids:true,useMask:true,w:60,h:60,bx:62,by:42,brx:0,bry:180,brz:0,cx:'70%',cy:'30%'},

    },
    elements: {
      rightEar :      {artId: 'ear', id:'rightEar',w:100,h:100,bx:80,by:43,brx:0,bry:180,brz:0,cx:'83%',cy:'43%'},
      leftEar :       {artId: 'ear', id:'leftEar',w:100,h:100,bx:-9,by:43,brx:0,bry:180,brz:0,cx:'17%',cy:'43%'},
      faceOver:       {artId: 'faceOver', id:'faceOver',w:350,h:350,bx:50,by:0,brx:0,bry:0,brz:0,cx:'50%',cy:'0%'},
      rightBrow :     {artId: 'brow', id:'rightBrow',w:60,h:60,bx:64,by:33,brx:0,bry:180,brz:0,cx:'70%',cy:'20%'},
      leftBrow :      {artId: 'brow', id:'leftBrow',w:60,h:60,bx:36,by:33,brx:0,bry:0,brz:0,cx:'30%',cy:'20%'},
      mouth :         {artId: 'mouth', id:'mouth',w:110,h:110,bx:50,by:62,brx:0,bry:0,brz:0,cx:'50%',cy:'65%'},
      nose :          {artId: 'nose02', id:'nose',w:100,h:100,bx:50,by:43,brx:0,bry:0,brz:0,cx:'50%',cy:'50%'},
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
