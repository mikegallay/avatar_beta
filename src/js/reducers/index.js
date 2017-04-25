import { combineReducers } from "redux"

import avatar from "./avatarReducer"
import user from "./userReducer"
import timeline from "./timelineReducer"

export default combineReducers({
  avatar,
  timeline,
  user,
})
