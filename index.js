const pluginName = "hyper-switch-shell";

let config = {};

// regular expressions
const reg = "shell:load:";
const matches = str => new RegExp(`^${reg}\\w+$`).test(str);
const getKey = str => str.split(new RegExp(`^${reg}`)).pop();

exports.middleware = ({ dispatch }) => {
  const configReload = shellConfig => {
    const { shell, shellArgs } = shellConfig;
    config.shell = shell;
    config.shellArgs = shellArgs;

    dispatch({
      type: "CONFIG_RELOAD",
      now: Date.now(),
      config,
      pluginName
    });
  };

  return next => action => {
    if (action.type === "CONFIG_LOAD" || action.type === "CONFIG_RELOAD") {
      config = action.config;
    }

    if (action.type === "UI_COMMAND_EXEC" && matches(action.command)) {
      const key = getKey(action.command);

      if (config.shells[key]) {
        configReload(config.shells[key]);
      }
    }

    next(action);
  };
};
