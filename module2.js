({
  async slowAdd(a, b, delayMsec) {
    await module1.delay(delayMsec);
    const res = module1.add(a, b);
    return res;
  }
});
