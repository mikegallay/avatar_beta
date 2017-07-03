export default function reducer(state={
    init: false,
    masterTimeline: null,
    subTimelines: {},
    //make subTimelines build like this?
    // subTimelines : {
      //rightEye: {
        //tl: tl,
        //changed: false
      //}
    // }
  }, action) {

    switch (action.type) {
      case "INITIALIZE_TIMELINE": {
        // console.log('initt',action.payload);
        return {...state, masterTimeline: action.payload}
      }
      case "INITIALIZE_SUB_TIMELINE": {
        const id = action.payload;
        let tl = new TimelineMax();

        // console.log('init_sub',action.payload);
        return {
          ...state,
          subTimelines: {
            ...state.subTimelines,
            [id] : tl
          }
        }
      }
       case "ADD_KEYFRAME": {
         console.log('ADD_KEYFRAME',action.payload);
        //  let newTL = ...state.subTimelines[id].to('.'+id+'.element-scale',.25,{scaleX:action.payload.val,scaleY:action.payload.val, ease:Linear.easeNone},"+=0.25")
        return {...state,
          subTimelines: {
            ...state.subTimelines,
            [action.payload.id] : action.payload.subTL
          }
        }
      }
      /* case "FETCH_USER_FULFILLED": {
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
