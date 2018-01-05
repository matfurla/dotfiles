# .bashrc
# If not running interactively, don't do anything
[[ $- != *i* ]] && return

###################################################
#                       PROMPT                    #
###################################################
force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1="  ──────  \[\e[0m\]"
fi

###################################################
#                    FUNCTIONS                    #
###################################################
cd() {
    builtin cd "$@" && ls --color=auto
}

mkd () {
    mkdir -p $1
    cd $1
}

function extract {
 if [ -z "$1" ]; then
    # display usage if no parameters given
    echo "Usage: extract <path/file_name>.<zip|rar|bz2|gz|tar|tbz2|tgz|Z|7z|xz|ex|tar.bz2|tar.gz|tar.xz>"
    echo "       extract <path/file_name_1.ext> [path/file_name_2.ext] [path/file_name_3.ext]"
    return 1
 else
    for n in $@
    do
      if [ -f "$n" ] ; then
          case "${n%,}" in
            *.tar.bz2|*.tar.gz|*.tar.xz|*.tbz2|*.tgz|*.txz|*.tar) 
                         tar xvf "$n"       ;;
            *.lzma)      unlzma ./"$n"      ;;
            *.bz2)       bunzip2 ./"$n"     ;;
            *.rar)       unrar x -ad ./"$n" ;;
            *.gz)        gunzip ./"$n"      ;;
            *.zip)       unzip ./"$n"       ;;
            *.z)         uncompress ./"$n"  ;;
            *.7z|*.arj|*.cab|*.chm|*.deb|*.dmg|*.iso|*.lzh|*.msi|*.rpm|*.udf|*.wim|*.xar)
                         7z x ./"$n"        ;;
            *.xz)        unxz ./"$n"        ;;
            *.exe)       cabextract ./"$n"  ;;
            *)
                         echo "extract: '$n' - unknown archive method"
                         return 1
                         ;;
          esac
      else
          echo "'$n' - file does not exist"
          return 1
      fi
    done
fi
}

###################################################
#                    ALIASES                      #
###################################################
alias sd='sudo'
alias ls='ls --color=auto'
alias la='ls -la --color=auto'
alias p='sudo shutdown -h now'
alias rb='sudo shutdown -r now'

alias q='xbps-query -Rs'
alias i='sudo xbps-install'
alias u='sudo xbps-install -Su'
alias r='sudo xbps-remove -R'
alias c='sudo xbps-remove -Oo'

alias v='nvim'
alias sv='sudo nvim'

alias ld='ldmc -l'
alias rd='sudo ldmc -r'

alias xres='nvim $HOME/.Xresources &'
alias xload='xrdb -load ~/.Xresources'

alias m='ncmpcpp'

alias rasp='ssh pi@192.168.88.245'

###################################################
#                     EXPORT                      #
###################################################
export TERM='xterm-256color'
export BROWSER='firefox'
export VISUAL='nvim'
export EDITOR='nvim'
export MPD_HOST=192.168.88.249
