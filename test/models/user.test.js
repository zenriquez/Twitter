const User = require('../../app/models/user')

describe("Unit Test for User Class", () => {

    test ('Create an User Object', () => {
        //Invocar codigo de app
        const user = new User (1, "ZabdiEnriquez", "Zabdi", "Bio", "dateCreated", "lastUpdated")

        //Validacion resultado del codigo 
        //Comparacion igualar valor izquierda a derecha(valor esperado)
            expect(user.id).toBe(1)
            expect(user.username).toBe("ZabdiEnriquez")
            expect(user.name).toBe("Zabdi")
            expect(user.bio).toBe("Bio")
            expect(user.dateCreated).not.toBeUndefined() //verifica que no sea undefined
            expect(user.lastUpdated).not.toBeUndefined()

    });
})