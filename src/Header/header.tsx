'use client';
import blueCircle from '../assets/Ellipse 1.svg'
import whiteCircle from '../assets/Ellipse 2.svg'
import Image from 'next/image';
import css from './header.module.css';
import Menu from '@/menu/menus';
import logo from '../assets/Group 155.svg'
import { useState } from 'react';

export default function Header() {
    const[menu, setMenu] = useState(false);
    return (
        <header className={css.header}>
            <div className={css.testLab}>   
                <div>
                    <Image src={blueCircle} width ={24} height={24} alt="blueCircle" className={css.blueC}/>
                    <Image src={whiteCircle} width ={24} height={24} alt="blueCircle" className={css.whiteC}/>
                </div>
                <p className={css.testLabP}>testLab</p>
            </div>
            {window.innerWidth>768? 
            <div className={css.questions}>
            <p className={css.questionsP}>Как это работает</p>
            <p className={css.questionsP}>3-й блок</p>
            <p className={css.questionsP}>Вопросы и ответы</p>
            <p className={css.questionsP}>Форма</p>
        </div>:
        <Image onClick={() => setMenu(!menu)} src={logo} width ={22} height={12} alt="logo" className={css.logo}/>
        }
        {menu? <Menu /> : ''}
            <div className={css.headerDiv}>
                <p className={css.headerWord1}>Говорят, никогда не поздно сменить проффессию</p>
                <p className={css.headerWord2}>Сделай круто тестовое задание и у тебя получится</p>
                <div onClick={() => window.scrollTo(0, screen.height+10009)} className={css.headerWord3}><p className={css.headerDivP}>Проще простого!</p></div>
            </div>
        </header>
    );
  }
  