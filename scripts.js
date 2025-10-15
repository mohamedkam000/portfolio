(function(){
  const root = document.documentElement;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(e){
    const isDark = (e && typeof e.matches === 'boolean') ? e.matches : prefersDark.matches;
    if(isDark){
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
      // optional: set explicit background for dark
      document.body.style.background = 'linear-gradient(180deg, #030617 0%, #07101e 100%)';
    } else {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
      document.body.style.background = 'linear-gradient(180deg, #f5f7fb 0%, #eef2f6 100%)';
      document.body.style.color = '#0c1218';
    }
  }

  // initial apply
  applyTheme(prefersDark);

  // listen to changes
  if(prefersDark && typeof prefersDark.addEventListener === 'function'){
    prefersDark.addEventListener('change', applyTheme);
  } else if(prefersDark && typeof prefersDark.addListener === 'function'){
    prefersDark.addListener(applyTheme);
  }

  // small enhancement: keyboard 't' toggles theme (useful for demos)
  window.addEventListener('keydown', (ev)=>{
    if(ev.key.toLowerCase() === 't'){
      if(document.documentElement.classList.contains('theme-dark')){
        applyTheme({matches:false});
      } else {
        applyTheme({matches:true});
      }
    }
  });
})();
