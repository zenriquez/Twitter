class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

get getUsername(){
    return this.username;
}

get getbio(){
    return this.bio;
}

get getdateCreated(){
    return this.dateCreated
}

get getlastUpdated(){
    return this.lastUpdated
}

set setUsername(newUsername){
    this.username = newUsername
}

set setBio(newBio){
    this.bio = newBio
}


}

module.exports = User