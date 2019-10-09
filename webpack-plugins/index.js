/* eslint-disable @typescript-eslint/no-var-requires */
const spawn = require("child_process").spawn;

function Plugin(options) {
  this.options = options;
}

Plugin.prototype.apply = compiler => {
  if (compiler.hooks) {
    compiler.hooks.done.tap("Plugin", status => {
      console.log("finsihed build");
      const exec = spawn("node", ["dist/server"]);

      exec.stdout.on("data", data => {
        console.log("stdout: " + data);
      });

      exec.stderr.on("data", data => {
        console.log("stderr: " + data.toString());
      });
      exec.on("exit", code => {
        console.log("child process exited with code " + code.toString());
      });
    });
    compiler.hooks.watchClose.tap("Plugin", () => {
      console.log("watch end");
    });
  }
};

module.exports = Plugin;
