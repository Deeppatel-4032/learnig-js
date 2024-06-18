
let choice = 1;
let msg = document.getElementById("msg");

switch (choice) {
    case 1:
    case 2:
        msg.innerHTML = "winter";
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        msg.innerHTML = "summer";
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        msg.innerHTML = "monsoon";
        break;
    case 11:
    case 12:
        msg.innerHTML = "winter";
        break;
    default:
        msg.innerHTML = "valid month entered";
}