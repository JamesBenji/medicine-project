import {configureStore} from '@reduxjs/toolkit'
import userInputReducer from './features/userInputSlice'
import urlSliceReducer from './features/urlSelectSlice'

export const store =configureStore({
    reducer: {
        userInput: userInputReducer,
        urlSlice: urlSliceReducer,

    }
})