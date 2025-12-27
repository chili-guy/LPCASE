#!/bin/bash

# Script de build para Hostinger
# Este script prepara os arquivos para upload na Hostinger

echo "🚀 Iniciando build para Hostinger..."

# Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
rm -rf dist
rm -rf hostinger-build

# Instalar dependências (se necessário)
if [ ! -d "node_modules" ]; then
  echo "📦 Instalando dependências..."
  npm install
fi

# Fazer build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# Criar pasta de build para Hostinger
echo "📁 Preparando arquivos para Hostinger..."
mkdir -p hostinger-build

# Copiar arquivos de dist/public para hostinger-build
cp -r dist/public/* hostinger-build/

# Copiar .htaccess
cp .htaccess hostinger-build/

# Verificar se os arquivos foram copiados
if [ -f "hostinger-build/index.html" ]; then
  echo "✅ Build concluído com sucesso!"
  echo "📂 Arquivos prontos em: hostinger-build/"
  echo ""
  echo "📋 Próximos passos:"
  echo "1. Conecte-se ao FTP da Hostinger"
  echo "2. Navegue até public_html/"
  echo "3. Faça upload de TODOS os arquivos de hostinger-build/"
  echo "4. Certifique-se de que o .htaccess está na raiz"
else
  echo "❌ Erro: index.html não encontrado!"
  exit 1
fi

