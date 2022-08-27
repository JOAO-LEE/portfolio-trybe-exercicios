# 🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

$docker pull debian:stable-slim;

# 🚀 Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

$docker container run -it debian:stable-slim;

# 🚀 No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.

$cat /etc/*-release;
