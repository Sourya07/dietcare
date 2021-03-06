import {
  SET_MEALPLANS,
  TOGGLE_MEALPLANS_FETCHING_STATE,
  SET_MEALPLAN_TEMPLATE,
  SET_RECIPE_SUGGESTIONS,
} from "../actionTypes";
const initialState = {
  mealPlans: null,
  mealPlantemplates: null,
  mealplansfetchingState: false,
  recipesuggestions: null,
};

const mealplansReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MEALPLANS:
      return { ...state, mealPlans: payload };
    case TOGGLE_MEALPLANS_FETCHING_STATE:
      return {
        ...state,
        mealplansfetchingState: !state.mealplansfetchingState,
      };
    case SET_RECIPE_SUGGESTIONS:
      return { ...state, recipesuggestions: payload };
    case SET_MEALPLAN_TEMPLATE:
      return { ...state, mealPlantemplates: payload };
    default:
      return state;
  }
};

export default mealplansReducer;
