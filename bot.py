import nltk
import string
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
nltk.data.path.append("./nltk_data/")

with open('ipl.txt', 'r') as file:
    raw_data = file.read()
    raw_data = raw_data.lower()
    sentence_tokens = nltk.sent_tokenize(raw_data)


def get_word_tokens(text_string):
    text_string = text_string.lower()
    text_string = remove_punctuation_marks(text_string)
    word_tokens = nltk.word_tokenize(text_string)
    return lemmatization(word_tokens)


def remove_punctuation_marks(text_string):
    return text_string.translate(str.maketrans('', '', string.punctuation))


def lemmatization(tokens):
    lemmatizer = nltk.stem.WordNetLemmatizer()
    return [lemmatizer.lemmatize(token) for token in tokens]


def generate_response(user_input):
    updated_sentence_tokens = sentence_tokens.copy()
    updated_sentence_tokens.append(user_input)
    tfidf = TfidfVectorizer(tokenizer=get_word_tokens, stop_words='english')
    tfidf_matrix = tfidf.fit_transform(updated_sentence_tokens)
    sim_input_text = cosine_similarity(tfidf_matrix[-1], tfidf_matrix)

    max_sim_text_idx = sim_input_text.argsort()[0][-2]
    flat = sim_input_text.flatten()
    flat.sort()
    req_tfidf = flat[-2]
    if req_tfidf == 0:
        response = "I am sorry! I don't understand you."
        return response
    else:
        response = updated_sentence_tokens[max_sim_text_idx]
        return response.capitalize()
