import * as vscode from 'vscode';
import { TextDocumentContentChangeEvent } from 'vscode';
import {pickAndInsert} from "./utils/string";

let isEditing = false;

const getWholeRange = (document: vscode.TextDocument): vscode.Range => {
    const firstLine = document.lineAt(0);
    const lastLine = document.lineAt(document.lineCount - 1);
    return new vscode.Range(firstLine.range.start, lastLine.range.end);
};

const isEmpty = (changes: ReadonlyArray<TextDocumentContentChangeEvent>): boolean => {
    return !changes || changes.some(c => !c.text);
};

const initInputHook = () => {
    vscode.workspace.onDidChangeTextDocument(event => {
        if (isEditing) {return;}
        if (isEmpty(event.contentChanges)) {return;}

        const editor = vscode.window.activeTextEditor;

        if (!editor) {return;}

        const changes = event.contentChanges[0];
        const invertedText = pickAndInsert(event.document.getText(), changes.text, changes.rangeOffset);
        const wholeRange = getWholeRange(event.document);

        editor.edit(builder => {
            isEditing = true;
            builder.replace(wholeRange, invertedText);
        }).then(() => isEditing = false);
    });
};

export default initInputHook;
