// Generate random ids for task lists + tasks
export function randomId() {
  return Math.random().toString(16).slice(2);
}
export function formatText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
