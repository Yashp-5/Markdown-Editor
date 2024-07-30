import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { marked } from 'marked';
import { css, ClassNames } from '@emotion/react';
import { ColumnFlex } from '..';
import DOMPurify from 'dompurify';
import Prism from 'prismjs'; // Import Prism.js for syntax highlighting

interface Props {
  markdownContent: string;
  theme: string;
}

const Preview: React.FC<Props> = ({ markdownContent, theme }) => {
  const [sanitizedContent, setSanitizedContent] = useState('');

  useEffect(() => {
    const parseMarkdown = async () => {
      const markdownFormattedContent = await marked.parse(markdownContent);
      const sanitized = DOMPurify.sanitize(markdownFormattedContent);
      setSanitizedContent(sanitized);
    };
    parseMarkdown();
  }, [markdownContent]);

  useEffect(() => {
    if (sanitizedContent) {
      Prism.highlightAll();
    }
  }, [sanitizedContent]);

  return (
    <ClassNames>
      {({ css: classNamesCss }) => (
        <ColumnFlex id="preview" className={classNamesCss(css`flex:1;padding:16px;`)}>
          <h2>Preview</h2>
          <div
            className={classNamesCss(
              theme === 'dark'
                ? css`
                    height: 100%;
                    border-radius: 4px;
                    border: none;
                    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
                    font-size: 100%;
                    line-height: inherit;
                    overflow: auto;
                    background: #000;
                    padding: 8px 16px;
                    color: #fff;
                  `
                : css`
                    height: 100%;
                    border-radius: 4px;
                    border: none;
                    box-shadow: 2px 2px 10px #999;
                    font-size: 100%;
                    line-height: inherit;
                    overflow: auto;
                    background: #fff;
                    padding: 8px 16px;
                    color: #000;
                  `,
            )}
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </ColumnFlex>
      )}
    </ClassNames>
  );
};

Preview.propTypes = {
  markdownContent: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Preview;