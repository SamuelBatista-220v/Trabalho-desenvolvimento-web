#!/usr/bin/env python3
"""
Extrai texto de um arquivo .docx (um zip contendo word/document.xml) e imprime no stdout.
Uso: python extract_docx.py caminho/para/arquivo.docx
"""
import sys
import zipfile
import xml.etree.ElementTree as ET

if len(sys.argv) < 2:
    print('Uso: extract_docx.py arquivo.docx')
    sys.exit(1)

path = sys.argv[1]
try:
    with zipfile.ZipFile(path) as z:
        with z.open('word/document.xml') as f:
            xml = f.read()
            # Parse XML e extrair textos dos elementos w:t
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            root = ET.fromstring(xml)
            texts = []
            for t in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                if t.text:
                    texts.append(t.text)
            print('\n'.join(texts))
except Exception as e:
    print('Erro ao ler docx:', e)
    sys.exit(2)
