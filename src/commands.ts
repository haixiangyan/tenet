import * as vscode from 'vscode';

const IS_INVERSION = 'is_inversion';

const initCommands = (context: vscode.ExtensionContext) => {
	const enableInversion = vscode.commands.registerCommand('tenet.enableInversion', () => {
		context.globalState.update(IS_INVERSION, true);

		vscode.window.showInformationMessage('Entering the inversion world, stay safe!');
	});

	const disableInversion = vscode.commands.registerCommand('tenet.disableInversion', () => {
		context.globalState.update(IS_INVERSION, false);

		vscode.window.showInformationMessage('Leaving the inversion world, goodbye!');
	});

	context.subscriptions.push(enableInversion, disableInversion);
};

export default initCommands;
