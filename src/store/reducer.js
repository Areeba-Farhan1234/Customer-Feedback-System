import { createSlice } from "@reduxjs/toolkit";

export const reducer = createSlice({
  name: "appReducer",
  initialState: { products: [], feedbacks: [] },

  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setFeedbacks: (state, { payload }) => {
      state.feedbacks = [...state.feedbacks, payload];
    },
    incrementVote: (state, { payload }) => {
      const feedback = state.feedbacks.find(
        (fb) => fb.productId === payload.productId
      );
      if (feedback) {
        if (typeof feedback?.count === "undefined") {
          feedback.count = 1;
        } else {
          feedback.count += 1;
        }
      }
    },
    decrementVote: (state, { payload }) => {
      const feedback = state.feedbacks.find(
        (fb) => fb.productId === payload.productId
      );
      if (feedback && feedback.count > 0) {
        feedback.count -= 1;
      }
    },
  },
});

export const { setProducts, setFeedbacks, incrementVote, decrementVote } =
  reducer.actions;

export default reducer.reducer;
