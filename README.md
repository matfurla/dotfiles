
```
  ▓█████▄  ▒█████  ▄▄▄█████▓  █████▒██▓ ██▓    ▓█████   ██████ 
  ▒██▀ ██▌▒██▒  ██▒▓  ██▒ ▓▒▓██   ▒▓██▒▓██▒    ▓█   ▀ ▒██    ▒ 
  ░██   █▌▒██░  ██▒▒ ▓██░ ▒░▒████ ░▒██▒▒██░    ▒███   ░ ▓██▄   
  ░▓█▄   ▌▒██   ██░░ ▓██▓ ░ ░▓█▒  ░░██░▒██░    ▒▓█  ▄   ▒   ██▒
  ░▒████▓ ░ ████▓▒░  ▒██▒ ░ ░▒█░   ░██░░██████▒░▒████▒▒██████▒▒
   ▒▒▓  ▒ ░ ▒░▒░▒░   ▒ ░░    ▒ ░   ░▓  ░ ▒░▓  ░░░ ▒░ ░▒ ▒▓▒ ▒ ░
   ░ ▒  ▒   ░ ▒ ▒░     ░     ░      ▒ ░░ ░ ▒  ░ ░ ░  ░░ ░▒  ░ ░
   ░ ░  ░ ░ ░ ░ ▒    ░       ░ ░    ▒ ░  ░ ░      ░   ░  ░  ░  
     ░        ░ ░                   ░      ░  ░   ░  ░      ░  
   ░                                                           

Simple dotfiles repository using xstow

  Distro ..................... Void Linux
  Window Manager ............. bspwm
  Terminal ................... urxvt
  Fonts ...................... terminus, siji
  Browser .................... chromium, firefox
  File Browser ............... pcmanfm
  Editor ..................... neovim, leafpad
  Music Player ............... mpd, ncmpcpp
  Media Player ............... mpv
  Launcher ................... rofi
  Bar ........................ polybar
  GTK Theme .................. numix
  Icon Theme ................. numix

```

## Installation 

 - Install `xstow`
 - Go to your home directory
 - `git clone --depth 1 https://github.com/matfurla/dotfiles`
 - `cd ~/dotfiles`
 - `xstow xserver bash bspwm`...


## Observation 

 - All color themes are located in `$HOME/.urxvt` folder, but to use them you first need to change the `$HOME/.Xresources` file to match the desired color. This method was copied from dkeg -> Read about it [here](https://github.com/dkeg/crayolo)

 - The GTK colors also came from `$HOME/.Xresources`. To use it you need a basic gtk 2.0 theme (included in the repo) that must be located in `$HOME/.themes`. This method was copied from dkeg -> Read about it [here](https://github.com/dkeg/inspin/blob/master/gtkColor).
 
 - A `userChrome.css` and `userContent.css` are used with Firefox. This files needs to be located in a folder called `chrome` inside you profile -> `$HOME/.mozilla/firefox/**********.default/chrome`. Remember to edit the first line to have the correct path.

 - After changing everything you simply need to run the `update-theme` script. It should update `bspwm`, `urxvt`, `GTK`, `Firefox` and the wallpaper colors.

 - I use rofi for a lot of things, including: [bookmarks](https://github.com/carnager/robot) (since I'm constantly changing my browser), [websearches](https://github.com/gotbletu/shownotes/blob/master/rofi-scripts-collection/rofi-bangs.sh) (google, youtube, etc), [pass](https://github.com/carnager/rofi-pass) (automatically insert passwords XD), run programs, etc.


## Preview 

![scrot1](https://i.imgur.com/wxCjvxy.png)

![scrot2](https://i.imgur.com/zOanHE5.png)

![scrot3](https://i.imgur.com/J3B9KqV.png)

![scrot4](https://i.imgur.com/SOeZ65T.png)
