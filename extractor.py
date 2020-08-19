import wikipedia
import pandas as pd


def get_wikipedia_page_content(topic):
    all_text = ''
    try:
        article = wikipedia.page(topic)
        all_text += get_wikipedia_page_text(article)
        # all_text += get_wikipedia_page_tables(article)
    except Exception as e:
        print(f"Wikipedia page for {topic}: ", e)
    return all_text


def get_wikipedia_page_text(article):
    return article.content


def get_wikipedia_page_tables(article):
    text = ''
    html = article.html().encode("UTF-8")
    tables = pd.read_html(html)
    for i in tables:
        text += i.to_string()
    return text


def get_all_wiki_page_content(topics):
    articles = []
    for topic in topics:
        articles.append(get_wikipedia_page_content(topic))
    return articles


if __name__ == '__main__':
    topics = ['Indian Premier League',
    'Mumbai Indians', 'Royal Challengers Bangalore', 
    'Rajasthan Royals', 'Kolkata Knight Riders', 
    'Kings XI Punjab', 'Sunrisers Hyderabad',
    'Chennai Super Kings', 'Delhi Capitals',
    '2020 Indian Premier League', '2019 Indian Premier League',
    '2018 Indian Premier League', '2017 Indian Premier League',
    '2016 Indian Premier League', '2015 Indian Premier League',
    '2014 Indian Premier League', '2013 Indian Premier League',
    '2012 Indian Premier League', '2011 Indian Premier League',
    '2010 Indian Premier League', '2009 Indian Premier League',
    '2008 Indian Premier League'
    ]
    filename = 'ipl.txt'

    articles = get_all_wiki_page_content(topics)
    with open(filename, 'w') as file:
        for article in articles:
            file.write(article)
