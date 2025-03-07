# APPLICATIONS

Github settings

```sh
ssh-keygen -t rsa -b 4096 -C "name@dominio.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
```
Make ssh key on github

```html
<a>https://github.com/settings/keys</a>
<p>SSH an GPG keys</p>
```

Test connection ssh

```sh
ssh -T git@github.com
git clone git@github.com:mindsetcloud-IT/StoreOfBuild.git
git pull git@github.com:mindsetcloud-IT/StoreOfBuild.git
git config --global user.email "mindsetcloud@dominio.comm"
git config --global user.name "namea"
git push --set-upstream origin main
```
If proxy configured

```sh
#set proxy on npm
npm config set proxy "http://meu.endereco.proxy:80"
npm config set https-proxy "http://meu.endereco.proxy:80"
```
