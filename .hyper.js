"use strict";
const palettes = {
  latte: {
    backgroundColor: "#eff1f5",
    foregroundColor: "#4c4f69",
    selectionColor: "#acb0be",
    cursorColor: "#dc8a78",
    cursorAccentColor: "eff1f5",
    colors: {
      black: "#5c5f77",
      blue: "#1e66f5",
      red: "#d20f39",
      green: "#40a02b",
      yellow: "#df8e1d",
      magenta: "#ea76cb",
      cyan: "#179299",
      white: "#acb0be",
      lightBlack: "#6c6f85",
      lightWhite: "#bcc0cc",
      lightBlue: "#1e66f5",
      lightRed: "#d20f39",
      lightGreen: "#40a02b",
      lightYellow: "#df8e1d",
      lightMagenta: "#ea76cb",
      lightCyan: "#179299",
    },
  },
  frappé: {
    backgroundColor: "#303446",
    foregroundColor: "#c6d0f5",
    selectionColor: "#626880",
    cursorColor: "#f2d5cf",
    cursorAccentColor: "#232634",
    colors: {
      black: "#51576d",
      blue: "#8caaee",
      red: "#e78284",
      green: "#a6d189",
      yellow: "#e5c890",
      magenta: "#f4b8e4",
      cyan: "#81c8be",
      white: "#b5bfe2",
      lightBlack: "#626880",
      lightWhite: "#a5adce",
      lightBlue: "#8caaee",
      lightRed: "#e78284",
      lightGreen: "#a6d189",
      lightYellow: "#e5c890",
      lightMagenta: "#f4b8e4",
      lightCyan: "#81c8be",
    },
  },
  macchiato: {
    backgroundColor: "#24273a",
    foregroundColor: "#cad3f5",
    selectionColor: "#5b6078",
    cursorColor: "#f4dbd6",
    cursorAccentColor: "#181926",
    colors: {
      black: "#494d64",
      blue: "#8aadf4",
      red: "#ed8796",
      green: "#a6da95",
      yellow: "#eed49f",
      magenta: "#f5bde6",
      cyan: "#8bd5ca8bd5ca",
      white: "#b8c0e0",
      lightBlack: "#5b6078",
      lightWhite: "#a5adcb",
      lightBlue: "#8aadf4",
      lightRed: "#ed8796",
      lightGreen: "#a6da95",
      lightYellow: "#eed49f",
      lightMagenta: "#f5bde6",
      lightCyan: "#8bd5ca",
    },
  },
  mocha: {
    backgroundColor: "rgba(30,30,46,0.8)",
    foregroundColor: "#cdd6f4",
    selectionColor: "#585b70",
    cursorColor: "#f5e0dc",
    cursorAccentColor: "#11111b",
    colors: {
      black: "#45475A",
      blue: "#89b4fa",
      red: "#f38ba8",
      green: "#a6e3a1",
      yellow: "#f9e2af",
      magenta: "#f5c2e7",
      cyan: "#94e2d5",
      white: "#bac2de",
      lightBlack: "#585b70",
      lightWhite: "#a6adc8",
      lightBlue: "#89b4fa",
      lightRed: "#f38ba8",
      lightGreen: "#a6e3a1",
      lightYellow: "#f9e2af",
      lightMagenta: "#f5c2e7",
      lightCyan: "#94e2d5",
    },
  },
};

const theme = palettes["mocha"];
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: "stable",
    // default font size in pixels for all tabs
    fontSize: 12,
    // font family with optional fallbacks
    fontFamily: "FiraCode Nerd Font Mono",
    // default font weight: 'normal' or 'bold'
    fontWeight: "normal",
    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: "bold",
    // line height as a relative unit
    lineHeight: 1,
    // letter spacing as a relative unit
    letterSpacing: 0,
    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    //cursorColor: "rgba(248,28,229,0.8)",
    // terminal text color under BLOCK cursor
    //cursorAccentColor: "#000",
    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: "BLOCK",
    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,
    // color of the text
    //foregroundColor: "#fff",
    // terminal background color
    // opacity is only supported on macOS
    ...theme,
    // terminal selection color
    //selectionColor: "rgba(248,28,229,0.3)",
    // border color (window, tabs)
    borderColor: "transparent",
    // custom CSS to embed in the main window
    css: `
    .hyper_main {
      border: none !important;
    }
    .header_header {
      color: ${theme.foregroundColor};
    }
    .header_windowHeaderWithBorder {
      border-color: ${theme.backgroundColor} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    .tab_tab {
      border: 0;
    }
    .tab_tab.tab_active {
      background: ${theme.backgroundColor};
      color: ${theme.foregroundColor};
      transition: all 140ms ease;
    }
    .tab_tab:not(.tab_active) {
      background: ${theme.colors.black};
      color: ${theme.colors.lightWhite};
    }
    .tab_tab:not(.tab_active):hover {
      background: ${theme.colors.lightBlack};
      color: ${theme.foregroundColor};
      transition: background 140ms ease;
    }
    .tab_icon {
      width: 15px;
      height: 15px;
    }
    .tab_shape {
      width: 7px;
      height: 7px;
    }
    .splitpane_divider {
      background-color: ${theme.colors.lightBlack} !important;
    }
    `,
    // custom CSS to embed in the terminal window
    termCSS: "",
    // set custom startup directory (must be an absolute path)
    workingDirectory: "",
    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: "",
    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: "",
    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: "12px 14px",
    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Windows Subsystem for Linux (WSL) - previously Bash on Windows
    // - Example: `C:\\Windows\\System32\\wsl.exe`
    //
    // Git-bash on Windows
    // - Example: `C:\\Program Files\\Git\\bin\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    //
    // Cygwin
    // - Example: `C:\\cygwin64\\bin\\bash.exe`
    shell: "",
    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ["--login"],
    // for environment variables
    env: {},
    // Supported Options:
    //  1. 'SOUND' -> Enables the bell as a sound
    //  2. false: turns off the bell
    bell: "SOUND",
    // An absolute file path to a sound file on the machine.
    // bellSoundURL: '/path/to/sound/file',
    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,
    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,
    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,
    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: "vertical",
    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,
    // keypress required for weblink activation: [ctrl|alt|meta|shift]
    // todo: does not pick up config changes automatically, need to restart terminal :/
    webLinksActivationKey: "",
    // if `false` (without backticks and without quotes), Hyper will use ligatures provided by some fonts
    disableLigatures: true,
    // set to true to disable auto updates
    disableAutoUpdates: false,
    // set to true to enable screen reading apps (like NVDA) to read the contents of the terminal
    screenReaderMode: false,
    // set to true to preserve working directory when creating splits or tabs
    preserveCWD: true,
    // for advanced config flags please refer to https://hyper.is/#cfg
    hyperTransparentVibrancy: {
      alpha: 0.7, // default 50%
      vibrancy: 'dark'
    },
  },
  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  plugins: ['hyper-transparent-vibrancy'],
  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
//# sourceMappingURL=config-default.js.map
