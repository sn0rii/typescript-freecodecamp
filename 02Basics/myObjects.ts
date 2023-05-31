const user = {
  name: "Wojtek",
  email: "wojtek@pl.pl",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "wojtek", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 399 };
}

export {};
