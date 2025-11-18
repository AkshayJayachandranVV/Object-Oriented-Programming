class User {
    private username : string;
    private password : string;


    constructor(username : string,password :string){
        this.username = username;
        this.password = password;
    }

    authenticate(enteredPassword : string){
       return this.password === enteredPassword
    }


    resetPassword(newPassword : string){
        this.password = newPassword
    }

}

const myUser = new User('user','password')

console.log(myUser.authenticate('password'))

myUser.resetPassword('P@ssword')

console.log(myUser)