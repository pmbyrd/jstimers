function countDown(numbers) {
  let counting = numbers;
  let time = setInterval(() => {
    console.log(counting);
    counting--;
    if (counting <= 0) {
      clearInterval(time);
      console.log("DONE!!!!!!!!!");
    } else {
    }
  }, 1000);
}

countDown(4);
