import { createSlice } from "@reduxjs/toolkit";

const urlSelectSlice = createSlice({
    name: 'urlSlice',
    initialState: {
        selected_url_value: '',
        urls_url: {
            brandUrl: 'https://api.fda.gov/drug/label.json?search=openfda.brand_name:',
            genericUrl: 'https://api.fda.gov/drug/label.json?search=openfda.generic_name:',
            activeUrl: 'https://api.fda.gov/drug/label.json?search=active_ingredient:',
            
          }
    },
    reducers: {
        setUrl: (state, action)=> {
            state.selected_url_value = action.payload
        },
        clear_Url: (state) => {
            state.selected_url_value = ''
        }
    }
})

export const {setUrl, clear_Url} = urlSelectSlice.actions
export default urlSelectSlice.reducer