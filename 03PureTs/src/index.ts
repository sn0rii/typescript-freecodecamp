class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const wojtek = new User("w@2.pl", "wojtek");
wojtek.city = "Pionki";
