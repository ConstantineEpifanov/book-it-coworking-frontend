export function formatEventDate(date) {
  const dateComponents = date.split("-");
  const year = dateComponents[0].slice(2);
  const month = dateComponents[1];
  const day = dateComponents[2];
  return `${month}/${day}/${year}`;
}
