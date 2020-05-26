import * as vscode from 'vscode';

import { generate } from './generate';

export function activate(context: vscode.ExtensionContext) {
    const disposable = [
        vscode.commands.registerCommand('extension.generateClassComponentWithStyled', generate('styled', 'class')),
        vscode.commands.registerCommand('extension.generateFunctionComponentWithStyled', generate('styled', 'function')),
        vscode.commands.registerCommand('extension.generateClassComponentWithCssModules', generate('cssModules', 'class')),
        vscode.commands.registerCommand('extension.generateFunctionComponentWithCssModules', generate('cssModules', 'function')),
        vscode.commands.registerCommand('extension.generateClassComponent', generate('none', 'class')),
        vscode.commands.registerCommand('extension.generateFunctionComponent', generate('none', 'function')),
    ];

    context.subscriptions.push(...disposable);
}

export function deactivate() {}
