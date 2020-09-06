import * as vscode from 'vscode';
import { TextDocumentContentChangeEvent } from 'vscode';

let isEditing = false;

const getWholeRange = (document: vscode.TextDocument): vscode.Range => {
    const firstLine = document.lineAt(0);
    const lastLine = document.lineAt(document.lineCount - 1);
    return new vscode.Range(firstLine.range.start, lastLine.range.end);
};

const getInvertedText = (text: string, start: number = 1): string => {
    const breakPosition = text.length - start;

    return text.slice(breakPosition) + text.slice(0, breakPosition);
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

        const newChars = event.contentChanges[0].text;
        const invertedText = getInvertedText(event.document.getText(), newChars.length);
        const wholeRange = getWholeRange(event.document);

        editor.edit(builder => {
            isEditing = true;
            builder.replace(wholeRange, invertedText);
        }).then(() => isEditing = false);
    });
};

export default initInputHook;
