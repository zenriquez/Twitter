const userservice = require('./../services/UserService')

class UserView{

    static createUser(payload){
        if(payload === null){
            console.log("error null")
            return{error:"Payload doesn't exist."}
        } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
        
        }else{
            return {error: "Error: Payload properties need a valid value."}
        }
    }
}

module.exports = UserView