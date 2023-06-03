// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Pionki";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }

class User {
  private _courseCount = 1;

  readonly city: string = "Pionki";
  constructor(
    public email: string,
    public name: string // private userID: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}
const wojtek = new User("w@2.pl", "wojtek");
// wojtek.name
// wojtek.city = "Warszawa";

// wojtek.deleteToken()
