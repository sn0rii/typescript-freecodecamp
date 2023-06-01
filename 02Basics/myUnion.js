var score = 33;
score = 44;
score = "55";
var wojtek = { name: "Wojtek", id: 1 };
wojtek = { username: "w", id: 2 };
// function getDbId(id: number | string) {
//   //making some APi calls
//   console.log(`DB id is ${id} `);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = ["1", 2, "3", 4];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
