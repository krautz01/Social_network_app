const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    ],
    newMessageBody: ''
}; 

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case UPDATE_NEW_MESSAGE_BODY:
            return { 
                ...state,
                newMessageBody: action.body
             };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return { 
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, { id: 5, message: body }]
             };

        default:
            return state;
    }
}

export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;