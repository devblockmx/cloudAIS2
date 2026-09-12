# cloudAIS2
Ejercicio para la clase 2 del seminario de arquitecturas multinube con AI

## commands
en Gitbash:
 mkdir cloudAIS2

En powershell:
wsl
lsb_release -a

Installar kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

kubectl version --client

