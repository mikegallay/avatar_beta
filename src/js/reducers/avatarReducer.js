export default function reducer(state={
    id: null,
    mainElement: {id:'face',w:200,h:200},
    activeControl:'face',
    elements: {
      rightEye  : {id:'rightEye',w:50,h:50,bx:'75%',by:'25%',cx:'75%',cy:'25%'},
      rightBrow : {id:'rightBrow',w:55,h:5,bx:'75%',by:'20%',cx:'75%',cy:'20%'},
      leftEye   : {id:'leftEye',w:50,h:50,bx:'25%',by:'25%',cx:'25%',cy:'25%'},
      leftBrow  : {id:'leftBrow',w:55,h:5,bx:'25%',by:'20%',cx:'25%',cy:'20%'},
      mouth     : {id:'mouth',w:100,h:25,bx:'50%',by:'70%',cx:'50%',cy:'70%'},
      nose      : {id:'nose',w:20,h:40,bx:'50%',by:'40%',cx:'50%',cy:'40%'},
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
