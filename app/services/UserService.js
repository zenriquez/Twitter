const User = require('./../models/user')

class UserService {
    static create(id,username, name){
        return new User(id, username, name, "Sin bio")
    }
    
    //metodo estatico de valores
    static  getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }

}


module.exports = UserService