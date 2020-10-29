export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after developing 
    token: process.env.REACT_APP_AUTHENTICATING_TOKEN
}

const reducer = (state, action) => {
 console.log(action);

 switch(action.type) {
     case 'SET_USER': 
        return {
            ...state,
            user: action.user
        };

    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
        default: 
            return state;
 }
}

export default reducer;