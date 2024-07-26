import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tools,ToolValue } from '../../types';

const initialState = {
  tool: Tools.selection.value,
};

const toolSlice = createSlice({
  name: "toolSelection",
  initialState,
  reducers: {
    setTool: (state, action: PayloadAction<ToolValue>) => {
      state.tool = action.payload;
    }
  },
});

export const { setTool } = toolSlice.actions;
export default toolSlice.reducer;
