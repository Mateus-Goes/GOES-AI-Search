#GOES_front
import tkinter as tk
from tkinter import scrolledtext, PhotoImage, font as tkFont
from GOES_API_google import goes_search


def on_search():
    tag = entry.get()
    goes_search(tag, api_key, cse_id, text_area)


api_key = "your-google-api-key"
cse_id = "your-id"

# Configuração inicial
root = tk.Tk()
root.title("GOES Search. Powered by OpenAI")
root.geometry('1400x600')  # Tamanho da janela

# Configurações de fonte
default_font = tkFont.nametofont("TkDefaultFont")
default_font.configure(family="Helvetica", size=12)
root.option_add("*Font", default_font)

# Frame para o logo
logo_frame = tk.Frame(root, pady=10, bg='#f0f0f0')
logo_frame.pack(fill='x')

# Carrega e exibe o logo
logo_image = PhotoImage(file="C:/Users/Mateus/Downloads/logo_goes.png")
logo_label = tk.Label(logo_frame, image=logo_image, bg='#f0f0f0')
logo_label.pack()

# Frame para o campo de entrada e botão
input_frame = tk.Frame(root, pady=10)
input_frame.pack(pady=(1, 10))

entry = tk.Entry(input_frame, width=58, font=("Helvetica", 16))
entry.grid(row=0, column=0, padx=(20, 10), sticky="ew")

# Botão de pesquisa
search_button = tk.Button(input_frame, text="Pesquisar", command=on_search,
                          bg='#4CAF50', fg='white', font=("Helvetica", 12), relief='raised')
search_button.grid(row=0, column=1, ipadx=10, ipady=0.5)

# Área de texto para os resultados
text_area = scrolledtext.ScrolledText(
    root, height=25, borderwidth=2, relief="solid", padx=10, pady=10, wrap='word')
text_area.pack(fill='both', expand=True, padx=20, pady=10)

root.mainloop()
