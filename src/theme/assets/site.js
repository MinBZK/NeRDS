// Behavior of the page shell: the section navigation sheet and dismissible banners.

document.addEventListener('DOMContentLoaded', () => {
  initSidebarTrigger();
  initDismissibleBanners();
});

// On narrow screens the section navigation lives in a sheet that this button opens.
function initSidebarTrigger() {
  const section = document.getElementById('content-section');
  const trigger = document.getElementById('sidebar-open');
  if (!section || !trigger) return;

  trigger.addEventListener('click', () => section.show());
  section.addEventListener('open', () => { trigger.expanded = true; });
  section.addEventListener('close', () => { trigger.expanded = false; });
}

// A banner only reports that it was dismissed; removing it is up to the page.
// The choice is remembered per banner text so it stays away on the next visit.
function initDismissibleBanners() {
  document.querySelectorAll('nldd-banner[dismissible]').forEach((banner) => {
    const key = 'dismissed-banner:' + banner.getAttribute('text');
    if (readStorage(key)) {
      banner.remove();
      return;
    }
    banner.addEventListener('dismiss', () => {
      writeStorage(key, '1');
      banner.remove();
    });
  });
}

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // Storage is unavailable (private window); the banner returns next visit.
  }
}
