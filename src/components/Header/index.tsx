import React from 'react';
import { FiSearch } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";

import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <form action="" className={styles.form}>
          <input type="text" placeholder="New york" className={styles.input} />
          <div className={styles.icone}>
            <FiSearch />
          </div>
        </form>
      </div>
      <div className={styles.headerList}>
        <ul >
          <li>
            <MdOutlineMessage size={28} />
          </li>
          <li>
            <HiOutlineBell size={28} />

          </li>
          <li>
            <AiOutlineHeart size={28} />

          </li>
        </ul>
        <div className="user">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <div className="description">
            <h3 className="name">
              Richard Lucas
            </h3>
            <small>Renter</small>
          </div>
        </div>
        <select name="language" id="language" className="language">
          <option value="">Lang</option>
          <option value="">US</option>
          <option value="">PT-BR</option>
          <option value="">PT</option>
        </select>
      </div>
    </header >
  )
}

