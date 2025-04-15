import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  activeSection: 'Главная',
  skills: ['React', 'JavaScript', 'Three.js', 'Redux', 'SASS']
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    }
  }
});

export const { toggleTheme, setActiveSection, addSkill } = portfolioSlice.actions;
export default portfolioSlice.reducer;