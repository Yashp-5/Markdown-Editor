/** @jsxImportSource @emotion/react */
import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { css, ClassNames } from '@emotion/react'

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <ClassNames>
      {({ css: classNamesCss }) => (
        <header
          className={classNamesCss(theme === 'dark' ?
            css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              background-color:  #15199e;
              padding: 24px 32px;
              font-size: 16px;
              text-align: center;
              border-bottom: 1px solid #325aa8;
              box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
            ` :
            css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              background-color: #2f4f7f;
              padding: 24px 32px;
              font-size: 16px;
              text-align: center;
              border-bottom: 1px solid #add8e6;
              box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
            `
          )}
        >
          <div 
            className='header_title'
            css={css`
              font-size: 24px;
              font-weight: bold;
              color: #fff;
              text-align: center;
              text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
              transition: all 0.2s ease-in-out;
              &:hover {
                transform: scale(1.1);
              }
            `}
          >
            MarkITdown!
          </div>
          <div
            css={css`
              cursor: pointer;
              align-self: center;
              transition: all 0.2s ease-in-out;
              &:hover {
                transform: scale(1.2);
              }
            `}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <FiSun size={24} color="#ffd700" /> : <FiMoon size={24} color="#87ceeb" />}
          </div>
        </header>
      )}
    </ClassNames>
  );
}

export default Header;