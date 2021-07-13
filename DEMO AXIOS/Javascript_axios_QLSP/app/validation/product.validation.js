function checkEmpty(tenSp, id, message) {
  if (tenSp.trim().length < 1) {
    document.querySelector(`#${id}`).style.display = "block";
    document.querySelector(`#${id}`).innerHTML = message;
    return false;
  } else {
    return true;
  }
}
