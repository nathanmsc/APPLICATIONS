# APPLICATIONS

Github settings

```sh
ssh-keygen -t rsa -b 4096 -C "name@dominio.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
```
Make ssh key on github from SSH an GPG keys

```txt
https://github.com/settings/keys
```

Test connection ssh

```sh
ssh -T git@github.com
```

Clone and pull repository

```git
git clone git@github.com:mindsetcloud-IT/StoreOfBuild.git
git pull git@github.com:mindsetcloud-IT/StoreOfBuild.git
```

Configure user CLI

```sh
git config --global user.email "user@dominio.comm"
git config --global user.name "name"
git push --set-upstream origin main
```

