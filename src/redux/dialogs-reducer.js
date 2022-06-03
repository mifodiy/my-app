const SEND_MESSAGE = 'SEND-MESSAGE';

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

}


const dialogsReducer = (state = initials, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.value;
            return {
                ...state,
                messages: [...state.messages, {id: '4', message: body}],

            }
        }
        default: return state;

    }
}

export let sendMessageCreator = (value) => {
    return {type: SEND_MESSAGE, value}
}



export default dialogsReducer;