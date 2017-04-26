export default function reducer(state={
    id: null,
    mainElement: {id:'face',w:350,h:350},
    activeControl:'face',
    eyes:{
      rightEye :      {id:'rightEye',w:50,h:50,bx:'62%',by:'41%',cx:'70%',cy:'30%'},
      leftEye :       {id:'leftEye',w:50,h:50,bx:'38%',by:'41%',cx:'30%',cy:'30%'},
    },
    elements: {
      //rightEyeBall :  {id:'rightEyeBall',w:45,h:45,bx:'75%',by:'25%',cx:'75%',cy:'25%'},
      faceOver:       {id:'faceOver',w:350,h:350,bx:'50%',by:'0%',cx:'50%',cy:'0%'},
      rightBrow :     {id:'rightBrow',w:55,h:25,bx:'62%',by:'35%',cx:'70%',cy:'20%'},
      //leftEyeBall :   {id:'leftEyeBall',w:45,h:45,bx:'25%',by:'25%',cx:'25%',cy:'25%'},

      leftBrow :      {id:'leftBrow',w:55,h:25,bx:'38%',by:'35%',cx:'30%',cy:'20%'},
      mouth :         {id:'mouth',w:100,h:25,bx:'50%',by:'70%',cx:'50%',cy:'70%'},
      nose :          {id:'nose',w:50,h:40,bx:'50%',by:'55%',cx:'50%',cy:'50%'},

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
