const initialState = {
    loggedUser: null
}
const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'REGISTER_USER' :
            console.log('llegue al reducer')
            return {
                ...state ,
                loggedUser: action.payload.response     
            }     
        case 'DISCONNECT_USER' :
            return {
                ...state ,
                loggedUser:null
            }          
        default: 
        return state
    }
}

module.exports =  authReducer









