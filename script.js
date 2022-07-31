const start = new Date("2021-04-08 23:55:00").getTime();
const utcOffset = new Date().getTimezoneOffset() * 60000;
console.log("最喜欢亭宝了！");

setInterval(() => {
  const dayDom = document.getElementById("day");
  const hourDom = document.getElementById("hour");
  const minDom = document.getElementById("min");
  const secDom = document.getElementById("sec");
  const now = new Date().getTime();
  const milisecDiff = now - start - utcOffset;
  const days = Math.floor(milisecDiff / 1000 / 60 / (60 * 24));
  const dateDiff = new Date(milisecDiff);
  dayDom.innerText = days;
  hourDom.innerText = dateDiff.getHours();
  minDom.innerText = dateDiff.getMinutes();
  secDom.innerText = dateDiff.getSeconds();
}, 1000);
