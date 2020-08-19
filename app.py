import streamlit as st
from bot import generate_response

# title
st.title("BotVic")
st.header("Retrieval Based Chatbot")
st.markdown(
    """
    This is a simple retrieval based chatbot. It utilizes *TF-IDF Vectorizer* to find & return sentence most similar to user prompt. Based on the wonderful blog - [Building a Simple Chatbot from Scratch in Python (using NLTK)](https://medium.com/analytics-vidhya/building-a-simple-chatbot-in-python-using-nltk-7c8c8215ac6e) by Parul Pandey
    """
)

# get input text
input_text = st.text_input(label="English text.")

# return response
if st.button("Submit"):
    with st.spinner("Thinking ..."):
        response = generate_response(input_text)
        st.subheader("Predicted Spanish Translation")
        st.success(f"{response}")

st.markdown(
    "The interactive app is created using [Streamlit](https://streamlit.io/), an open-source framework that lets users creating apps for machine learning projects very easily."
)
