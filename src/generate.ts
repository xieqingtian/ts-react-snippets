import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { pascalCase } from 'pascal-case';

import { reactClassComponent, reactFunctionComponent, StylesType, styledComponent, getStyleFileExt } from './templates';

const getFormatedCode = (code: string) => {
    const prettierPath = path.join(vscode.workspace.workspaceFolders![0].uri.fsPath, 'node_modules', 'prettier');
    const prettierConfigPaths = ['.prettierrc.js', 'prettier.config.js', '.prettierrc', '.prettierrc.toml'].map((item) =>
        path.join(vscode.workspace.workspaceFolders![0].uri.fsPath, item)
    );
    let prettyConfig;

    if (fs.existsSync(prettierPath)) {
        const prettier = require(prettierPath);

        for (const configPath of prettierConfigPaths) {
            if (fs.existsSync(configPath)) {
                prettyConfig = prettier.resolveConfig.sync(configPath);
                break;
            }
        }

        return prettyConfig ? prettier.format(code, { ...prettyConfig, parser: 'typescript' }) : code;
    }

    return code;
};

const createFile = (filePath: string, content: string) =>
    new Promise((resolve, reject) => {
        if (!fs.existsSync(filePath)) {
            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(1);
                }
            });
        } else {
            reject(`${filePath} already exists.`);
        }
    });

const openFile = (filePath: string) => {
    vscode.window.showInformationMessage('Component create successful');
    setTimeout(() => {
        vscode.workspace.openTextDocument(filePath).then((editor) => {
            if (!editor) {
                return;
            }
            vscode.window.showTextDocument(editor);
        });
    }, 60);
};

export const generate = (stylesType: StylesType, conponentType: 'class' | 'function') => async (selectedLocation: any) => {
    if (!selectedLocation) return;

    const componentName = pascalCase(
        (await vscode.window.showInputBox({
            placeHolder: 'Enter the component name:',
            ignoreFocusOut: true,
        })) || ''
    );

    if (!componentName) return;

    const isStyled = stylesType === 'styled';
    const isSingle = stylesType === 'none';
    const isClassComponent = conponentType === 'class';
    const componentCode = getFormatedCode((isClassComponent ? reactClassComponent : reactFunctionComponent)(componentName, stylesType));
    const stylesCode = isStyled ? getFormatedCode(styledComponent()) : '';
    const stylesPath = path.join(selectedLocation.fsPath, componentName, isStyled ? 'styles.ts' : `index.${getStyleFileExt()}`);
    const componentPath = isSingle
        ? path.join(selectedLocation.fsPath, `${componentName}.tsx`)
        : path.join(selectedLocation.fsPath, componentName, 'index.tsx');

    if (isSingle) {
        try {
            await createFile(componentPath, componentCode);
            openFile(componentPath);
        } catch (error) {
            vscode.window.showErrorMessage((error as Error).message);
        }
        return;
    }

    try {
        fs.mkdirSync(path.join(selectedLocation.fsPath, componentName));

        await Promise.all([createFile(componentPath, componentCode), createFile(stylesPath, stylesCode)]);

        openFile(componentPath);
    } catch (error) {
        vscode.window.showErrorMessage((error as Error).message);
    }
};
