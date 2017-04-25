export default function reducer(state={
    init: false,
    masterTimeline: null,
    subTimelines: {},
  }, action) {

    switch (action.type) {
      case "INITIALIZE_TIMELINE": {
        console.log('initt',action.payload);
        return {...state, masterTimeline: action.payload}
      }
      /*  case "REMOVE_KEYFRAME": {
        return {...state}
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
