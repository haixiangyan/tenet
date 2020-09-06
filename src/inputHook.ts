import * as vscode from 'vscode';

const initInputHook = () => {
    vscode.workspace.onDidChangeTextDocument(evt => {
        evt.contentChanges.forEach(change => {
            if (change.text.length > 30) {
                return;
            }

            console.log(change.text);
        });
    });
};

export default initInputHook;
