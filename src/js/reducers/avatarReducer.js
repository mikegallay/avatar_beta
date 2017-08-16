export default function reducer(state={
    id: null,
    activeInput:null,
    buildOrder:['face','skinColor','hair','hairColor','eye','eyeColor','ear','brow','mouth','nose'],
    assetStyles:{
      face:4,
      skinColor:5,
      hair:1,
      hairColor:5,
      eye:2,
      eyeColor:5,
      ear:3,
      brow:2,
      mouth:1,
      nose:5
    },
    assetVars:{
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
