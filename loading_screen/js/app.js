const bd = document.body,
  cur = document.getElementById("cursor");
bd.addEventListener("mousemove", function (n) {
  (cur.style.left = n.clientX + "px"), (cur.style.top = n.clientY + "px");
});

const instance = new Typewriter("#typewriter", {
  strings: [
    "Astra DEV | GLP Slix",
    "discord.gg/6bnAXVt4fD",
    "Developpement constant",
    "Chargement ...",
  ],
  autoStart: true,
  loop: true,
});
