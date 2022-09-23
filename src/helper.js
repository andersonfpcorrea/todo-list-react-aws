export const orderObjByDate = (date, array) =>
  array.sort(
    (a, b) => new Date(a[date]).getTime() - new Date(b[date]).getTime()
  );
