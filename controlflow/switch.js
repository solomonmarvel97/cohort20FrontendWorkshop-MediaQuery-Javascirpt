function getback(grade) {
  if (grade <= 50) {
    return "F";
  } else {
    return "A";
  }
}

let result = getback(51);

switch (result) {
  case "A":
    console.log("Distinction");
    break;
  case "B":
    console.log("Excellent");
    break;
  case "C":
    console.log("Credit");
    break;
  case "F":
    console.log("Failed");
    break;
  default:
}
