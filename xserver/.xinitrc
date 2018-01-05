#!/bin/sh
## Update Colors
xrdb -load $HOME/.Xresources

## Fonts
xset +fp $HOME/.fonts
xset fp rehash

## Change Keyboard
setxkbmap -model abnt2 -layout br -variant abnt2 -option terminate:ctrl_alt_bksp

## Change Color Range
xrandr --output HDMI2 --set "Broadcast RGB" "Full"

## Change cursor
xsetroot -cursor_name left_ptr

## Wallpaper
xsetroot -mod 10 2 -bg "$(xrdb -query|awk '/^\*color0:/ {print $2}')" -fg "$(xrdb -query|awk '/^\*color8:/ {print $2}')"

## Mpd
mpd

## Polybar
bar

## Urxvt Daemon
urxvtd -q -f -o

## Sxhkd
sxhkd &

## Wm
exec bspwm