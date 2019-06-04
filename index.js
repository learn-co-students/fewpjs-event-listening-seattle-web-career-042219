function addingEventListener() {
  const input = document.getElementById("main");
  input.addEventListener("click", function(event) {
    alert("I was clicked!");
  });
}

addingEventListener();
