"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Pionki";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
class User {
    constructor(email, name // private userID: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Pionki";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const wojtek = new User("w@2.pl", "wojtek");
// wojtek.name
// wojtek.city = "Warszawa";
// wojtek.deleteToken()
