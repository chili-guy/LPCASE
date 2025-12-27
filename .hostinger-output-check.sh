#!/bin/bash

# Script de verificação pós-build para Hostinger
# Este script verifica e prepara os arquivos finais

echo "🔍 Verificando output do build..."

DIST_DIR="dist/public"
HTACCESS=".htaccess"

# Verificar se dist/public existe
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ Erro: $DIST_DIR não encontrado!"
  echo "   Execute: npm run build"
  exit 1
fi

# Verificar se index.html existe
if [ ! -f "$DIST_DIR/index.html" ]; then
  echo "❌ Erro: index.html não encontrado em $DIST_DIR!"
  exit 1
fi

# Copiar .htaccess para dist/public
if [ -f "$HTACCESS" ]; then
  cp "$HTACCESS" "$DIST_DIR/"
  echo "✅ .htaccess copiado para $DIST_DIR/"
else
  echo "⚠️  Aviso: .htaccess não encontrado na raiz!"
fi

echo "✅ Verificação concluída!"
echo "📁 Diretório de publicação: $DIST_DIR"

