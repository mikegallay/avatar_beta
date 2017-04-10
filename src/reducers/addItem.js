/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {} from '../actions/const';


const initialState = {
  user:{
    name:'Will',
    age: 35
  }
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {

    case 'ADD_ITEM': {
      // Modify next state depending on the action and return it
      //return Object.assign({}, state, { offices: action.payload.data });
      //immutable object
      return Object.assign({}, state);
    }

    case 'CHANGE_ITEM':{
      console.log('CHANGE',action.payload);
      return Object.assign({}, state, {user:{name:action.payload}} );
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
