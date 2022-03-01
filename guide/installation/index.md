# Installing Node.js and Easy Trivia

## Installing Node.js

To use Easy Trivia, you'll need to install [Node.js](https://nodejs.org/). Easy Trivia requires Node v16.6.0 or higher.

::: tip
To check if you already have Node installed on your machine \(e.g., if you're using a VPS\), run `node -v` in your terminal. If it outputs `v16.6.0` or higher, then you're good to go! Otherwise, continue reading.
:::

On Windows, it's as simple as installing any other program. Download the latest version from [the Node.js website](https://nodejs.org/), open the downloaded file, and follow the steps from the installer.

On macOS, either:

- Download the latest version from [the Node.js website](https://nodejs.org/), open the package installer, and follow the instructions
- Use a package manager like [Homebrew](https://brew.sh/) with the command `brew install node`

On Linux, you can consult [this page](https://nodejs.org/en/download/package-manager/) to determine how you should install Node.

## Preparing the essentials

To use Easy Trivia, you'll need to install it via npm \(Node's package manager\). npm comes with every Node installation, so you don't have to worry about installing that. However, before you install anything, you should set up a new project folder.

Navigate to a suitable place on your machine and create a new folder named `trivia-project` (or whatever you want). Next, you'll need to open your terminal.

### Opening the terminal

::: tip
If you use [Visual Studio Code](https://code.visualstudio.com/), you can press <code>Ctrl + `</code> (backtick) to open its integrated terminal.
:::

On Windows, either:

- `Shift + Right-click` inside your project directory and choose the "Open command window here" option
- Press `Win + R` and run `cmd.exe`, and then `cd` into your project directory

On macOS, either:
- Open Launchpad or Spotlight and search for "Terminal"
- In your "Applications" folder, under "Utilities", open the Terminal app

On Linux, you can quickly open the terminal with `Ctrl + Alt + T`.

With the terminal open, run the `node -v` command to make sure you've successfully installed Node.js. If it outputs `v16.6.0` or higher, great!

### Initiating a project folder

:::: code-group
::: code-group-item npm
```sh:no-line-numbers
npm init
```
:::
::: code-group-item yarn
```sh:no-line-numbers
yarn init
```
:::
::: code-group-item pnpm
```sh:no-line-numbers
pnpm init
```
:::
::::

This is the next command you'll be running. This command creates a `package.json` file for you, which will keep track of the dependencies your project uses, as well as other info.

This command will ask you a sequence of questions–you should fill them out as you see fit. If you're not sure of something or want to skip it as a whole, leave it blank and press enter.

::: tip
To get started quickly, you can run the following command to have it fill out everything for you.

<CodeGroup>
  <CodeGroupItem title="npm">

```sh:no-line-numbers
npm init -y
```

  </CodeGroupItem>
  <CodeGroupItem title="yarn">

```sh:no-line-numbers
yarn init -y
```

  </CodeGroupItem>
  <CodeGroupItem title="pnpm">

```sh:no-line-numbers
pnpm init -y
```

  </CodeGroupItem>
</CodeGroup>
:::

Once you're done with that, you're ready to install Easy Trivia!

## Installing Easy Trivia

Now that you've installed Node.js and know how to open your console and run commands, you can finally install Easy Trivia! Run the following command in your terminal:

:::: code-group
::: code-group-item npm
```sh:no-line-numbers
npm install easy-trivia
```
:::
::: code-group-item yarn
```sh:no-line-numbers
yarn add easy-trivia
```
:::
::: code-group-item pnpm
```sh:no-line-numbers
pnpm add easy-trivia
```
:::
::::

And that's it! With all the necessities installed, you're almost ready to start coding your project.