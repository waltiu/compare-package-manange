const { exec } = require("child_process");
const registry ="https://registry.npmmirror.com/"
const packages = [
  {
    path: "npm",
    script: "npm install ",
  },
  {
    path: "yarn",
    script: "yarn install",
  },
  {
    path: "pnpm",
    script: "pnpm install",
  },
];
packages.forEach((item) => {
    console.time(`${item.path} install`)
    exec(`cd ${item.path} && ${item.script} --registry=${registry}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    console.timeEnd(`${item.path} install`);
  });
});
