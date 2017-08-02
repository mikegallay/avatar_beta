export default function reducer(state={
    id: null,
    activeInput:null,
    assets:{
      eyes:['eye0','eye1'],
      ears:['ear'],
      eyeBall:['eyeBall'],
      mouth:['mouth0'],
      nose:['nose0','nose1'],
      brow:['brow'],
    },


  }, action) {

    switch (action.type) {
      case "HIDE_ALL_CONTROLS": {
        return {...state}
      }
    }

    return state
}
