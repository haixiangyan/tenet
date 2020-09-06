import * as vscode from 'vscode';

import initCommands from './commands';
import initInputHook from './inputHook';

export function activate(context: vscode.ExtensionContext) {
	console.log('Welcome to use tenet!');

	initCommands(context);

	process.nextTick(() => {
		initInputHook();
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
