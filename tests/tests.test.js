const { middleware } = require("../index");

global.Date = {
  now: () => 1524965450320
};

test("any given action, should be passed on with next", () => {
  const mockNext = jest.fn();
  const mockAction = {
    type: "TESTING_PASS_THROUGH"
  };
  middleware({ dispatch: () => {} })(mockNext)(mockAction);

  expect(mockNext).toMatchSnapshot();
});

test("action type CONFIG_LOAD should not call dispatch", () => {
  const mockDispatch = jest.fn();
  const testFn = middleware({ dispatch: mockDispatch })(() => {});

  const mockAction = { type: "CONFIG_LOAD" };
  testFn(mockAction);

  expect(mockDispatch).not.toBeCalled();
});

test("action type CONFIG_LOAD should not call dispatch", () => {
  const mockDispatch = jest.fn();
  const testFn = middleware({ dispatch: mockDispatch })(() => {});

  const mockAction = { type: "CONFIG_RELOAD" };
  testFn(mockAction);

  expect(mockDispatch).not.toBeCalled();
});

test("action type UI_COMMAND_EXEC should not call dispatch, if there is no command", () => {
  const mockDispatch = jest.fn();
  const testFn = middleware({ dispatch: mockDispatch })(() => {});

  const mockAction = { type: "UI_COMMAND_EXEC" };

  testFn(mockAction);

  expect(mockDispatch).not.toBeCalled();
});

test("action type UI_COMMAND_EXEC should call dispatch, when command matches", () => {
  const mockDispatch = jest.fn();
  const testFn = middleware({ dispatch: mockDispatch })(() => {});

  const testKey = "default";

  // setup config
  const mockConfigAction = {
    type: "CONFIG_LOAD",
    config: {
      shells: {
        [testKey]: {
          shell: "bash",
          shellArgs: ["shell arg"]
        }
      }
    }
  };

  testFn(mockConfigAction);

  const mockAction = {
    type: "UI_COMMAND_EXEC",
    command: `shell:load:${testKey}`
  };

  testFn(mockAction);

  expect(mockDispatch).toMatchSnapshot();
});
