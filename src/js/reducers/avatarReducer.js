export default function reducer(state={
    id: null,
    spriteULR: '',
    mainElement: {artId: 'face',id:'face',w:350,h:375},
    activeControl:'face',
    eyes:{
      leftEye :       {artId: 'eye02', id:'leftEye', useEyeBall: true, eyeBallId:'eyeBall', bgColor:'white',useLids:true,useMask:true,w:60,h:60,bx:'38%',by:'41%',brx:0,bry:0,brz:0,cx:'30%',cy:'30%'},
      rightEye :      {artId: 'eye02', id:'rightEye', useEyeBall: true, eyeBallId:'eyeBall', bgColor:'white',useLids:false,useMask:true,w:60,h:60,bx:'62%',by:'41%',brx:0,bry:180,brz:0,cx:'70%',cy:'30%'},

    },
    elements: {
      rightEar :      {artId: 'ear', id:'rightEar',w:45,h:100,bx:'83%',by:'43%',brx:0,bry:180,brz:0,cx:'83%',cy:'43%'},
      leftEar :       {artId: 'ear', id:'leftEar',w:45,h:100,bx:'17%',by:'43%',brx:0,bry:180,brz:0,cx:'17%',cy:'43%'},
      faceOver:       {artId: 'faceOver', id:'faceOver',w:350,h:375,bx:'50%',by:'0%',brx:0,bry:0,brz:0,cx:'50%',cy:'0%'},
      rightBrow :     {artId: 'brow', id:'rightBrow',w:55,h:25,bx:'62%',by:'35%',brx:0,bry:180,brz:0,cx:'70%',cy:'20%'},
      leftBrow :      {artId: 'brow', id:'leftBrow',w:55,h:25,bx:'38%',by:'35%',brx:0,bry:0,brz:0,cx:'30%',cy:'20%'},
      mouth :         {artId: 'mouth', id:'mouth',w:100,h:25,bx:'50%',by:'70%',brx:0,bry:0,brz:0,cx:'50%',cy:'70%'},
      nose :          {artId: 'nose02', id:'nose',w:50,h:40,bx:'50%',by:'55%',brx:0,bry:0,brz:0,cx:'50%',cy:'50%'},
    },
  }, action) {

    switch (action.type) {
      case "HIDE_ALL_CONTROLS": {
        return {...state}
      }
      case "TOGGLE_CONTROL": {
        console.log('otg',action.payload);
        return {...state, activeControl: action.payload}
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
