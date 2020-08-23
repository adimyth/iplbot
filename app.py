import streamlit as st # type: ignore
from bot import generate_response # type: ignore

# title
st.title("BotVic")
st.header("Retrieval Based Chatbot")
st.markdown(
    """
    This is a simple retrieval based chatbot. It utilizes *TF-IDF Vectorizer* to find & return sentence most similar to user prompt. Based on the wonderful blog - [Building a Simple Chatbot from Scratch in Python (using NLTK)](https://medium.com/analytics-vidhya/building-a-simple-chatbot-in-python-using-nltk-7c8c8215ac6e) by Parul Pandey
    """
)

# get input text
st.subheader("Query")
input_text = st.text_input(label="")

# return response
if st.button("Submit"):
    with st.spinner("Thinking ..."):
        response = generate_response(input_text)
        st.subheader("Botvic Says -")
        st.success(f"{response}")

st.markdown(
    "The interactive app is created using [Streamlit](https://streamlit.io/), an open-source framework that lets users creating apps for machine learning projects very easily. GitHub Repo - [iplbot](https://github.com/adimyth/iplbot)."
)

st.sidebar.title("About")
st.sidebar.info(
    "Retrieval Based Chatbot\n\n"
    "Check the code at https://github.com/adimyth/iplbot"
)

def load_css():
    st.markdown('<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">', unsafe_allow_html=True)

def display_icons(icon, link, name=""):
    if name=="":
        name = icon.capitalize()
    return st.sidebar.markdown(f'<a href="{link}"><i class="fa fa-{icon} fa-fw"></i>&nbsp; {name}</a>', unsafe_allow_html=True)    

def display_media(icon, link):
    return st.sidebar.markdown(f'<a href="{link}"><i class="fa fa-{icon}-square fa-fw"></i>&nbsp; {icon.capitalize()}</a>', unsafe_allow_html=True)

st.sidebar.title("Contact Me")
load_css()
display_icons("globe", "https://adimyth.github.io/notes/", "Blog")
display_media("twitter", "https://twitter.com/adi_myth")
display_media("github", "https://github.com/adimyth")
display_media("linkedin", "https://www.linkedin.com/in/aditya-mishra-b50623138")
