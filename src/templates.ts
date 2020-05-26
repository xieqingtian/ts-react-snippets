import * as vscode from 'vscode';

export type StylesType = 'styled' | 'cssModules' | 'none';

export const getStyleFileExt = () => vscode.workspace.getConfiguration().get('Style File Type');

const getImportStylesStatement = (stylesType: StylesType) => {
    switch (stylesType) {
        case 'none':
            return '';
        case 'styled':
            return `\nimport { Container } from './styles';`;
        case 'cssModules':
            return `\nimport styles from './index.module.${getStyleFileExt()}';`;
        default:
            return '';
    }
};

export const reactClassComponent = (
    componentName: string,
    stylesType: StylesType
) => `import React, { PureComponent } from 'react';${getImportStylesStatement(stylesType)}

type Props = {};

type State = Readonly<{}>;

class ${componentName} extends PureComponent<Props, State> {
    readonly state: State = {}

    render() {
        return (
            <div>
                I am ${componentName}
            </div>
        )
    }

}

export default ${componentName};
`;

export const reactFunctionComponent = (
    componentName: string,
    stylesType: StylesType
) => `import React, { FC } from 'react';${getImportStylesStatement(stylesType)}

type Props = {};

const ${componentName}: FC<Props> = (props) => {
    return (
        <div>
            I am ${componentName}
        </div>
    )
}

export default ${componentName};
`;

export const styledComponent = () => `import styled from 'styled-components';

export const Container = styled.div\`
    display: flex;
\`;
`;
