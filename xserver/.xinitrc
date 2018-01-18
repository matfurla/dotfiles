#!/bin/sh

# ▒██   ██▒ ██▓ ███▄    █  ██▓▄▄▄█████▓ 
# ▒▒ █ █ ▒░▓██▒ ██ ▀█   █ ▓██▒▓  ██▒ ▓▒ 
# ░░  █   ░▒██▒▓██  ▀█ ██▒▒██▒▒ ▓██░ ▒░ 
#  ░ █ █ ▒ ░██░▓██▒  ▐▌██▒░██░░ ▓██▓ ░  
# ▒██▒ ▒██▒░██░▒██░   ▓██░░██░  ▒██▒ ░  
# ▒▒ ░ ░▓ ░░▓  ░ ▒░   ▒ ▒ ░▓    ▒ ░░    
# ░░   ░▒ ░ ▒ ░░ ░░   ░ ▒░ ▒ ░    ░     
#  ░    ░   ▒ ░   ░   ░ ░  ▒ ░  ░       
#  ░    ░   ░           ░  ░            

## LOAD .XRESOURCES                                         
xrdb -load $HOME/.Xresources

## FONTS
xset +fp $HOME/local/share/fonts
xset fp rehash

## KEYBOARD
setxkbmap -model abnt2 -layout br -variant abnt2 -option terminate:ctrl_alt_bksp

## COLOR RANGE
xrandr --output HDMI2 --set "Broadcast RGB" "Full"

## CURSOR
xsetroot -cursor_name left_ptr

## WALLPAPER
xsetroot -mod 10 2 -bg "$(xrdb -query|awk '/^\*color0:/ {print $2}')" -fg "$(xrdb -query|awk '/^\*color8:/ {print $2}')"

## MPD
mpd

## URXVT
urxvtd -q -f -o

## SXHKD
sxhkd &

## WM
exec bspwm
