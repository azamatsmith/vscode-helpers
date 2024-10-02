// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

declare var process: {
  env: {
    ['HOME']: string;
  };
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let openTextFile = vscode.commands.registerCommand(
    'vscode-helpers.openTextFile',
    async function (filePath: string | null) {
      if (!filePath) {
        return vscode.window.showErrorMessage(
          'Error: openTextFile | Please pass the pathname of the file you wish to open'
        );
      }
      let uri = vscode.Uri.file(path.join(process.env.HOME, filePath));
      // let success = await vscode.commands.executeCommand('vscode.window.showTextDocument', uri);
      await vscode.window.showTextDocument(uri);
    }
  );
  context.subscriptions.push(openTextFile);
}

// this method is called when your extension is deactivated
export function deactivate() {}
