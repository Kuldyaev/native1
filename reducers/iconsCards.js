import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 0, name: 'send', hide: "1", flag: 'FontAwesome', color: '#1c7cd6'},
    {id: 1, name: 'github', hide: "1", flag: 'FontAwesome', color:  '#000000'},
    {id: 2, name: 'twitter', hide: "1", flag: 'Entypo', color: '#2AA4F4'},
    {id: 3, name: 'instagram-with-circle', hide: "1", flag: 'Entypo', color: '#D84178'},
    {id: 4, name: 'facebook', hide: "1", flag: 'Entypo', color: '#3F51B5'},
    {id: 5, name: 'skype', hide: "1", flag: 'Entypo', color: '#03A9F4'},
    {id: 6, name: 'youtube', hide: "1", flag: 'AntDesign',color: '#FF0000' },
    {id: 7, name: 'android1', hide: "1", flag: 'AntDesign', color: '#7CB342'}
];

const iconsReducer = createSlice({
    name: 'flags',
    initialState: initialState,
    reducers: {
        increment: state => {
            state.concat([{dsad:'fsfwef'}])
          },
    }
});
// Action creators are generated for each case reducer function
export const { increment } = iconsReducer.actions

export default iconsReducer.reducer