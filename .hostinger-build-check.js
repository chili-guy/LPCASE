// Arquivo de verificação de build para Hostinger
// Este arquivo é executado após o build para verificar se tudo está correto

const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist', 'public');
const htaccessPath = path.resolve(__dirname, '.htaccess');
const targetHtaccess = path.resolve(distPath, '.htaccess');

console.log('🔍 Verificando build para Hostinger...');

// Verificar se dist/public existe
if (!fs.existsSync(distPath)) {
  console.error('❌ Erro: dist/public não encontrado!');
  console.error('   Execute: npm run build');
  process.exit(1);
}

// Verificar se index.html existe
const indexPath = path.resolve(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ Erro: index.html não encontrado em dist/public!');
  process.exit(1);
}

// Copiar .htaccess para dist/public
if (fs.existsSync(htaccessPath)) {
  fs.copyFileSync(htaccessPath, targetHtaccess);
  console.log('✅ .htaccess copiado para dist/public/');
} else {
  console.warn('⚠️  Aviso: .htaccess não encontrado na raiz!');
}

console.log('✅ Build verificado com sucesso!');
console.log(`📁 Diretório de publicação: ${distPath}`);

