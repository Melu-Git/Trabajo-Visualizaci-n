document.querySelectorAll(".selector-container li").forEach(function(li) {
    li.addEventListener("click", function() {
      if (li.classList.contains("selected")) {
        li.classList.remove("selected");
      } else {
        li.classList.add("selected");
      }
    });
  });
  
    