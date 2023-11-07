import { createSlice } from '@reduxjs/toolkit';
import { notifications } from '../../constants/notification';

const notificationSlice = createSlice({
  name: notifications,
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push({ id: state.length + 1, text: action.payload, read: false });
    },
    markAsRead: (state, action) => {
      const notification = state.find((n) => n.id === action.payload);
      if (notification) {
        notification.read = true;
      }
    },
  },
});

export const { addNotification, markAsRead } = notificationSlice.actions;
export default notificationSlice.reducer;
