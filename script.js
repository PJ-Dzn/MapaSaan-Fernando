function findRoute() {
  const start = document.getElementById("start").value.trim();
  const end = document.getElementById("end").value.trim();
  const output = document.getElementById("route-output");

  if (!start || !end) {
    output.style.color = "red";
    output.innerHTML = "❗ Please enter both the starting point and destination.";
    return;
  }

  output.style.color = "#1a73e8";
  output.innerHTML = `Fastest route from <b>${start}</b> to <b>${end}</b> found! (sample only)`;
}
