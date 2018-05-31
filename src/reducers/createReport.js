import {
  INPUT,
  EMAILINPUT,
  STATEINPUT,
  ADDINPUT,
  ADDEMAILINPUT,
  ADDSTATEINPUT,
  CLEARINPUT,
  CLEAREMAILINPUT,
  CLEARSTATEINPUT,
  REMOVEITEMS,
  REMOVEEMAILITEM,
  REMOVESTATEITEM,
  BACKSPACEINPUT,
  BACKSPACEEMAIL,
  ISBUTTONACTIVE,
  EMAILINPUTSTATUSBTN
} from "../actions/actionTypes";

const initialState = {
  items: [],
  input: "",
  tableData: [],
  isButtonActive: [
    { name: "Name", isActive: false },
    { name: "Max Price", isActive: false },
    { name: "Average Price", isActive: false },
    { name: "Min Price", isActive: false }
  ],
  emailInputStatus: false,
  emailItems: [],
  emailInput: "",

  stateItems: [],
  stateInput: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        input: action.payload
      };
    case EMAILINPUT:
      return {
        ...state,
        emailInput: action.payload
      };
    case STATEINPUT:
      return {
        ...state,
        stateInput: action.payload
      };
    case ADDINPUT:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ADDEMAILINPUT:
      return {
        ...state,
        emailItems: [...state.emailItems, action.payload]
      };

    case ADDSTATEINPUT:
      return {
        ...state,
        stateItems: [...state.stateItems, action.payload]
      };

    case CLEARINPUT:
      return {
        ...state,
        input: ""
      };
    case CLEAREMAILINPUT:
      return {
        ...state,
        emailInput: ""
      };
    case CLEARSTATEINPUT:
      return {
        ...state,
        stateInput: ""
      };
    case REMOVEITEMS:
      return {
        ...state,
        items: state.items.filter((item, i) => i !== action.payload)
      };
    case REMOVEEMAILITEM:
      return {
        ...state,
        emailItems: state.emailItems.filter((item, i) => i !== action.payload)
      };
    case REMOVESTATEITEM:
      return {
        ...state,
        stateItems: state.stateItems.filter((item, i) => i !== action.payload)
      };
    case BACKSPACEINPUT:
      return {
        ...state,
        items: state.items.slice(0, state.stateItems.length - 1)
      };
    case BACKSPACEEMAIL:
      return {
        ...state,
        emailItems: state.emailItems.slice(0, state.emailItems.length - 1)
      };
    case ISBUTTONACTIVE:
      return {
        ...state,
        isButtonActive: action.payload
      };
    case EMAILINPUTSTATUSBTN:
      return {
        ...state,
        emailInputStatus: !state.emailInputStatus
      };
    default:
      return state;
  }
};
