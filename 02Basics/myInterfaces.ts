interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const wojtek: User = {
  dbId: 22,
  email: "w@wojtek.pl",
  userId: 1122,
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "wit10", off: 10) => {
    return 10;
  },
};

wojtek.email = "22@o2.pl";
// wojtek.dbId = 44
