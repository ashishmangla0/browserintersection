const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.25,
};
window.addEventListener("DOMContentLoaded", (event) => {
  const handleObserver = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
        document.querySelector(".active").classList.remove("active");
        const id = entry.target.getAttribute("id");
        //console.log(id);
        //console.log(document.querySelector(`[href]=#${id}`));
        document.querySelector(`[href="#${id}"]`).classList.add("active");
      }
    });
  };
  const observerScroll = new IntersectionObserver(handleObserver, options);
  sections.forEach((section) => {
    observerScroll.observe(section);
  });
});
