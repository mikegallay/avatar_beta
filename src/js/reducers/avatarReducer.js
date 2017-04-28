export default function reducer(state={
    id: null,
    mainElement: {id:'face',w:350,h:376},
    activeControl:'face',
    eyes:{
      rightEye :      {id:'rightEye',useEyeBall: true, bgColor:'#ffffff',useLids:true,useMask:true,w:50,h:50,bx:'62%',by:'41%',brx:0,bry:180,brz:0,cx:'70%',cy:'30%'},
      leftEye :       {id:'leftEye',useEyeBall: false, bgColor:'red',useLids:false,useMask:false,w:50,h:50,bx:'38%',by:'41%',brx:0,bry:0,brz:0,cx:'30%',cy:'30%'},
    },
    elements: {
      //rightEyeBall :  {id:'rightEyeBall',w:45,h:45,bx:'75%',by:'25%',cx:'75%',cy:'25%'},
      rightEar :     {id:'rightEar',w:45,h:108,bx:'83%',by:'43%',brx:0,bry:180,brz:0,cx:'83%',cy:'43%'},
      leftEar :     {id:'leftEar',w:45,h:108,bx:'17%',by:'43%',brx:0,bry:180,brz:0,cx:'17%',cy:'43%'},
      faceOver:       {id:'faceOver',w:350,h:376,bx:'50%',by:'0%',brx:0,bry:0,brz:0,cx:'50%',cy:'0%'},
      rightBrow :     {id:'rightBrow',w:55,h:25,bx:'62%',by:'35%',brx:0,bry:180,brz:0,cx:'70%',cy:'20%'},
      //leftEyeBall :   {id:'leftEyeBall',w:45,h:45,bx:'25%',by:'25%',cx:'25%',cy:'25%'},

      leftBrow :      {id:'leftBrow',w:55,h:25,bx:'38%',by:'35%',brx:0,bry:0,brz:0,cx:'30%',cy:'20%'},
      mouth :         {id:'mouth',w:100,h:25,bx:'50%',by:'70%',brx:0,bry:0,brz:0,cx:'50%',cy:'70%'},
      nose :          {id:'nose',w:50,h:40,bx:'50%',by:'55%',brx:0,bry:0,brz:0,cx:'50%',cy:'50%'},



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
