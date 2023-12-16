import { createSlice } from "@reduxjs/toolkit";

interface ISearch {
  keyword: string;
  focus: boolean;
}

const initialState: ISearch = {
  keyword: "",
  focus: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    unFocusSearch: (state) => {
      state.focus = false;
    },
  },
});

export const { unFocusSearch } = searchSlice.actions;
export default searchSlice.reducer;
