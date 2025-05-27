const EventEmitter = require("events");

// Create instance
const event = new EventEmitter();

// Listen to "subscribe" event
event.on("subscribe", () => {
  console.log("🛎️ User has subscribed!");
});

// Trigger the event
event.emit("subscribe");
