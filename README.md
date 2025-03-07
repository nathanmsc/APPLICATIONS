# APPLICATIONS

Github settings

```sh
ssh-keygen -t rsa -b 4096 -C "name@dominio.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
```
Make ssh key on github from SSH an GPG keys

[SSH KEY]](https://github.com/settings/keys)

Test connection ssh

```sh
ssh -T git@github.com
```

Clone and pull repository

```git
git clone git@github.com:nathanmsc/APPLICATIONS.git
git pull git@github.com:nathanmsc/APPLICATIONS.git
```

Configure user CLI

```sh
git config --global user.email "user@dominio.comm"
git config --global user.name "name"
git push --set-upstream origin main
```

