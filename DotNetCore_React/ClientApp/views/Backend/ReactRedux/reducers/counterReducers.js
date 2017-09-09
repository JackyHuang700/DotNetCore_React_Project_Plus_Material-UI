//提升維護性只會有一個

export default function conuterReducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            var newState = Object.assign({}, state);
            newState = state + 1;

            return newState;
        case "DECREMENT":
            var newState = Object.assign({}, state);
            newState = state - 1;

            return newState;
        default:
            return state;
    }
}

