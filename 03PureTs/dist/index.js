"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const wojtek = new User("w@2.pl", "wojtek");
wojtek.city = "Pionki";
