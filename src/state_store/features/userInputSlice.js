import {createSlice} from '@reduxjs/toolkit'


export const userInputSlice = createSlice({
    name: 'userInput',
    initialState: {
        inputText: ''
    },
    reducers: {
       setInputState: (state, action)=>{
        state.inputText = action.payload
       },
       clr_input: (state)=>{
        state.inputText = ''
       }
    }
})

export const { setInputState, clr_input } = userInputSlice.actions

export default userInputSlice.reducer