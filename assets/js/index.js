$(document).ready(() => {
  $("#copyright-text").html(
    `Copyright &copy; ${new Date().getFullYear()} ACPS IT Club | All Rights Reserved`
  );

  AOS.init();

  const options = {
    strings: ["Welcome to ACPS IT Club"],
    typeSpeed: 40,
    showCursor: false,
    loop: false,
  };

  new Typed("#welcome", options);

  myearth = new Earth("earth", {
    location: { lat: 20, lng: 20 },
    light: "none",
    mapImage: "assets/img/hologram-map.svg",
    transparent: true,
    autoRotate: true,
    autoRotateSpeed: 1.4,
    autoRotateDelay: 0,
    autoRotateStart: 0,
  });
});
