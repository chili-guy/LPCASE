# 🔧 Configuração do Deploy Automático na Hostinger via Git

Este guia explica como configurar o deploy automático na Hostinger após conectar o repositório Git.

## 📋 Configurações no Painel da Hostinger (hPanel)

### 1. Acesse a Seção de Aplicações Node.js

1. Faça login no **hPanel** da Hostinger
2. Vá em **Websites** → **Aplicações Node.js**
3. Selecione seu domínio ou crie uma nova aplicação

### 2. Configure o Repositório Git

1. **Repositório:** `chili-guy/LPCASE`
2. **Branch:** `main`
3. **Autorização:** Certifique-se de que a Hostinger tem acesso ao GitHub

### 3. ⚙️ Configurações de Build (IMPORTANTE!)

Configure os seguintes campos no painel da Hostinger:

#### **Comando de Build:**
```bash
npm install && npm run build
```

#### **Diretório de Publicação (Output Directory):**
```
dist/public
```

**⚠️ IMPORTANTE:** O diretório deve ser `dist/public` e **NÃO** apenas `dist`!

#### **Comando de Start (se solicitado):**
```
npm start
```

**Nota:** Como é uma aplicação estática (SPA), você pode deixar em branco ou usar um servidor estático simples.

### 4. Variáveis de Ambiente (se necessário)

Se sua aplicação precisar de variáveis de ambiente, adicione-as no painel:
- `NODE_ENV=production`

### 5. Iniciar o Deploy

1. Clique em **Deploy** ou **Salvar e Fazer Deploy**
2. Aguarde o processo de build (pode levar alguns minutos)
3. Verifique os logs se houver erros

## ✅ Verificações Pós-Deploy

Após o deploy, verifique:

1. **Arquivo .htaccess está presente:**
   - O script de build copia automaticamente o `.htaccess` para `dist/public/`
   - Verifique se está na raiz do diretório de publicação

2. **Estrutura de arquivos:**
   ```
   dist/public/
   ├── .htaccess          ← Deve estar aqui
   ├── index.html
   ├── favicon.svg
   └── assets/
       └── [arquivos JS/CSS]
   ```

3. **Site funcionando:**
   - Acesse seu domínio
   - Verifique se a página carrega
   - Teste a navegação (sem erros 404)

## 🔄 Deploy Automático

Após a configuração inicial:

- **Push automático:** Toda vez que você fizer `git push` para a branch `main`, a Hostinger fará o deploy automaticamente
- **Logs:** Acompanhe os logs de build no painel da Hostinger
- **Notificações:** Configure notificações por email se disponível

## 🐛 Troubleshooting

### Problema: Build falha

**Solução:**
- Verifique os logs de build no painel
- Certifique-se de que `npm install` está funcionando
- Verifique se todas as dependências estão no `package.json`

### Problema: Site não carrega após deploy

**Solução:**
- Verifique se o diretório de publicação está correto: `dist/public`
- Verifique se o `.htaccess` está presente
- Verifique os logs de erro do servidor

### Problema: Erro 404 em rotas

**Solução:**
- Certifique-se de que o `.htaccess` está na raiz de `dist/public/`
- Verifique se o módulo `mod_rewrite` está habilitado (geralmente está por padrão)

### Problema: Arquivos CSS/JS não carregam

**Solução:**
- Verifique se a pasta `assets/` foi gerada corretamente
- Verifique os caminhos no `index.html`
- Limpe o cache do navegador

## 📝 Arquivos de Configuração Criados

Os seguintes arquivos foram criados para facilitar o deploy:

1. **`.hostinger-build-check.js`** - Verifica o build após a execução
2. **`.hostinger-output-check.sh`** - Script de verificação pós-build
3. **`script/build.ts`** - Modificado para copiar `.htaccess` automaticamente

## 🎯 Resumo das Configurações

| Campo | Valor |
|-------|-------|
| **Repositório** | `chili-guy/LPCASE` |
| **Branch** | `main` |
| **Comando de Build** | `npm install && npm run build` |
| **Diretório de Publicação** | `dist/public` |
| **Comando de Start** | (deixar em branco ou `npm start`) |

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de build no painel da Hostinger
2. Entre em contato com o suporte da Hostinger
3. Verifique a documentação oficial da Hostinger sobre Node.js

---

**✅ Após configurar, faça um teste fazendo um pequeno commit e push para verificar se o deploy automático funciona!**

