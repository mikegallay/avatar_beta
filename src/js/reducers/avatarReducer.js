export default function reducer(state={
    id: null,
    activeInput:null,
    assets:{
      eyes:['','a'],
      ears:[''],
      eyeBall:[''],
      mouth:['','a','b','c','e','f'],
      nose:[''],
      brow:[''],
    },


  }, action) {

    switch (action.type) {
      case "HIDE_ALL_CONTROLS": {
        return {...state}
      }
    }

    return state
}
