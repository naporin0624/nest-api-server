// import { createStore, applyMiddleware, Reducer } from "redux";
// import { State } from "./state";
// import thunk from "redux-thunk";
// import { Action } from "./action.types";

// const initialState: State = {
//   lastTagContainers: [],
// }

// export const setState: any = (key, value)
// // export const setState: any = (key, value) => {
// //   return {
// //     type: "",
// //     payload: { key, value }
// //   };
// // };

// const reducer: Reducer<State, Action> = (state = initialState, action) => {
//   switch (action.type) {
//     case "":
//       const { key, value } = action.payload;
//       return {
//         ...state,
//         [key]: value
//       };
//   }
// };

// export const store = createStore(reducer, applyMiddleware(thunk));
