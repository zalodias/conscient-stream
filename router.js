import Home from "./Home.js";

const routes = {
  "/": Home,
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);

  handleLocation();
};

const handleLocation = () => {
  const path = window.location.pathname;
  console.log(path);
  const route = routes[path]();
  document.getElementById("app").innerHTML = route;
};

window.onpopstate = handleLocation();
window.route = route;

handleLocation();
