const mousePointer = document.querySelector(".mouse_pointer");

addEventListener("mousemove", (e) => {
  mousePointer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

