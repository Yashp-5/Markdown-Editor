/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css, ClassNames } from '@emotion/react'
import { RowFlex } from '..'
import Editor from "./Editor";
import Preview from './Preview';

interface Props {
  theme: string;
}

const Main: React.FC<Props> = ({ theme }) => {
  const [markdownContent, setMarkdownContent] = useState<string>(`
  <h1 style="color:blue;">A Blue Heading</h1>

<p style="color:red;">A red paragraph.</p>  
  `);

  return (
    <ClassNames>
      {({ css: classNamesCss }) => (
        <RowFlex
          className={classNamesCss(css`
            padding: 32px;
            padding-top: 0px;
            height: calc(100vh - 170px);
          `)}
        >
          <Editor theme={theme} markdownContent={markdownContent} setMarkdownContent={setMarkdownContent} />
          <Preview theme={theme} markdownContent={markdownContent} />
        </RowFlex>
      )}
    </ClassNames>
  );
}

export default Main;
