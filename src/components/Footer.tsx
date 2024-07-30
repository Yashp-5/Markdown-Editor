/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, ClassNames } from '@emotion/react'

const Footer: React.FC = () => {
  return (
    <ClassNames>
      {({ css: classNamesCss }) => (
        <footer>
          <div
            className={classNamesCss(css`
              padding: 24px 0px;
              overflow: hidden;
              position: absolute;
              width: 100%;
              text-align: center;
              bottom: 0px;
              color: #325aa8;
              background: #000;
            `)}
          >
                      <span> {'</>'}</span><span>with <a href='https//reactjs.org' target='_blank'>React.js</a> &amp; <a href='https://www.typescript.org/' target='_blank'>Typescript</a></span>
          </div>
        </footer>
      )}
    </ClassNames>
  )
}

export default Footer;
