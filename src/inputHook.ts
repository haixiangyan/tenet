import * as vscode from 'vscode';

const firstPosition = new vscode.Position(0, 0);

const initInputHook = () => {
    vscode.workspace.onDidChangeTextDocument(event => {
        event.contentChanges.forEach(change => {
            if (change.text.length > 30) {
                return;
            }

            const newChar = change.text;
            
            vscode.TextEdit.insert(firstPosition, newChar);
        });
    });
};

export default initInputHook;
