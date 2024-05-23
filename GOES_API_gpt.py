#GOES_API_gpt
import openai
import re

def clean_text(text):
    # Remove múltiplos espaços em branco e novas linhas
    text = re.sub(r'\s+', ' ', text).strip()
    # Remove caracteres especiais, incluindo o traço '-'
    text = re.sub(r'[^\w\s.,]', '', text)
    return text

def send_file_to_chatgpt(filename, query):

    openai.api_key = 'your-api-key'

    # Lê o conteúdo do arquivo
    with open(filename, 'r', encoding='utf-8') as file:
        file_content = file.read()


    cleaned_content = clean_text(file_content)
    print(cleaned_content)

    prompt_text = (
    f"Resuma a seguinte pesquisa de maneira mais breve possível (no máximo 3 parágrafos) sobre '{query}' que eu fiz "
    f"Forneça um resumo sobre o assunto '{query}' baseado "
    f"apenas no conteúdo que foi fornecido. Segue o conteúdo abaixo: \n\n{cleaned_content}")


    try:
        response = openai.ChatCompletion.create(
            model="gpt-4-turbo",  # ou o modelo mais recente disponível
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt_text}
            ],
            max_tokens=3500,  
            temperature=0.3  
        )
        return response.choices[0].message['content'].strip()
    except Exception as e:
        return f"An error occurred: {str(e)}"

