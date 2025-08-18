(function () {
  var btn;

  function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch(e) {}
    if (btn){
      var isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', String(isDark));
      btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    }
  }

  function init(){
    btn = document.getElementById('theme-toggle');
    if (!btn) return;

    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch(e) {}
    var prefersDark = window.matchMedia &&
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial = stored ? stored : (prefersDark ? 'dark' : 'light');
    setTheme(initial);

    btn.addEventListener('click', function(){
      var next = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      setTheme(next);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
