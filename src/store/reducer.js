const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state); //not doing in old state, copying new state immutably and return it, it will be new object.
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state, //another version above logic
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id:new Date(),value: state.counter})
            }
        case 'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id,1)
            // or
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;