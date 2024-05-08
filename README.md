To copy encoded text from Colab use:

```

from IPython.display import HTML

# Read text from a file
with open('checksums.txt', 'r') as file:
    your_text = file.read()

html_text = f'''<textarea id="clipborad-text" rows="5" cols="50">{your_text}</textarea> 
                <button onclick="copyToClipboard()">Copy text</button>
                <script>
                function copyToClipboard() {{
                    var copyText = document.getElementById("clipborad-text");
                    copyText.select();
                    navigator.clipboard.writeText(copyText.value);
                    alert("Copied the text: " + copyText.value);
                }}
                </script>'''
display(HTML(html_text))
```
