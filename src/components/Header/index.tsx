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
        <span className={styles.line}></span>
        <div className={styles.user}>
          <div className={styles.boxAvatar}>
            <img className={styles.avatar} src="https://images.unsplash.com/photo-1642980074229-439281d19f29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className={styles.description}>
            <h3 className={styles.name}>
              Richard Lucas
            </h3>
            <small className={styles.type}>Renter</small>
          </div>
        </div>
        <select name="language" id="language" className={styles.language}>
          <option value="">Lang</option>
          <option value="">US</option>
          <option value="">PT-BR</option>
          <option value="">PT</option>
        </select>
      </div>
    </header >
  )
}

