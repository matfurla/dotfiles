
"  ███▄    █ ▓█████  ▒█████   ██▒   █▓ ██▓ ███▄ ▄███▓
"  ██ ▀█   █ ▓█   ▀ ▒██▒  ██▒▓██░   █▒▓██▒▓██▒▀█▀ ██▒
" ▓██  ▀█ ██▒▒███   ▒██░  ██▒ ▓██  █▒░▒██▒▓██    ▓██░
" ▓██▒  ▐▌██▒▒▓█  ▄ ▒██   ██░  ▒██ █░░░██░▒██    ▒██ 
" ▒██░   ▓██░░▒████▒░ ████▓▒░   ▒▀█░  ░██░▒██▒   ░██▒
" ░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░▒░▒░    ░ ▐░  ░▓  ░ ▒░   ░  ░
" ░ ░░   ░ ▒░ ░ ░  ░  ░ ▒ ▒░    ░ ░░   ▒ ░░  ░      ░
"    ░   ░ ░    ░   ░ ░ ░ ▒       ░░   ▒ ░░      ░   
"          ░    ░  ░    ░ ░        ░   ░         ░   
"                               ░                  

"## GENERAL
" Sets how many lines of history VIM has to remember
set history=500

colorscheme sourcerer

" This is extremely useful for indenation purposes
" of several filetypes used in web development
" as you can simply press gg=G for auto indentation
filetype plugin indent on

" This will show line numbers
set number

" We'll combine normal line numbers with relative
" line numbers to make it easier to move between
" multiple lines
set relativenumber

" This will enable Vim's syntax highlighting
syntax on

" We'll be using this option to modify files directly
" inside NERDTree inside Vim, without having to exit Vim
set modifiable

" This will highlight the current line your cursor is at
set cursorline

" This will highlight the current column your cursor is at
" and it'll make it much easier to determine your closing tags
" (along with matchtagalways) when code is properly indented
set cursorcolumn

" This will enable the usage of your mouse inside Vim in
" terminal emulators that support it (gpm)
set mouse=a

" This option speeds up macro execution in Vim
" Some users may rarely experience glitches with this option
" enabled
set lazyredraw

" This enabled 256-color support in Vim, which is needed
" by many color schemes
set t_Co=256

" This will make Vim start searching the moment you start
" typing the first letter of your search keyword
set incsearch

" This will make Vim highlight all search results that
" matched the search keyword
set hlsearch

" This is needed to tree tabs as multiple spaces
set shiftwidth=2

" This option will enable you to enter a real Tab character
" by pressing Ctrl-V<Tab>
set expandtab

" This will enable NERDTree to show hidden files
let NERDTreeShowHidden=1
