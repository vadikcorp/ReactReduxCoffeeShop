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
  REMOVEEMAILITEM,
  REMOVESTATEITEM,
  BACKSPACEINPUT,
  BACKSPACEEMAIL,
  REMOVEITEMS,
  ISBUTTONACTIVE,
  EMAILINPUTSTATUSBTN
} from "./actionTypes";

export const input = data => ({
  type: INPUT,
  payload: data
});

export const emailInput = data => ({
  type: EMAILINPUT,
  payload: data
});

export const stateInput = data => ({
  type: STATEINPUT,
  payload: data
});

export const handleChange = e => {
  return dispatch => {
    if (e.target.name === "input") {
      dispatch(input(e.target.value));
    } else if (e.target.name === "emailInput") {
      dispatch(emailInput(e.target.value));
    } else if (e.target.name === "stateInput") {
      dispatch(stateInput(e.target.value));
    }
  };
};

export const addInput = data => ({
  type: ADDINPUT,
  payload: data
});

export const addEmailInput = data => ({
  type: ADDEMAILINPUT,
  payload: data
});

export const addStateInput = data => ({
  type: ADDSTATEINPUT,
  payload: data
});

export const addItem = e => {
  return dispatch => {
    if (e.target.name === "input") {
      dispatch(addInput(e.target.value));
    } else if (e.target.name === "emailInput") {
      dispatch(addEmailInput(e.target.value));
    } else if (e.target.name === "stateInput") {
      dispatch(addStateInput(e.target.value));
    }
  };
};

export const clearInput = () => ({
  type: CLEARINPUT
});
export const clearEmailInput = () => ({
  type: CLEAREMAILINPUT
});
export const clearStateInput = () => ({
  type: CLEARSTATEINPUT
});

export const clearInputItem = e => {
  return dispatch => {
    if (e.target.name === "input") {
      dispatch(clearInput());
    } else if (e.target.name === "emailInput") {
      dispatch(clearEmailInput());
    } else if (e.target.name === "stateInput") {
      dispatch(clearStateInput());
    }
  };
};
// todo remove
export const removeItems = data => ({
  type: REMOVEITEMS,
  payload: data
});

export const removeStateItem = data => ({
  type: REMOVESTATEITEM,
  payload: data
});

export const removeEmailItems = data => ({
  type: REMOVEEMAILITEM,
  payload: data
});

export const backspaceItems = () => ({
  type: BACKSPACEINPUT
});
export const backspaceEmailItems = () => ({
  type: BACKSPACEEMAIL
});

export const backspace = e => {
  return dispatch => {
    if (e.target.name === "input") {
      dispatch(backspaceItems());
    } else if (e.target.name === "emailInput") {
      dispatch(backspaceEmailItems());
    }
  };
};

export const isButtonActive = data => ({
  type: ISBUTTONACTIVE,
  payload: data
});

export const emailInputStatusBtn = data => ({
  type: EMAILINPUTSTATUSBTN
});
