// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Pionki";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }

class User {
  readonly city: string = "Pionki";
  constructor(
    public email: string,
    public name: string,
    private userID: string
  ) {}
}
const wojtek = new User("w@2.pl", "wojtek", "kl45");
// wojtek.name
// wojtek.city = "Warszawa";
