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
1. Open `.hyper.js`
2. Add a `shells` key, with value an object of shell configurations
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
3. Add key mappings
    * Currently only powershell & a generic default are supported.
```js
{
  keymaps: {
    "shell:load:default": "ctrl+shift+h",
    "shell:load:powershell": "ctrl+shift+g"
  }
}
```
