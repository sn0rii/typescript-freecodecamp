// const user = {
//   name: "Wojtek",
//   email: "wojtek@pl.pl",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "wojtek", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "react", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "w",
  email: "23@o2.pl",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cartDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "qwe@Path2D.pl";
// myUser._id = "4321";

export {};
