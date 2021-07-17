const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

const pickQuote = () => {
  const randomNum = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomNum];

  quoteText.innerText = quote.text;

  if (!quote.author) {
    quoteAuthor.innerText = "Unknown author";
  } else {
    quoteAuthor.innerText = quote.author;
  }
};

const fetchQuotes = async () => {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    pickQuote();
  } catch (error) {
    alert("Request failed");
    console.log(error);
  }
};

fetchQuotes();

newQuoteBtn.addEventListener("click", () => {
  pickQuote();
});
