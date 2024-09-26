import blueCircle from '../assets/Ellipse 1.svg'
import whiteCircle from '../assets/Ellipse 2.svg'
import css from './menu.module.css';
import Image from 'next/image';


export default function Menu(){
    return(
        <div className={css.mainDiv}>
            <div className={css.firstmenuDiv}>
                <div className={css.testLab}>   
                    <div>
                        <Image src={blueCircle} width ={24} height={24} alt="blueCircle" className={css.blueC}/>
                        <Image src={whiteCircle} width ={24} height={24} alt="blueCircle" className={css.whiteC}/>
                    </div>
                    <p className={css.testLabP}>testLab</p>
                </div>
                <div className={css.mdivx}>
                    <div className={css.mdiv}>
                        <div className={css.md}></div>
                    </div>
                </div>
            </div>
            <div className={css.secontDiv}>
                <p className={css.firstFont}>Как это работает</p>
                <div className={css.arrowCircle}><div className={css.arrowRight}></div></div>
            </div>
            <div className={css.secontDiv}>
                <p className={css.firstFont}>3-й блок</p>
                <div className={css.arrowCircle}><div className={css.arrowRight}></div></div>
            </div>
            <div className={css.secontDiv}>
                <p className={css.firstFont}>Вопросы и ответы</p>
                <div className={css.arrowCircle}><div className={css.arrowRight}></div></div>
            </div>
            <div className={css.secontDiv}>
                <p className={css.firstFont}>Форма</p>
                <div className={css.arrowCircle}><div className={css.arrowRight}></div></div>
            </div>
        </div>
    )
}