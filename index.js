const allNotificationBody = document.querySelectorAll(".notification_body");
const notifications = document.querySelectorAll(".notification");

allNotificationBody.forEach((notification_body) => {
   if (notification_body.textContent === "") {
      notification_body.style.display = "none";
   }
});
