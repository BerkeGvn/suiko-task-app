// Generate random ids for task lists + tasks
function randomId() {
  return Math.random().toString(16).slice(2);
}

export default randomId;
