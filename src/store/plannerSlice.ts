import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const generatePlan = createAsyncThunk(
  "planner/generatePlan",
  async (tasks: string[]) => {
    const response = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tasks }),
    });
    const data = await response.json();
    return data.plan;
  }
);

const plannerSlice = createSlice({
  name: "planner",
  initialState: {
    tasks: [] as string[],
    plan: "",
    loading: false,
  },
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generatePlan.pending, (state) => {
        state.loading = true;
        state.plan = "";
      })
      .addCase(generatePlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plan = action.payload;
      });
  },
});

export const { setTasks } = plannerSlice.actions;
export default plannerSlice.reducer;