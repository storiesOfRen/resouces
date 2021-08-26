import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TagsState {
    tags: string[];
    
  }

const initialState: TagsState = {
    tags: [],
  };

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers:{
        createTag:(state, action: PayloadAction<string>)=>{
            state.tags.push(action.payload);
        },
        deleteTag:(state, action: PayloadAction<number>)=>{
            state.tags = state.tags.splice(action.payload, action.payload)
        },
    },
});

export const { createTag, deleteTag  } = tagsSlice.actions;

export const selectTags = (state: RootState)=> state.tags.tags;


export default tagsSlice.reducer;