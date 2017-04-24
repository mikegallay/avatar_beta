export default function reducer(state={
    id: null,
    mainElement: {id:'face',w:200,h:200},
    elements: [
      {id:'right-eye',w:50,h:50,bx:'75%',by:'25%',cx:'75%',cy:'25%'},
      {id:'left-eye',w:50,h:50,bx:'25%',by:'25%',cx:'25%',cy:'25%'},
      {id:'mouth',w:100,h:25,bx:'50%',by:'70%',cx:'50%',cy:'70%'},
      {id:'nose',w:20,h:40,bx:'50%',by:'40%',cx:'50%',cy:'40%'},

    ],
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      /*case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
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
