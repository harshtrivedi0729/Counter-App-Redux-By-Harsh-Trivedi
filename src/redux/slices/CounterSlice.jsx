import { createSlice } from "@reduxjs/toolkit";

// Required Thing-2
const initialState = {
    value:0,
}

// apde Slice banavi/Slice create kari j 'createSlice()' thi bane che 
// apde biji file/folder ma aa vastu use karvi hoy to apde /export' karvu padshe
export const CounterSlice = createSlice({
    // Required Thing-1(name)
    name:"counter",
    // Required Thing-2(INITIALISATION)
    initialState,
    // Reuired Thing-3 (REDUCERES)
    reducers: {
        // ahiya  increment/decrement a key che tem kahevay (FUNCTIONALITIES)
        // App mate j pan badha main functins che te apde ahiya reducers ni ander define karishu
        increment : (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

// MMMIIIPMM
// apde j functionalities banavi te apde xport karvi padshe j niche mujab SYSNTAX che te mujab j export thashe
// j pan functionalities che tene apde Slices mathi bahar nikadvi che to apde 'CounterSlice.actions;' thi j value levi padshe j ,and aa j anu Syntax che
// anu simple meaning a che k apde 'CounterSlice' ni jetali pan 'actions' che tema thi "increment, decrement" ni value bahar nikadi and tene apde export kari didhi
// function ni functionalities ne fetch karva mate apde 'CounterSlice.actions;' no use kariye chiye
export const {increment, decrement} = CounterSlice.actions;
// AA PAN SYSNTAX CHE TE YAAD RAKHVU
// reducer atle j oan apdi functionalities che tene Slice mate store karva mangiye chiye j apde reducers ni ander lakhiye chiye /type-down kariye chiye
export default CounterSlice.reducer;