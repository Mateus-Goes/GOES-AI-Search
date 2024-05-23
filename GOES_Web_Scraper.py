#GOES_Web_Scraper
import requests
from bs4 import BeautifulSoup
from GOES_API_gpt import send_file_to_chatgpt
import os

def fetch_and_save_html(salva_link, query, filename="uniao_htmls_coletadas.txt"):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    try:
        with open(filename, 'w', encoding='utf-8') as file:
            print(f"Salvando HTMLs em: {os.path.abspath(filename)}")  # Log do nome do arquivo com caminho absoluto
            for key, url in salva_link.items():
                print(f"Processando {url}...")  # Log do URL sendo processado
                response = requests.get(url, headers=headers)
                if response.status_code == 200:
                    soup = BeautifulSoup(response.text, 'html.parser')
                    elements = soup.find_all(['h1', 'h2', 'h3', 'p'])
                    for element in elements:
                        text = element.get_text(strip=True)
                        if len(text) > 10:  # Filtra elementos com texto muito curto
                            file.write(f"{element.name.upper()} ({key}): {text}\n")
                    file.write("\n---\n\n")
                else:
                    file.write(f"Link({key}): {url} returned status code {response.status_code}\n\n---\n\n")
        send_file_to_chatgpt(filename, query)
    except Exception as e:
        print(f"Erro ao salvar o arquivo {filename}: {e}")
