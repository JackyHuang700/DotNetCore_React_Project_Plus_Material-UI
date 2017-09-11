const initData = {
    userNameList: [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    ],
    selectUser: null,
};


export default function userNameListReducer(state = initData, action) {
    switch (action.type) {
        case "USERSEELCT":
        console.log("USERSEELCT")
            state = {
                ...state,
                selectUser: action.user,
            }
            return state;

        default:
            return state;
    }
} 