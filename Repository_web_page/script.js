let calcScrollValue = () => {
    let scrollProg = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProg.style.display = "grid";
    } else {
      scrollProg.style.display = "none";
    }
    scrollProg.style.background = `conic-gradient(#1260CC ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  // Registered once — not inside the scroll handler to avoid stacking duplicate listeners.
  window.addEventListener("load", () => {
    document.getElementById("progress").addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  });

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
