const notificationRemplate = `
<div data-notification
  class="bx--toast-notification bx--toast-notification--info bx--toast-notification--low-contrast"
  role="alert">
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--toast-notification__icon" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,7Zm4,17.12H12V21.88h2.88V15.12H13V12.88h4.13v9H20Z"></path></svg>
  <div class="bx--toast-notification__details">
    <h3 class="bx--toast-notification__title">Notification title</h3>
    <p class="bx--toast-notification__subtitle">Subtitle text goes here.</p>
    <p class="bx--toast-notification__caption">Time stamp [00:00:00]</p>
  </div>
  <button data-notification-btn class="bx--toast-notification__close-button" type="button"
    aria-label="close">
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--toast-notification__close-icon" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
  </button>
</div>`;

function renderNotification() {
    
}