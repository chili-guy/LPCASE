# 🚀 Guia de Deploy na Hostinger

Este guia explica como fazer deploy do projeto **Stylish-Case** na Hostinger.

## 📋 Pré-requisitos

- Conta na Hostinger com acesso FTP/SSH
- Node.js instalado localmente (versão 18 ou superior)
- Git instalado

## 🔧 Passo a Passo

### 1. Build do Projeto Localmente

Execute os seguintes comandos no terminal:

```bash
# Instalar dependências
npm install

# Fazer build do projeto
npm run build
```

Isso irá gerar os arquivos estáticos na pasta `dist/public/`.

### 2. Preparar Arquivos para Upload

Após o build, você terá a seguinte estrutura:

```
dist/
  └── public/
      ├── index.html
      ├── assets/
      │   ├── *.js
      │   ├── *.css
      │   └── *.png/jpg/webp
      └── favicon.svg
```

### 3. Upload para Hostinger

#### Opção A: Via FTP (FileZilla, WinSCP, etc.)

1. **Conecte-se ao FTP da Hostinger:**
   - Host: `ftp.seu-dominio.com` ou IP fornecido pela Hostinger
   - Usuário: Seu usuário FTP
   - Senha: Sua senha FTP
   - Porta: 21 (FTP) ou 22 (SFTP)

2. **Navegue até a pasta `public_html`:**
   - Esta é a pasta raiz do seu site

3. **Limpe a pasta `public_html` (opcional):**
   - Delete todos os arquivos antigos se necessário

4. **Faça upload de TODOS os arquivos de `dist/public/`:**
   - Selecione todos os arquivos e pastas dentro de `dist/public/`
   - Faça upload para `public_html/`
   - **IMPORTANTE:** Mantenha a estrutura de pastas

5. **Faça upload do arquivo `.htaccess`:**
   - O arquivo `.htaccess` deve estar na raiz de `public_html/`

#### Opção B: Via SSH (se disponível)

```bash
# Conectar via SSH
ssh usuario@seu-dominio.com

# Navegar até public_html
cd public_html

# Fazer backup (opcional)
cp -r . ../backup_$(date +%Y%m%d)

# Limpar pasta (cuidado!)
rm -rf *

# Fazer upload via SCP (de outra máquina)
# No seu computador local:
scp -r dist/public/* usuario@seu-dominio.com:~/public_html/
scp .htaccess usuario@seu-dominio.com:~/public_html/
```

### 4. Verificar Permissões

Certifique-se de que os arquivos têm as permissões corretas:

```bash
# Via SSH (se disponível)
chmod 644 public_html/*.html
chmod 644 public_html/*.css
chmod 644 public_html/*.js
chmod 755 public_html/assets/
chmod 644 public_html/.htaccess
```

### 5. Testar o Site

1. Acesse seu domínio no navegador
2. Verifique se o site carrega corretamente
3. Teste a navegação e funcionalidades
4. Verifique no console do navegador se há erros

## 🔍 Troubleshooting

### Problema: Página em branco

**Solução:**
- Verifique se o arquivo `index.html` está na raiz de `public_html/`
- Verifique se o `.htaccess` está configurado corretamente
- Verifique os logs de erro do servidor

### Problema: 404 em rotas

**Solução:**
- Certifique-se de que o `.htaccess` está na raiz de `public_html/`
- Verifique se o módulo `mod_rewrite` está habilitado no servidor
- Entre em contato com o suporte da Hostinger se necessário

### Problema: Arquivos CSS/JS não carregam

**Solução:**
- Verifique se a pasta `assets/` foi enviada corretamente
- Verifique as permissões dos arquivos
- Limpe o cache do navegador (Ctrl+F5)

### Problema: Imagens não aparecem

**Solução:**
- Verifique se as imagens em `attached_assets/` foram copiadas para `public_html/`
- Verifique os caminhos das imagens no código
- Certifique-se de que os arquivos de imagem têm permissões corretas

## 📝 Estrutura Final no Servidor

```
public_html/
├── .htaccess
├── index.html
├── favicon.svg
├── favicon.png
├── opengraph.jpg
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── [outros arquivos]
```

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código local
2. Execute `npm run build`
3. Faça upload apenas dos arquivos alterados (ou todos para garantir)
4. Limpe o cache do navegador

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de erro do servidor na Hostinger
2. Entre em contato com o suporte da Hostinger
3. Verifique a documentação da Hostinger sobre Node.js/SPA

---

**Nota:** Se a Hostinger oferecer suporte a Node.js, você pode configurar um servidor Node.js em vez de servir arquivos estáticos. Consulte a documentação da Hostinger para mais informações.

