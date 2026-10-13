/* Apply the preferred theme before rendering to avoid a light-theme flash. */
(() => {
  const key = 'privatepractice-color-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try { preference = localStorage.getItem(key); } catch {}
  if (!['light', 'dark'].includes(preference)) preference = null;
  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0b1220' : '#ffffff';
    document.dispatchEvent(new CustomEvent('clinic-theme-change'));
  }
  apply(preference || (system.matches ? 'dark' : 'light'));
  window.ClinicTheme = {
    toggle() {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch {}
      apply(preference);
    }
  };
  system.addEventListener('change', event => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', event => {
    if (event.key !== key) return;
    preference = ['light', 'dark'].includes(event.newValue) ? event.newValue : null;
    apply(preference || (system.matches ? 'dark' : 'light'));
  });
})();
