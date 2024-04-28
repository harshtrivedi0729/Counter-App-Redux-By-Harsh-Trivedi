
// MMMIIMMPP
// APDE COMPOLSORY AA STORE BANAVO J PADE KOI PAN APP BANAVO TYARE.
// APDE REDUX NO STORE BANAVA NO HOY CHE "REDUX" NI ANDER TE BANAVELO CHE AHIYA
// ahiya " configureStore"  a apdo GLOBAL STORE create kare che jya apdo badho j CENTRALISE DATA/CENTRALISE STATE padelo hoy che 
// centralise store a multiple slices thi bane che 
import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
  // counter naam ni Slice che teno Reducer a CounterSlice che ........tuk ma app ni j slice hati te apde nakhi.......atle j kahelu che k centralise store a multiple slices thi bane che 
  reducer: {
    counter: CounterSlice
    // koi pan rite lakho chale
    // counter: CounterSlice.reducer
    // counter: CounterSlice.Reducer
  },
})