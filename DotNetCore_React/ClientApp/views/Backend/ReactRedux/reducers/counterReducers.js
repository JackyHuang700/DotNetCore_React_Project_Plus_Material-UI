//提升維護性只會有一個
const init = {
    "number": 0,
};
export default function conuterReducer(state = init, action) {
    switch (action.type) {
        case "INCREMENT":
            state = {
                ...state,
                "number": state.number + 1,
            };
            // var newState = Object.assign({}, state);
            // newState = state + 1;

            return state;
        case "DECREMENT":
            state = { ...state, 
                "number": state.number - 1, 
            };

            // var newState = Object.assign({}, state);
            // newState = state - 1;

            return state;
        default:
            return state;
    }
}

