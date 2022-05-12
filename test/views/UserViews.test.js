const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
    test("Return an error object when try to create a new user with a null payload", () => {
        const payload = null
        const result  = UserView.createUser(payload)

        expect(result.error).toMatch(/Payload doesn't exist./)

    })

    
    test("Return an error object when try to create a new user with payload with missing properties",() => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error: Payload properties need a valid value./)
    })
})


    test("Return an error object when try to create a new user with a payload  with missing  properties",()=>{
        const payload = {username:"Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/need a valid value/)
    })