import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    queryResult: []
}

export const resultsSlice = createSlice({
    name: 'queryResults',
    initialState,
    reducers: {
        getInfo: (state) => {
            // return state.queryResults?.[0]?.results?.[0]
        },
        setqueryvalue: (state, action) => {
            state.queryResults = action.payload;
        },
    }
})