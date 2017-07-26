export default function reducer(state={
    id: null,
    activeInput:null,
    assets:{
      eyes:['eye01','eye02'],
      ears:['ear'],
      eyeBall:['eyeBall'],
      mouth:['mouth'],
      nose:['nose01','nose02'],
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
