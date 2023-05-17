import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [
    {
      id: 1,
      name: "person",
    },
  ],
};

const personReducer = createSlice({
  name: "personStore",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.persons = action.payload;
    },
  },
});

export const {setUser} = personReducer.actions;
export default personReducer.reducer;
