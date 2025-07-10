const quotes = [
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const getQuoteBtn = document.getElementById('getQuote');
const tweetBtn = document.getElementById('tweet');

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.innerText = `"${quote.text}"`;
    authorEl.innerText = `– ${quote.author}`;
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" – ${quote.author}`)}`;
    tweetBtn.onclick = () => window.open(tweetURL, "_blank");
  }, 300);
}

getQuoteBtn.addEventListener('click', showQuote);
