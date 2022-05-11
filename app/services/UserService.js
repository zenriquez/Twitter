const User = require('./../models/user')

class UserService {
    static create(id,username, name){
        return new User(id, username, name, "Sin bio")
    }
    
    //metodo estatico de valores
    static  getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }

    //actualizar username
    static updateUserUsername(user, name){
        user.name = name;
    }

    //devuelve lista de usuarios
    static getAllUsernames(users) {
        return users.map(user=>user.name)
    }

}


module.exports = UserService