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
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this.city = "Pionki";
    }
}
const wojtek = new User("w@2.pl", "wojtek", "kl45");
// wojtek.name
// wojtek.city = "Warszawa";
