window.onload = () => {
    const splash = document.getElementById("splash");
    const login = document.getElementById("login");
  
    setTimeout(() => {
      splash.classList.add("hidden");
      login.classList.remove("hidden");
    }, 2000);
  };
  
  function goToHome() {
    const login = document.getElementById("login");
    const home = document.getElementById("home");
  
    login.classList.add("hidden");
    home.classList.remove("hidden");
  }
  
  function goToMontagem() {
    const home = document.getElementById("home");
    const montagem = document.getElementById("montagem");
  
    home.classList.add("hidden");
    montagem.classList.remove("hidden");
  }
  