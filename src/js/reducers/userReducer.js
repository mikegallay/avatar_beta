export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
      // spriteSheet: '/assets/icon-sprite-def01.svg',
      activeAvatar:'avatar02',
    },
    avatars:{
      avatar01:{
        spriteSheet: '/assets/icon-sprite-def01.svg',
        colors: {
          skinColor: 'lightblue',
          hairColor: 'cyan',
        },
        mainElement:      {
          face:   {artId:'face3',id:'face',w:350,h:350,sx:.5,sy:.5,artSx:.4,artSy:.5},
          hairBack:  'hair0',
        },
        eyes:{
          leftEye :       {artId: 'eye0', id:'leftEye', eyeColor:'lightblue',useEyeBall: true, eyeBallId:'eyeBall1', bgColor:'white',useLids:true,useMask:true,w:60,h:60,x:38,y:42,sx:.5,sy:.5},
          rightEye :      {artId: 'eye0', id:'rightEye', eyeColor:'lightgreen',useEyeBall: true, eyeBallId:'eyeBall1', bgColor:'white',useLids:true,useMask:true,w:60,h:60,x:62,y:42,sx:.5,sy:.5},
        },
        elements: {
          rightEar :      {artId: 'ear0', id:'rightEar',w:100,h:100,x:80,y:43,sx:.5,sy:.5},
          leftEar :       {artId: 'ear1', id:'leftEar',w:100,h:100,x:-9,y:43,sx:.5,sy:.5},
          //faceOver:       {artId: 'faceOver0', id:'faceOver',w:350,h:350,x:50,y:-3,sx:.45,sy:.5},
          rightBrow :     {artId: 'brow0', id:'rightBrow',w:60,h:60,x:64,y:33,sx:.5,sy:.5},
          leftBrow :      {artId: 'brow0', id:'leftBrow',w:60,h:60,x:36,y:33,sx:.5,sy:.5},
          mouth :         {artId: 'mouth0', id:'mouth',w:110,h:110,x:50,y:62,sx:.5,sy:.5},
          nose :          {artId: 'nose2', id:'nose',w:100,h:100,x:50,y:43,sx:.5,sy:.5},
          hairFront:      {artId: 'hair0', id:'hairFront',w:350,h:350,x:0,y:0,sx:.4,sy:.5},
        },
      },
      avatar02:{
        spriteSheet: '/assets/icon-sprite-def01.svg',
        colors: {
          skinColor: 'lightblue',
          hairColor: 'cyan',
        },
        mainElement:      {
          face:   {artId:'face0',id:'face',w:350,h:350,sx:.5,sy:.5,artSx:.4,artSy:.5},
          hairBack:  'hair0',
        },
        eyes:{
          leftEye :       {artId: 'eye0', id:'leftEye', eyeColor:'lightblue',useEyeBall: true, eyeBallId:'eyeBall1', bgColor:'white',useLids:true,useMask:true,w:60,h:60,x:38,y:42,sx:.5,sy:.5},
          rightEye :      {artId: 'eye0', id:'rightEye', eyeColor:'lightgreen',useEyeBall: true, eyeBallId:'eyeBall1', bgColor:'white',useLids:true,useMask:true,w:60,h:60,x:62,y:42,sx:.5,sy:.5},
        },
        elements: {
          rightEar :      {artId: 'ear0', id:'rightEar',w:100,h:100,x:80,y:43,sx:.5,sy:.5},
          leftEar :       {artId: 'ear0', id:'leftEar',w:100,h:100,x:-9,y:43,sx:.5,sy:.5},
          //faceOver:       {artId: 'faceOver0', id:'faceOver',w:350,h:350,x:50,y:-3,sx:.45,sy:.5},
          rightBrow :     {artId: 'brow0', id:'rightBrow',w:60,h:60,x:64,y:33,sx:.5,sy:.5},
          leftBrow :      {artId: 'brow0', id:'leftBrow',w:60,h:60,x:36,y:33,sx:.5,sy:.5},
          mouth :         {artId: 'mouth0', id:'mouth',w:110,h:110,x:50,y:62,sx:.5,sy:.5},
          nose :          {artId: 'nose0', id:'nose',w:100,h:100,x:50,y:43,sx:.5,sy:.5},
          hairFront:      {artId: 'hair0', id:'hairFront',w:350,h:350,x:0,y:0,sx:.4,sy:.5},
        },
      },
    },
    fetching: false,
    fetched: false,
    error: null,


  }, action) {

    switch (action.type) {
      case "TOGGLE_SPRITE_SHEET_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "TOGGLE_SPRITE_SHEET_FULFILLED": {
        // console.log('action OGGLE_SPRITE_SHEET_FULFILLED');
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: {...state.user, spriteSheet: action.payload},
        }
      }
      /*case "SET_USER_NAME": {
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
