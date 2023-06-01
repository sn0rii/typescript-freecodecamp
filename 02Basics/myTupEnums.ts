// const user: (string | number)[] = [1, "wm"];
let user: [string, number, boolean];

user = ["wm", 1, true];

let rgb: [number, number, number] = [255, 123, 122];

type User = [number, string];

const newUser: User = [112, "example@wp.pl"];

newUser[1] = " wm.com";

export {};
