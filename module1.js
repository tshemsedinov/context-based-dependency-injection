({
  delay(msec) {
    console.log('Just an example module');
    return new Promise((resolve) => {
      setTimeout(resolve, msec);
    });
  },

  add(a, b) {
    return a + b;
  }
});
