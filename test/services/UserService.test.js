const UserService = require ('./../../app/services/UserService')

describe ("Test for UserService", () => {
    test("1. Create a new user using the UserService", () =>{
    const user = UserService.create(1, "zenriquez", "zabdi")
    expect(user.username).toBe("zenriquez")
    expect(user.name).toBe("zabdi")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
})


describe("2. Get all user data in a list", () => { 
    const user = UserService.create(1, "zenriquez", "zabdi")
    const UserInfoInList = UserService.getInfo(user)
    expect (UserInfoInList[0]).toBe(1)
    expect (UserInfoInList[1]).toBe("zenriquez")
    expect (UserInfoInList[2]).toBe("zabdi")
    expect (UserInfoInList[3]).toBe("Sin bio")
 })

describe("3. Update username", () => {
    const user  = UserService.create(1, "zenr", "zabdi")
    UserService.updateUserUsername(user, "zenr")
    expect(user.username).toBe("zenr")
})


describe("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "zenriquez1", "Zabdi")
    const user2 = UserService.create(2, "zenriquez2", "Zabdi")
    const user3 = UserService.create(3,"zenrqiuez3", "Zabdi")
    expect(usernames).toContain(zenriquez1)
    expect(usernames).toContain(zenriquez2)
    expect(usernames).toContain(zenriquez3)
})


})