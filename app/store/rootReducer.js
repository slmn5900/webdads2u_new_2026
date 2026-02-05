import { combineReducers } from "redux";
import contactReducer from "./slice/contact";
import careerReducer from "./slice/career";
import enquiryReducer from "./slice/enquirySlice";
import hireUsReducer from "./slice/hireusSlice";
const reducer = combineReducers({
  contact: contactReducer,
  enquiry: enquiryReducer,
  career: careerReducer,
  hireUs: hireUsReducer,
});
export default reducer;
