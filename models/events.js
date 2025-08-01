const eventsDao = require("../daos/events");

const events = [
  { name: "Summer Fastival", organizer: "YK", description: "Summer Fastival in Singapore" },
  { name: "Summer Fastival2", organizer: "YK2", description: "Summer Fastival in Singapore2" },
];

module.exports = {
  getAll,
  addEvent,
  deleteEvent,
  updateEvent
}; 

async function getAll() {
  return await eventsDao.find();
  // return events;
};


async function addEvent(newEvent) {
  if (newEvent) {
      return await eventsDao.create(newEvent);
  }
  return false;
};

async function deleteEvent(eventId) {
  console.log(eventId);
  if (eventId) {
    return await eventsDao.findByIdAndDelete(eventId);
  }
  return false;
};

async function updateEvent(eventId, participant) {
  console.log(eventId, participant);
  if (eventId, participant) {
      return await eventsDao.findByIdAndUpdate(eventId, participant);
  }
  return false;
}


// const users = await User.find({
//   _id: { $in: clerkUserid }
// });