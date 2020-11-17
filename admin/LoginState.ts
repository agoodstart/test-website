type State = {
    username: String
    password: String
    isButtonDisabled: boolean
    helperText: String
    isError: boolean
}

const initialState:State = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
}

type Action = { type: 'setUsername', payload: String }
    | { type: 'setPassword', payload: String }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: String }
    | { type: 'loginFailed', payload: String }
    | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            }
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            }
        case 'loginSuccess':
            return {
                ...state,
                helperText: action.payload,
                isError: false
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
    }
}

export default {initialState, reducer}