const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Angela' },
        { id: 2, name: 'Ervin' },
        { id: 3, name: 'Klaus' },
        { id: 4, name: 'Nico' },
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: "Wie geht's?" },
        { id: 3, message: 'Es ist so kalt!' },
        { id: 4, message: 'Hi!' },
    ]
}; 

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return { 
                ...state,
                messages: [ ...state.messages, { id: 5, message: body }]
             };

        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) =>({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;