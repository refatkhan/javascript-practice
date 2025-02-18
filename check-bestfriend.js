function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") {
    return "Invalid";
  }
  if (f1.roll == f2.bestFriend && f1.bestFriend == f2.roll) {
    return true;
  } else {
    return false;
  }
}

const f1 = { name: "hashem", roll: 2, bestFriend: 1};
const f2 = { name: "kashem", roll: 1, bestFriend: 2 };
const result = isBestFriend(f1, f2);
console.log(result);
