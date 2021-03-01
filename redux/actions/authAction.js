import axios from 'axios'

const authAction = {

    registerUser: (nuevoUsuario) => {
        
       
        return async (dispatch , getState) => {
            const respuesta = await axios.post('https://mytinerarymobile.herokuapp.com/user/register', nuevoUsuario)
            console.log
            if (!respuesta.data.success) {
                
                return respuesta.data
                
            }
          
            dispatch({type:'REGISTER_USER' , payload:respuesta.data})
        }
    },

    loginUser : (usuarioRegistrado) => {
        console.log('llegu')
        console.log(usuarioRegistrado)

        return async (dispatch , getState) => {
            const respuesta = await axios.post('http://mytinerarymobile.herokuapp.com/user/signin', usuarioRegistrado)
           
            if (!respuesta.data.success) {
                return respuesta.data
                
            }
            dispatch({type:'REGISTER_USER' , payload:respuesta.data})
        }
    },

    disconnectUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'DISCONNECT_USER'})
        }
    },

    logFromLS:(token)=> {
        return async (dispatch, getState) =>{
            try{
                const respuesta = await axios.post('http://mytinerarymobile.herokuapp.com/user/lstorage', {token} ,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
              

                
                dispatch({type: 'LOGIN_USER', payload:{response:{...respuesta.data.response}}})
            }
            catch(error){
                if(error.response.status=== 401){
                    Alert.alert("esta intentando ingresar sin permisos")
                    localStorage.clear()
                     return '/'
                }
            }


        }

    }


}

export default authAction




  