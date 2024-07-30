/** @jsxImportSource @emotion/react */
import React, { ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import { css, ClassNames } from '@emotion/react'
import { ColumnFlex } from '..'

interface Props {
  markdownContent: string;
  setMarkdownContent: (value: string) => void;
  theme: string;
}

const Editor: React.FC<Props> = ({ markdownContent, setMarkdownContent, theme }) => {
  return (
    <ClassNames>
      {({ css: classNamesCss }) => (
        <ColumnFlex
          id="editor"
          className={classNamesCss(css`
            flex: 1;
            padding: 16px;
          `)}
        >
          <h2>Editor</h2>
          <textarea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMarkdownContent(e.target.value)}
            className={classNamesCss(theme === 'dark' ?
              css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
                background: #000;
                color: #fff;
                font-size: 100%;
                line-height: inherit;
                padding: 8px 16px;
                resize: none;
                overflow: auto;
                &:focus {
                  outline: none;
                }
              ` : 
              css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 2px 2px 10px #999;
                font-size: 100%;
                line-height: inherit;
                padding: 8px 16px;
                resize: none;
                overflow: auto;
                &:focus {
                  outline: none;
                }
              `
            )}
            rows={9}
            value={markdownContent}
          />
        </ColumnFlex>
      )}
    </ClassNames>
  )
}

Editor.propTypes = {
  markdownContent: PropTypes.string.isRequired,
  setMarkdownContent: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Editor;