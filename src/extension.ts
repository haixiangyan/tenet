import * as vscode from 'vscode';

const IS_INVERSION = 'is_inversion';

export function activate(context: vscode.ExtensionContext) {
	console.log('Welcome to use tenet!');

	const enableInversion = vscode.commands.registerCommand('tenet.enableInversion', () => {
		context.globalState.update(IS_INVERSION, true);

		vscode.window.showInformationMessage('Entering the inversion world, stay safe!');
	});

	const disableInversion = vscode.commands.registerCommand('tenet.disableInversion', () => {
		context.globalState.update(IS_INVERSION, false);

		vscode.window.showInformationMessage('Leaving the inversion world, goodbye!');
	});

	context.subscriptions.push(enableInversion, disableInversion);
}

// this method is called when your extension is deactivated
export function deactivate() {}
