import React from 'react';
import style from '../styles/Header.module.css';
import { APP_LOGO_URL, COMPANY_LOGO } from '../utils/constants';

import DropDown from './DropDown';
const Header = () => {
  return (
    <header className={style['header']}>
      <div className={style['header-wrapper']}>
        {/* LOGO *section */}
        <div className={style['logo']}>
          <img
            src={APP_LOGO_URL}
            alt="Protocol"
            className={style['company-logo']}
          />
        </div>
        {/* Right Section */}
        <div className={style['right-section']}>
          <div className={style['content-container']}>
            <div className={style['company-info']}>
              <div>
                <img
                  src={COMPANY_LOGO}
                  alt="Protocol"
                  className={style['company-img']}
                />
              </div>

              <div className={style['company-name']}>
                XYZ Enterprises Pvt. Ltd
              </div>
            </div>

            <DropDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
