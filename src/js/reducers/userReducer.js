export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
      spriteSheet: '/assets/icon-sprite-def02.svg',
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
