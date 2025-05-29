const EventEmitter = require("events");

const event = new EventEmitter();

// Set max listeners to 5
event.setMaxListeners(5);

// Listen to "subscribe"
const subscribeHandler = () => {
  console.log("🛎️ User has subscribed!");
};
event.on("subscribe", subscribeHandler);

// Listen to "unsubscribe"
const unsubscribeHandler = () => {
  console.log("👋 User has unsubscribed!");
};
event.on("unsubscribe", unsubscribeHandler);

// Trigger both
event.emit("subscribe");
event.emit("unsubscribe");

// Remove unsubscribe
event.removeListener("unsubscribe", unsubscribeHandler);

// Try triggering again
event.emit("unsubscribe"); // 👀 Nothing will happen now