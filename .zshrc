# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH
export PATH=$PATH:/Applications/CMake.app/Contents/bin:~/.local/bin
# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"
alias get_idf='. $HOME/esp/esp-idf/export.sh'
export LC_ALL="C.UTF-8"

autoload -Uz compinit && compinit

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
source ~/.antigen.zsh
eval "$(starship init zsh)"
# Bundles from the default repo (robbyrussell's oh-my-zsh).
antigen bundle git
antigen bundle heroku
antigen bundle pip
antigen bundle lein
antigen bundle command-not-found
antigen bundle autojump
antigen bundle brew
antigen bundle common-aliases
antigen bundle compleat
antigen bundle git-extras
antigen bundle git-flow
antigen bundle npm
antigen bundle osx
antigen bundle web-search
antigen bundle z
# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle marlonrichert/zsh-autocomplete@main 

# Tell Antigen that you're done.
antigen apply

zstyle ':autocomplete:tab:*' widget-style menu-select
bindkey -M menuselect '\r' accept-line

HISTFILE=~/.histfile
HISTSIZE=10000
SAVEHIST=10000
setopt share_history

# If ~/.positrc exists, load it.
if [[ -f ~/.positrc ]]; then
  source ~/.positrc
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export PATH=$PATH:/Users/zhannum/.spicetify

### MANAGED BY RANCHER DESKTOP START (DO NOT EDIT)
export PATH="/Users/zhannum/.rd/bin:$PATH"
### MANAGED BY RANCHER DESKTOP END (DO NOT EDIT)
