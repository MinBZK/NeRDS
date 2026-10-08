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
// Nothing is stored, so the banner is back on the next page load. The site
// promises to keep nothing on the visitor's device.
function initDismissibleBanners() {
  document.querySelectorAll('nldd-banner[dismissible]').forEach((banner) => {
    banner.addEventListener('dismiss', () => banner.remove());
  });
}
