import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

// Создаем преобразователя

const URL = 'https://svoyapi.ru/telebot/api';                                        // адрес сервера API
const headers = {                                                                      // заголовки запросов к серверу
'Accept': 'text/html,application/xhtml+xml,application/xml',
'Content-Type': 'application/json',
'Accept-Encoding':'gzip, deflate, br',
'Accept-Language':'en-US,en;q=0.9,ru;q=0.8'
};


export const fetchShopListItems = createAsyncThunk(
    'shopList/fetchShopListItems',
    async (thunkAPI) => {
      const response = await  fetch(URL, {
        method: 'GET', 
        headers, 
      })
        .then((response) => response.json())
        .then(data => {
            return data.list
        })
        .catch((ex) => console.log("parsing failed", ex));

        return response
    }
  );




const initialState = {
    allItems: [],
    categories: []
};

const shopListReducer = createSlice({
  name: "shopList",
  initialState: initialState,
  reducers: {
    reciveShopListFromAPI: (state) => {
      state.allItems = [...state.allItems ,"x"];
    },
    loadShopListcategories: (state, action) => {
        state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchShopListItems.fulfilled, (state, action) => {
      // Add user to the state array
      state.allItems = action.payload.result;
    })
  },

});
// Action creators are generated for each case reducer function
export const { reciveShopListFromAPI, loadShopListcategories } = shopListReducer.actions;


export default shopListReducer.reducer;
