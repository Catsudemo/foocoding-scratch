async function getAdvice() {
  const adviceResponse = await fetch('https://api.adviceslip.com/advice');
  const payloadText = adviceResponse.JSON();
  return payloadText.slip.advice;
}

async function addAdviceToPage() {
  document.querySelector('h1'.innerHTML = await getAdvice();
}