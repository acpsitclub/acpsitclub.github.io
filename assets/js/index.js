$(document).ready(() => {
  AOS.init();

  const options = {
    strings: ["Welcome to ACPS IT Club"],
    typeSpeed: 40,
    showCursor: false,
    loop: false,
  };

  new Typed("#welcome", options);
});
