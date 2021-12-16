import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
        robots:[],
        searchField:'',
        searchCriteria:'name',
        filteredRobots:[]
    },
    reducers: {
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -=1
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload)
        },
        decrementByAmount: (state, action) => {
            state.value -= Number(action.payload)
        },
        resetAmount: (state) =>{
            state.value = 0
        },
        fetchRobots:(state, action) => {
             state.robots = action.payload
        },
        searchField: (state, action) => {
            state.searchField = action.payload
        },
        searchCriteria: (state, action) => {
            state.searchCriteria = action.payload.toLowerCase()
        },
        filteredRobotsAction: (state, action) => {
            state.filteredRobots = action.payload
            console.log('filteredRobotsState', state.filteredRobots)
        }
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, resetAmount, fetchRobots, searchField, searchCriteria, filteredRobotsAction } = counterSlice.actions

export default counterSlice.reducer