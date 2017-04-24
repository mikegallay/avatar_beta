import { combineReducers } from "redux"

import avatar from "./avatarReducer"
import user from "./userReducer"

export default combineReducers({
  avatar,
  user,
})
