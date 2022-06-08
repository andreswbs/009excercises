

localStorage.setItem('email', 'john.smith@somewhere.cc')
console.log('localStorage set')

const oldUserName = localStorage.getItem('userName')
document.getElementById('userName').innerHTML = `
    <p>
        Previous user name: ${oldUserName}
    </p>
`

function askNewUserName() {
    const newUserName = prompt('user name:')
    localStorage.setItem('userName', newUserName)
}

const user = {
    name: 'John Smith',
    email: 'john.smith@somewhere.cc',
    age: 33,
    active: true,
    lastSeen: new Date()
}

//console.log(user)
//const userAsString = JSON.stringify(user)
//console.log(userAsString)
//localStorage.setItem('userObject', userAsString)

const userAsString = localStorage.getItem('userObject')

const storedUser = JSON.parse(userAsString)
console.log('Stored user:')
console.log(storedUser)

function makeUserObject(userString) {
    const storedUser = JSON.parse(userString)
    return {
        name: storedUser.name,
        email: storedUser.email,
        age: storedUser.age,
        active: storedUser.active,
        lastSeen: new Date(storedUser.lastSeen),
    }
}

const storedUserObject = makeUserObject(userAsString)
console.log('restored user object from local storage')
console.log(storedUserObject)

class WebsiteUser {
    constructor(name, email, age, active = null, lastSeen = null) {
        this._name = name,
        this._email = email,
        this._age = age,
        this._active = active === null ? false : active,
        this._lastSeen = lastSeen === null ? new Date() : new Date(lastSeen)
    }

    toJSON() {
        return {
            name: this._name,
            age: this._age,
            email: this._email,
            active: this._active,
            lastSeen: this._lastSeen
        }
    }
}

const webUser1 = new WebsiteUser(
    'Web User',
    'web.user@test.tt',
    33
)

console.log(webUser1)

const webUserString = JSON.stringify(webUser1)
console.log('Web User as string')
console.log(webUserString)

//localStorage.setItem('webUser', webUserString)

const webUserString2 = localStorage.getItem('webUser')

const webUser2Data = JSON.parse(webUserString2)
console.log('webUser2Data:')
console.log(webUser2Data)

function makeWebUser(webUserData) {
    return new WebsiteUser(
        webUserData.name, 
        webUserData.email, 
        webUserData.age, 
        webUserData.active, 
        webUserData.lastSeen
    )
}

console.log('Restored Web User:')
console.log(makeWebUser(webUser2Data))




