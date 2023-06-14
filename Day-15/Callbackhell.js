callback1((err, res1) => {
  if (err) {
  } else {
    callback2(res1, (err, res2) => {
      // ...err...err..
    })
  }
})

// pyramid of Boom (Callback hell)
