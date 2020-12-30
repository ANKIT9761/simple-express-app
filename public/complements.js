document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".complement").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });
  document.querySelector(".request-insult")
  .addEventListener("click",()=>{
      fetch("/insult")
      .then((res)=>{
          return res.json();
      })
      .then((data)=>{
          document.querySelector(".insult").innerText=data.insult;
      })
      .catch((err)=>{
          console.error(err);
      })

  })