#2 - Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
$docker container run -itd --name my-server -p 4545:80 -v $(pwd)/src/:/usr/local/apache2/htdocs/ httpd:2.4

# 3 - Obtenha o id do container httpd:2.4.
$docker container ps -a 