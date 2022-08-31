#2 - Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
$docker container run -itd --name my-server -p 4545:80 -v $(pwd)/src/:/usr/local/apache2/htdocs/ httpd:2.4

# 5 - Obtenha o id do container httpd:2.4.
$docker container ps -a 

# 6 - Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse container no Docker Host;
$docker inspect my-server

# 7 - Agora pare o container httpd:2.4;
$docker stop my-server

# 8 - Exclua o seu container
$docker stop my-server

# 10 - Obtenha o IMAGE ID do servidor;
$docker image ls

##REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
#httpd        2.4       a981c8992512   8 days ago   145MB

# 11 - Depois de obter o IMAGE ID, exclua a imagem.
$docker rmi a981c8992512