export default function swDev() {
  let url = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(url).then((res) => {
      console.log(res)
  });
}
