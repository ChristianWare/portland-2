"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import Code from "../../public/icons/code.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const navItems = [
    {
      text: "About",
      href: "#about",
    },
    {
      text: "Projects",
      href: "#projects",
    },
    {
      text: "Skills",
      href: "#skills",
    },
    {
      text: "Experience",
      href: "#experience",
    },
    {
      text: "FAQ",
      href: "#faq",
    },
    {
      text: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoBox}>
          <Code className={styles.logoIcon} width={40} height={40} />
          <Link href='/' className={styles.logo}>
            Chris Ware
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={styles.navItem}
              onClick={() => setIsOpen(false)}
            >
              <Link href={navItem.href} className={styles.navItem}>
                {navItem.text}
              </Link>
            </li>
          ))}
          <div className={styles.btnContainer}>
            <Button
              btnType='navBtn'
              text='Download My Resume'
              href='/ChrisWareResume2024.pdf'
              target='_blank'
              download={true}
              arrow
              iconColor='blue'
            />
          </div>
        </ul>
        {isOpen && (
          <div
            className={`${styles.overlay} ${
              isOverlayVisible ? styles.visible : ""
            }`}
            onClick={() => {
              setIsOpen(false);
              setIsOverlayVisible(false);
            }}
          ></div>
        )}
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </span>
      </nav>
    </header>
  );
}
export default Nav;
