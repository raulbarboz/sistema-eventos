
export default (events) => {
    return events
    .map((event) => event.amount)
    .reduce((sum, value) => {
      return sum + value
    }, 0);
  }
