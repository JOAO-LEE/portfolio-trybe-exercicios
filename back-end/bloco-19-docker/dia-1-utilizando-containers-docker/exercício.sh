# 🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

$docker pull debian:stable-slim;

# 🚀 Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

$docker container run -it debian:stable-slim;

# 🚀 No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.

$cat /etc/*-release;

# Resultado mostrado:

#PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
#NAME="Debian GNU/Linux"
#VERSION_ID="11"
#VERSION="11 (bullseye)"
#VERSION_CODENAME=bullseye
#ID=debian
#HOME_URL="https://www.debian.org/"
#SUPPORT_URL="https://www.debian.org/support"
#BUG_REPORT_URL="https://bugs.debian.org/"

# 🚀 Encerre o terminal.

$exit

