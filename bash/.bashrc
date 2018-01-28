# .bashrc

#  ▄▄▄▄    ▄▄▄        ██████  ██░ ██  ██▀███   ▄████▄  
# ▓█████▄ ▒████▄    ▒██    ▒ ▓██░ ██▒▓██ ▒ ██▒▒██▀ ▀█  
# ▒██▒ ▄██▒██  ▀█▄  ░ ▓██▄   ▒██▀▀██░▓██ ░▄█ ▒▒▓█    ▄ 
# ▒██░█▀  ░██▄▄▄▄██   ▒   ██▒░▓█ ░██ ▒██▀▀█▄  ▒▓▓▄ ▄██▒
# ░▓█  ▀█▓ ▓█   ▓██▒▒██████▒▒░▓█▒░██▓░██▓ ▒██▒▒ ▓███▀ ░
# ░▒▓███▀▒ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒░ ▒▓ ░▒▓░░ ░▒ ▒  ░
# ▒░▒   ░   ▒   ▒▒ ░░ ░▒  ░ ░ ▒ ░▒░ ░  ░▒ ░ ▒░  ░  ▒   
#  ░    ░   ░   ▒   ░  ░  ░   ░  ░░ ░  ░░   ░ ░        
#  ░            ░  ░      ░   ░  ░  ░   ░     ░ ░      
#       ░                                     ░        

## PROMPT
[[ $- != *i* ]] && return
force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1="  ────╼  \[\e[0m\]"
fi


## FUNCTIONS
cd() {
    builtin cd "$@" && ls --color=auto
}

mkd() {
    mkdir -p $1
    cd $1
}

whereis() {
    sudo find / -name $1
}

function man() {
    env LESS_TERMCAP_mb=$'\E[01;31m' \
    LESS_TERMCAP_md=$'\E[01;38;5;74m' \
    LESS_TERMCAP_me=$'\E[0m' \
    LESS_TERMCAP_se=$'\E[0m' \
    LESS_TERMCAP_so=$'\E[38;5;246m' \
    LESS_TERMCAP_ue=$'\E[0m' \
    LESS_TERMCAP_us=$'\E[04;38;5;146m' \
    man "$@"
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

# Convert video to gif file.
# Usage: video2gif video_file (scale) (fps)
video2gif() {
  ffmpeg -y -i "${1}" -vf fps=${3:-10},scale=${2:-1920}:-1:flags=lanczos,palettegen "${1}.png"
  ffmpeg -i "${1}" -i "${1}.png" -filter_complex "fps=${3:-10},scale=${2:-1920}:-1:flags=lanczos[x];[x][1:v]paletteuse" "${1}".gif
  rm "${1}.png"
}


## ALIASES
alias sd='sudo'
alias ls='ls --color=auto'
alias la='ls -la --color=auto'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias ld='ldmc -l'
alias rd='sudo ldmc -r'
alias chx='chmod +x'
alias ch644='chmod 644'
alias ch777='chmod 777'
alias rb='sudo shutdown -r now'
alias p='sudo shutdown -h now'

alias q='xbps-query -Rs'
alias i='sudo xbps-install'
alias u='sudo xbps-install -Su'
alias r='sudo xbps-remove -R'
alias c='sudo xbps-remove -Oo'

alias status='git status'
alias add='git add --all'
alias pull='git pull'
alias commit='git commit -m'
alias push='git push --set-upstream origin master'

alias dt='cd $HOME/Desktop'
alias df='cd $HOME/Dotfiles'
alias dl='cd $HOME/Downloads'
alias s='cd $HOME/.config/scripts'
alias clr='cd $HOME/.urxvt'
alias hd='cd /mnt'
alias xload='xrdb -load $HOME/.Xresources'

alias m='ncmpcpp'
alias play='mpc toggle'
alias pause='mpc toggle'
alias prev='mpc prev'
alias next='mpc next'
alias up='amixer -q sset Master 5%+'
alias down='amixer -q sset Master 5%-'
alias mute='amixer -q sset Master toggle'


## EXPORT
export TERM='xterm-256color'
export VISUAL='nano'
export EDITOR='nano'
export MPD_HOST=192.168.88.254