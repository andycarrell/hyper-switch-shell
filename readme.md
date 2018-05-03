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
```js
{
  keymaps: {
    "shell:load:default": "ctrl+shift+h",
    "shell:load:powershell": "ctrl+shift+g"
  }
}
```
* Any given key is supported, provided the keymap `shell:load:{key}` matches the config key
* Each command simply reloads the config - open a new tab to use the new shell.

## Tests
`npm test` - runs a limited number of tests found in `test/`.
