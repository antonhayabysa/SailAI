import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedWords: [] as string[], 
  topics: [
    { name: "Topic 1", progress: 0 },
    { name: "Topic 2", progress: 0 },
  ],
  progressValue: 0, 
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    updateProgress: (state, action) => {
      const { topicName, progress } = action.payload;
      const topic = state.topics.find((t) => t.name === topicName);
      if (topic) {
        topic.progress = progress;
      }
     
      state.progressValue = state.topics.reduce(
        (total, topic) => total + topic.progress,
        0
      );
    },
    updateWords: (state, action) => {
      state.selectedWords = action.payload;
    },
  },
});

export const { updateProgress, updateWords } = progressSlice.actions;

export type ProgressState = typeof initialState;

export default progressSlice.reducer;
