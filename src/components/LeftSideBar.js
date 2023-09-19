import React from 'react'
import User from './User'
import Menu from './Menu'
import Logout from './Logout'
import style from '../styles/LeftSideBar.module.css'

export const LeftSideBar = () => {
  return (
    <div>
        <User />
        <Menu />
        <div className={style["logout-container"]}>
        <Logout />
        </div>
    </div>
  )
}
