const UserService = require ('./../../app/services/UserService')

describe ("Test for UserService", () => {
    test("1. Create a new user using the UserService", () =>{
    const user = UserService.create(1, "zenriquez", "zabdi")
    expect(user.username).toBe("zenriquez")
    expect(user.name).toBe("zabdi")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
})


describe('2. Get all user data in a list', () => { 
    const user = UserService.create(1, "zenriquez", "zabdi")
    const UserInfoInList = UserService.getInfo(user)
    expect (UserInfoInList[0]).toBe(1)
    expect (UserInfoInList[1]).toBe("zenriquez")
    expect (UserInfoInList[2]).toBe("zabdi")
    expect (UserInfoInList[3]).toBe("Sin bio")
 })


})