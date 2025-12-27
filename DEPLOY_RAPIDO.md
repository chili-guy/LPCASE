# ⚡ Deploy Rápido na Hostinger

## Passos Rápidos

### 1. Build Local
```bash
npm install
npm run build
```

### 2. Preparar Arquivos
```bash
# Opção 1: Usar script automático
./build-hostinger.sh

# Opção 2: Manual
mkdir -p hostinger-build
cp -r dist/public/* hostinger-build/
cp .htaccess hostinger-build/
```

### 3. Upload via FTP
- Conecte ao FTP da Hostinger
- Vá para `public_html/`
- Faça upload de **TODOS** os arquivos de `hostinger-build/`
- Certifique-se de que `.htaccess` está na raiz

### 4. Verificar
- Acesse seu domínio
- Teste o site

## 📁 Estrutura no Servidor

```
public_html/
├── .htaccess          ← IMPORTANTE: Deve estar na raiz
├── index.html
├── favicon.svg
└── assets/
    └── [arquivos JS/CSS]
```

## ⚠️ Importante

- O arquivo `.htaccess` DEVE estar na raiz de `public_html/`
- Todos os arquivos de `hostinger-build/` devem ser enviados
- Mantenha a estrutura de pastas (especialmente `assets/`)

## 🔧 Se algo der errado

1. Verifique se `.htaccess` está na raiz
2. Verifique permissões dos arquivos (644 para arquivos, 755 para pastas)
3. Limpe cache do navegador
4. Verifique logs de erro na Hostinger

