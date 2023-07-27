#!/usr/bin/env bash

# Here we should check for which installer available to use for this install script (brew, apt, or yum)
# If none of those are available, we should exit with an error
INSTALL_CMD=""
# check for brew first
if [[ $(command -v brew) ]]; then
    INSTALL_CMD="brew install -y"
elif [[ $(command -v apt) ]]; then
    INSTALL_CMD="apt install -y"
elif [[ $(command -v yum) ]]; then
    INSTALL_CMD="yum install -y"
else
    echo "No package manager found. Exiting."
    exit 1
fi


# Install zsh and oh-my-zsh if not already installed
if [[ ! $(command -v zsh) ]]; then
    sudo $INSTALL_CMD zsh
fi

# Install autojump
if [[ ! $(command -v autojump) ]]; then
    sudo $INSTALL_CMD autojump
fi

if [[ ! -d ~/.oh-my-zsh ]]; then
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
fi

# Install starship if not installed
if [[ ! $(command -v starship) ]]; then
    sudo curl -sS https://starship.rs/install.sh | sh -s -- -y
fi

# Install vim
if [[ ! $(command -v vim) ]]; then
    sudo $INSTALL_CMD vim
fi

# Install antigen from this repo
# first, backup .antigen.zsh if it exists
if [[ -f ~/.antigen.zsh ]]; then
    mv ~/.antigen.zsh ~/.antigen.zsh.bak
fi
cp .antigen.zsh ~/.antigen.zsh

# Install .zshrc from this rep
# first, backup .zshrc if it exists
if [[ -f ~/.zshrc ]]; then
    mv ~/.zshrc ~/.zshrc.bak
fi
cp .zshrc ~/.zshrc

# Install .positrc from this repo
# first, backup .positrc if it exists
if [[ -f ~/.positrc ]]; then
    mv ~/.positrc ~/.positrc.bak
fi
cp .positrc ~/.positrc

# Copy .config contents
if [[ ! -d ~/.config ]]; then
    mkdir ~/.config
fi
cp -r .config/* ~/.config

# Make zsh the default shell
sudo chsh -s $(which zsh) $(whoami)