#!/bin/sh
## Update Colors
xrdb -load $HOME/.Xresources

## Change Keyboard
setxkbmap -model abnt2 -layout br -variant abnt2 -option terminate:ctrl_alt_bksp &

## Change Color Range
xrandr --output HDMI2 --set "Broadcast RGB" "Full" &

## Change cursor
xsetroot -cursor_name left_ptr &

## Wallpaper
xsetroot -mod 10 2 -bg "$(xrdb -query|awk '/^\*color0:/ {print $2}')" -fg "$(xrdb -query|awk '/^\*color8:/ {print $2}')"

## Mpd
mpd

## Polybar
bar &

## Sxhkd
sxhkd -c $HOME/.config/sxhkd/sxhkdrc &

## Urxvt
urxvtd -q -f -o

## Fonts
xset +fp $HOME/.fonts
xset +fp /usr/share/fonts/envypn
xset fp rehash

## Wm
exec bspwm
