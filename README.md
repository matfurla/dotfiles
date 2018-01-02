![scrot1](https://i.imgur.com/sSGGQfJ.jpg)

Simple dotfiles repository using stow

 - Distro: `Void Linux`
 - Window Manager: `bspwm`
 - Terminal: `urxvt`
 - Fonts: `lemon`, `siji` and `envypn`
 - Browser: `firefox`
 - File Browser: `pcmanfm`
 - Editor: `neovim` and `leafpad`
 - Music Player: `mpd` with `ncmpcpp`
 - Media Player: `mpv`
 - Launcher: `rofi`
 - Bar: `polybar`
 - GTK Theme: `numix`
 - Icon Theme: `numix-circle`


## Installation 

 - Install `stow`
 - Go to your home directory
 - `git clone --depth 1 https://github.com/matfurla/dotfiles`
 - `cd ~/dotfiles`
 - `stow xserver bash bspwm`...


## Observation 

 - All color themes are located in `$HOME/.xresources` folder, but to use them you first need to change the `$HOME/.Xresources` file to match the desired color. This method was created and used by dkeg -> Read about it [here](https://github.com/dkeg/crayolo)

 - After chosing the color you simply need to run the `update-theme` script. It should update `bspwm`, `.Xresources`, `GTK` and `Firefox` colors.

 - The GTK colors also came from `$HOME/.Xresources`. To update just these run the script `update-gtk`. This method was created and used by dkeg -> Read about it [here](https://github.com/dkeg/inspin/blob/master/gtkColor).
 
 - A `userChrome.css` is used with Firefox. This file needs to be located in a folder called `chrome` inside you profile -> `$HOME/.mozilla/firefox/**********.default/chrome`. Remember to edit the first line to have the correct path for the colors.

 - I use rofi for a lot of things, including: [bookmarks](https://github.com/carnager/robot) (since I'm constantly changing my browser), [websearches](https://github.com/gotbletu/shownotes/blob/master/rofi-scripts-collection/rofi-bangs.sh) (google, youtube, etc), [pass](https://github.com/carnager/rofi-pass) (automatically insert passwords XD) and of course to run programs.


## Preview 

![scrot2](https://i.imgur.com/MpHzwIx.png)

![scrot3](https://i.imgur.com/CChOqJk.png)

![scrot4](https://i.imgur.com/J3B9KqV.png)

![scrot5](https://i.imgur.com/x893NaY.png)
