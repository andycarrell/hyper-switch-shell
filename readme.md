# hyper-switch-shell
Allows hyper users to define alternate shell configurations and switch based on key mappings

## Install
1. Open `.hyper.js`
1. Add to plugins:
```js
{
  ...
  plugins: ['hyper-switch-shell'],
  ...
}
```

## Usage
* Open `.hyper.js`
* Add a `shells` key, with value an object of shell configurations
    * Each shell must have `shell`, and `shellArgs` key values.
```js
{
  config: {
    ...
    shells: {
      default: {
        shell: 'C:/Program Files/Git/bin/bash.exe',
        shellArgs: ['--login'],
      },
      powershell: {
        shell: 'C:/Windows/System32/WindowsPowershell/v1.0/powershell.exe',
        shellArgs: ['-NoLogo']
      }
    }
  },
  ...
}
```
* Add key mappings - these mappings will update the config
    * Currently only powershell & a generic default are supported.
```js
{
  keymaps: {
    "shell:load:default": "ctrl+shift+h",
    "shell:load:powershell": "ctrl+shift+g"
  }
}
```
* Each command simply reloads the config - open a new tab, or reload `hyper` to use the new shell.
