  // header scroll
  window.addEventListener("scroll",  () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled" , window.scrollY > 10 )
  });

  // nav-bar toggle
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbar = document.querySelector(".nav-bar");

  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  //team page slider

  const track = document.querySelector(".track");
  const dots = document.querySelectorAll(".dot");


  dots.forEach((dot , index) => {
      dot.addEventListener("click" , () => {
          dots.forEach( d => 
              d.classList.remove("active")) ;
              dot.classList.add("active");

              // const cardWidth = cards[0].offsetWidth;
          track.style.transform = `translateX(-${ index * 100}%)`;
      });
  });

  // service => price
  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");

  if (service) {
    const row = document.getElementById(service);
    if (row) {
      row.classList.add("highlight");
      row.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        row.classList.remove("highlight");
      }, 2000);
    }
  }
  //  price => service
    



