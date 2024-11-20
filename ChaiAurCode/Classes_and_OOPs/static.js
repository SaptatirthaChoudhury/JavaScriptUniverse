class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Welcome: ${this.username}`);
    }

    static createdId() {
        return `123`
    }
}

const babai = new User("Babai")


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const nikku = new Teacher("Nikita Choudhury", "nikitaYourLove@gmail.com")
console.log(nikku);