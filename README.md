# IPL BOT

A retreival based question & answering bot trained on IPL wikipedia pages. Built using [Streamlit](https://www.streamlit.io/) and deployed using [Heroku](https://www.heroku.com/) - https://ipl-qa-bot.herokuapp.com/.

![Demo](out.gif)

## Libraries Used
* Streamlit - For creating the web app
* Scikit Learn - For training a Tfidf vectorizer
* BeautifulSoup, Request - For extracting and parsing data

## How to run the app

Clone the repository
```bash
git clone https://github.com/adimyth/iplbot.git
```

Install the requirements
```bash
pip install -r requirements.txt
```

Run the app
```bash
cd iplbot
streamlit run app.py
```

## How it works
1. Run extractor.py to extract text from the following list of wikipedia pages
    * [Indian Premier League](https://en.wikipedia.org/wiki/Indian_Premier_League)
    * [Category:Indian Premier League coaches](https://en.wikipedia.org/wiki/Category:Indian_Premier_League_coaches)
    * [Mumbai Indians](https://en.wikipedia.org/wiki/Mumbai_Indians)
    * [Chennai Super Kings](https://en.wikipedia.org/wiki/Chennai_Super_Kings)
    * [Kolkata Knight Riders](https://en.wikipedia.org/wiki/Kolkata_Knight_Riders)
    * [Rajasthan Royals](https://en.wikipedia.org/wiki/Rajasthan_Royals)
    * [Sunrisers Hyderabad](https://en.wikipedia.org/wiki/Sunrisers_Hyderabad)
    * [Kings XI Punjab](https://en.wikipedia.org/wiki/Kings_XI_Punjab)
    * [Delhi Capitals](https://en.wikipedia.org/wiki/Delhi_Capitals)
    This will create a file called ipl.txt which will contain the text from all the above links

2. Given an input sentence, `generate_response` function in bot.py does the following
    * Lowercase the entire string
    * Removing punctuation marks
    * Word tokenization
    * Lemmatization
    * Train a tfidf vectorizer on the sentences generated in step 1 as well as on the input sentence
    * Uses cosine similarity to find the two closest vectors
    * Sorts the vector similarity in decreasing order & chooses the first vector
    * Gets the corresponding sentence & capitalizes it

Please :star: the repo and share it
