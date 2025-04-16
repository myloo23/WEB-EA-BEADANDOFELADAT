onmessage = function (e) {
    if (e.data === "start") {
      // Számolás
      let sum = 0;
      for (let i = 1; i <= 1000; i++) {
        sum += i;
      }
      postMessage(sum);
    }
  };
  