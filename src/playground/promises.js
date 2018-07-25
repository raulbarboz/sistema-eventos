const promise = new Promise((resolve, reject) => {
  reject('Deu ruim')
})

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})
