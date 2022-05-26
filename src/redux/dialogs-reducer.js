const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initials =  {
    dialogs: [
        {id: '1', name: 'Vova'},
        {id: '2', name: 'Anna'},
        {id: '3', name: 'Max'},],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Hi people'},
        {id: '3', message: 'yo'},
    ],
    newMessageBody:''
}


const dialogsReducer = (state = initials, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: '4', message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;
        default: return state;

    }
}

export let sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export let updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;