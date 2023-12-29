const counterReducer = (state = { counter: 0, isShow: true }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state = { ...state, counter: state.counter + 1 }

        case "DECREMENT":
            return state = { ...state, counter: state.counter - 1 }
        case "TOGGLE":
            return state = { ...state, isShow: !state.isShow }

        default:
            return state;
    }
}

export default counterReducer;