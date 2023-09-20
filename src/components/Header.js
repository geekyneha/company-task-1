import React, { useState } from 'react';
import style from '../styles/Header.module.css';
import { APP_LOGO_URL, COMPANY_LOGO } from '../utils/constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import DropDown from './DropDown';
import Menu from './Menu';
import Logout from './Logout';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
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
            <div
              className={style['menu']}
              onClick={() => setShowMenu(!showMenu)}
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </header>
      {showMenu && (
        <div className={style['menu-container']}>
          <div>
            <Menu />
          </div>
          <div>
            <Logout />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
