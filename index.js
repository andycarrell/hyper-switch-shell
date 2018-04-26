const pluginName = "hyper-switch-shell";

let config = {};

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
    if (
      action.type === "UI_COMMAND_EXEC" &&
      action.command &&
      action.command === "shell:load:default"
    ) {
      configReload(config.shells.default);
    }

    if (
      action.type === "UI_COMMAND_EXEC" &&
      action.command &&
      action.command === "shell:load:powershell"
    ) {
      configReload(config.shells.powershell);
    }

    next(action);
  };
};
