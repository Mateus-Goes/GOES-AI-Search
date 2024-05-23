# GOES_API_google.py
import tkinter as tk
from tkinter import scrolledtext, PhotoImage, font as tkFont
import requests
from GOES_Web_Scraper import fetch_and_save_html
from GOES_API_gpt import send_file_to_chatgpt

def goes_search(query, api_key, cse_id, text_area):
    text_area.delete(1.0, tk.END)
    
    # Configurações de fonte para o texto
    bold_font = tkFont.Font(family="Helvetica", size=12, weight="bold")
    italic_font = tkFont.Font(family="Helvetica", size=12, slant="italic")
    
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        'q': query,
        'key': api_key,
        'cx': cse_id,
        'num': 5,
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        results = response.json()
        if 'items' in results:
            contador = 1
            salva_link = {}
            
          
            text_area.insert(tk.END, 'Referências encontradas para sua pesquisa:\n', 'bold')
            
            for item in results['items']:
                link = item['link']
                salva_link[contador] = link
                
                
                text_area.insert(tk.END, f"Link ({contador}): {link}\n", 'italic')
                contador += 1
                
            filename = "uniao_htmls_coletadas.txt"
            fetch_and_save_html(salva_link, query, filename)
            summary = send_file_to_chatgpt(filename, query)
            

            text_area.insert(tk.END, f"\nResumo do ChatGPT baseado nos sites acima sobre o assunto '{query}':\n\n", 'bold')
            text_area.insert(tk.END, f"{summary}\n", 'normal')
        else:
            text_area.insert(tk.END, "No results found.\n")
    else:
        text_area.insert(tk.END, f"Error: {response.status_code}\n")


    text_area.tag_configure('bold', font=bold_font)
    text_area.tag_configure('italic', font=italic_font, foreground="blue")


