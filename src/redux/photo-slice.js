import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  photos: [],
  currentPhoto: null
}

const photoSlice = createSlice({
  name: 'photo',
  initialState: initialState,
  reducers: {
    uploadPhoto: (state, action) => {
      if (state.currentPhoto) {
        state.photos.push(state.currentPhoto);
      }
      state.currentPhoto = { id: nanoid(), url: action.payload }
    }
  }
});

export const {uploadPhoto} = photoSlice.actions;
export const selectPhotos = (state) => state.photo.photos;
export const selectCurrentPhoto = (state) => state.photo.currentPhoto;
export default photoSlice.reducer;