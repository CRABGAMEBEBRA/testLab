'use client';

import css from './main.module.css'
import Image from 'next/image';
import icon1 from '../assets/waiting.svg'
import icon2 from '../assets/delivery-truck.svg'
import icon3 from '../assets/secure.svg'
import icon4 from '../assets/money-bags.svg'
import photo from '../assets/2024-09-24_21-19-53.png'
import ava1 from '../assets/Ellipse 21 (2).svg'
import ava2 from '../assets/Ellipse 21 (3).svg'
import ava3 from '../assets/Ellipse 21 (4).svg'
import { useState } from 'react';   

export default function Main(){
    const [activeCircle, setActiveCircle] = useState(2);
    const [activetopic, setActiveTopic] = useState([false,false,false,false,false,false,false]);
    const otzivi = [{name:'Константинов Михаил Павлович',city:'Санкт-Петербург',photo:ava1, description:'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы '},
        {name:'Иван Иванов', city:'Санкт-Петербург',photo:ava2,description:'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'},
        {name:'Артем Корнилов', city:'Самара', photo:ava3,description:'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'},
        {name:'Владислав Бебрович', city:'Новочеркасск', photo:ava1, description:'Мне понравился этот тест, он очень интересный и крутой'},
        {name:'Артем сигмочкин ', city: 'Ростов', photo:ava2, description:'А мне тест не понравился, он фигня полная, переделывайте'}]
    return(
        <div className={css.main}>
            <p className={css.principeWork}>Как это работает</p>
            <div className={css.IconDiv}>
                <div className={css.miniDiv}>
                    <Image src={icon1} alt="icon1" width={72} height={72}/>
                    <p className={css.iconsDivFont1}>Прочитай задание внимательно</p>
                    <p className={css.iconsDivFont2}>Думаю у тебя не займет это больше двух-трех минут</p>
                </div>
                <div className={css.miniDiv}>
                    <Image src={icon2} alt="icon2" width={72} height={72}/>
                    <p className={css.iconsDivFont1}>Изучи весь макет заранее</p>
                    <p className={css.iconsDivFont2}>Подумай как это будет работать на разных разрешениях и при скролле</p>
                </div>
                <div className={css.miniDiv}> 
                    <Image src={icon3} alt="icon3" width={72} height={72}/>
                    <p className={css.iconsDivFont1}>Сделай хорошо</p>
                    <p className={css.iconsDivFont2}>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
                </div>
                <div className={css.miniDiv}>
                    <Image src={icon4} alt="icon4" width={72} height={72}/>
                    <p className={css.iconsDivFont1}>Получи предложение</p>
                    <p className={css.iconsDivFont2}>Ну тут все просто, не я придумал правила, но думаю так и будет</p>
                </div>
            </div>
            <div className={css.thirdBlock}>
                <div className={css.thirdMiniBlock}>
                    <p className={css.niceP}>Круто, ты дошел до третьего блока</p>   
                    <p className={css.static}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.

                    
                        <br/><br/>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p> 
                </div>
                    <Image src={photo} className={css.man} alt="photo" width={window.innerWidth>1000? 592:351} height={window.innerWidth>1000? 448 : 265}/>
            </div>
            <div className={css.otzivMainDiv}>
                <p className={css.otzivP}>Отзывы</p>
                <div className={activeCircle==0? css.otziviLeft: activeCircle==4? css.otziviRight : css.otzivi}>
                    {window.innerWidth>768?  <div className={css.arrowCircle} onClick={() => (activeCircle==0? '' : setActiveCircle(activeCircle-1))}><div className={css.arrowLeft}></div></div> : ''}
                    {activeCircle>0 && window.innerWidth>1200? 
                    <div className={css.otzivReg}>
                            <div className={css.menuDiv}>
                                <Image alt='otzivPhoto' src={otzivi[activeCircle-1].photo} className={css.logo} width={44} height={44}/>
                                <div className={css.otzivMenu}>
                                    <p className={css.otzivName}>{otzivi[activeCircle-1].name}</p>
                                    <p className={css.oyzivCity}>{otzivi[activeCircle-1].city}</p>
                                </div>
                            </div>
                            <p className={css.menuDesc}>{otzivi[activeCircle-1].description}</p>
                    </div> : ''}
                    <div className={css.otzivReg} id={css.trueOtz}>
                            <div className={css.menuDiv}>
                                <Image alt='otzivPhoto' src={otzivi[activeCircle].photo} className={css.logo} width={44} height={44}/>
                                <div className={css.otzivMenu}>
                                    <p className={css.otzivName}>{otzivi[activeCircle].name}</p>
                                    <p className={css.oyzivCity}>{otzivi[activeCircle].city}</p>
                                </div>
                            </div>
                            <p className={css.menuDesc}>{otzivi[activeCircle].description}</p>
                    </div>
                    {activeCircle<4 && window.innerWidth>700? <div className={css.otzivReg}>
                            <div className={css.menuDiv}>
                                <Image alt='otzivPhoto' src={otzivi[activeCircle+1].photo} className={css.logo} width={44} height={44}/>
                                <div className={css.otzivMenu}>
                                    <p className={css.otzivName}>{otzivi[activeCircle+1].name}</p>
                                    <p className={css.oyzivCity}>{otzivi[activeCircle+1].city}</p>
                                </div>
                            </div>
                            <p className={css.menuDesc}>{otzivi[activeCircle+1].description}</p>
                    </div> : ''}
                    {window.innerWidth>768? <div className={css.arrowCircle} onClick={() => (activeCircle==4? '' : setActiveCircle(activeCircle+1))}><div className={css.arrowRight}></div></div> : ''}
                </div>
                <div className={css.smallDots}>
                    <div className={activeCircle==0? css.blueSmallDot : css.smalldot} onClick = {() => setActiveCircle(0)}></div>
                    <div className={activeCircle==1? css.blueSmallDot : css.smalldot} onClick = {() => setActiveCircle(1)}></div>
                    <div className={activeCircle==2? css.blueSmallDot : css.smalldot} onClick = {() => setActiveCircle(2)}></div>
                    <div className={activeCircle==3? css.blueSmallDot : css.smalldot} onClick = {() => setActiveCircle(3)}></div>
                    <div className={activeCircle==4? css.blueSmallDot : css.smalldot} onClick = {() => setActiveCircle(4)}></div>
                </div>
            </div>
            <div className={css.questions}>
                <p className={css.questionsAndAns}>Вопросы и ответы</p>
                <div className={css.questionsDiv}>
                    <div className={css.miniquestionsDiv}>
                        <div className={css.miniquestionsPDiv}>
                            <p className={css.questPDiv}>Подтверждено: сознание наших соотечественников не замутнено пропагандой?</p>
                            <div onClick={() => setActiveTopic([!activetopic[0],activetopic[1],activetopic[2],activetopic[3],activetopic[4],activetopic[5],activetopic[6]])} className={css.plusWCircle}>+</div>
                        </div>
                        {activetopic[0]==true? <p className={css.additInfo}>Политика жестких дейсвий властей не встретила в России понимания. Возможно, потому, что в последнее время в экономике мы подошли к крзу и в связи с этим следует серьезно отнестись к проблеме сплочения национального капиталса». Одновреенно в том же номер был опублиовантекст «Ответа аналитиков на вопрос: как изменить ситуацию в нашу пользу?»</p> : ''}
                    </div>
                    <div className={css.miniquestionsDiv}>
                        <div className={css.miniquestionsPDiv}>
                            <p className={css.questPDiv}>Прототип нового сервиса - это как трубный призыв?</p>
                            <div onClick={() => setActiveTopic([activetopic[0],!activetopic[1],activetopic[2],activetopic[3],activetopic[4],activetopic[5],activetopic[6]])} className={css.plusWCircle}>+</div>
                        </div>
                        {activetopic[1]==true? <p className={css.additInfo}>Задача прототипа — доказать, что его разработка оказалась полезной. В неё может входить, например, превращение во фриланс стандартных материалов в настоящий товар с возможностью создания виртуальных стран.</p> : ''}
                    </div>
                    <div className={css.miniquestionsDiv}>
                        <div className={css.miniquestionsPDiv}>
                            <p className={css.questPDiv}>Частокол на границе продолжает удивлять?</p>
                            <div onClick={() => setActiveTopic([activetopic[0],activetopic[1],!activetopic[2],activetopic[3],activetopic[4],activetopic[5],activetopic[6]])} className={css.plusWCircle}>+</div>
                        </div>
                        {activetopic[2]==true? <p className={css.additInfo}>В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.</p> : ''}
                    </div>
                    <div className={css.miniquestionsDiv}>
                        <div className={css.miniquestionsPDiv}>
                            <p className={css.questPDiv}>Очевидцы сообщают, что слышали грохот грома градущих изменений?</p>
                            <div onClick={() => setActiveTopic([activetopic[0],activetopic[1],activetopic[2],!activetopic[3],activetopic[4],activetopic[5],activetopic[6]])} className={css.plusWCircle}>+</div>
                        </div>
                        {activetopic[3]==true? <p className={css.additInfo}>Но даже в такой простой ситуации включается рассуждение и осознается, что вещи адо чем-то заполнить, и это «чем-то» может оказаться одним из самых неожиданных. Про ворон на зубце Петрарки – великая мысль, но почти наверняка через некоторое время забудешь, что это такое, и однажды на него даже наступишь, хотя вообще-то совсем не там стоишь. Но иногда…</p> : ''}
                    </div>
                    <div className={css.miniquestionsDiv}>
                        <div className={css.miniquestionsPDiv}>
                            <p className={css.questPDiv}>И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?</p>
                            <div onClick={() => setActiveTopic([activetopic[0],activetopic[1],activetopic[2],activetopic[3],!activetopic[4],activetopic[5],activetopic[6]])} className={css.plusWCircle}>+</div>
                        </div>
                        {activetopic[4]==true? <p className={css.additInfo}>И по сей день в центральных регионах звучит перекатами печальный плач оппозиции по «неблагодарному» русскому народу. Не верите? Позвоните на радио «Вести-Волга» инайдите тамэтого Бушуева. Ею, т. е. т. Бушуевой, руководит орден ордена Любви. С какой целью? Мне непонятно.</p> : ''}
                    </div>
                    <div className={css.miniquestionsDiv}>
                        <div className={css.miniquestionsPDiv}>
                            <p className={css.questPDiv}>Нынче никто не может себе позволить инициировать треск разлетающихся скреп?</p>
                            <div onClick={() => setActiveTopic([activetopic[0],activetopic[1],activetopic[2],activetopic[3],activetopic[4],!activetopic[5],activetopic[6]])} className={css.plusWCircle}>+</div>
                        </div>
                        {activetopic[5]==true? <p className={css.additInfo}>Нынче никто не может себе позволить инициировать треск разлетающихся скреп! Все думают только о себе. А теперь вспомните, когда о людях впервые стали заботиться спеслужбы. Ведь именно тогда общества и стали заботиться о себе сами.</p> : ''}
                    </div>
                    <div className={css.miniquestionsDiv}>
                        <div className={css.miniquestionsPDiv}>
                            <p className={css.questPDiv}>Высококачественный прототип будущего проекта обнадёживает?</p>
                            <div className={css.plusWCircle}>+</div>
                        </div>
                        {activetopic[6]==true? <p className={css.additInfo}>Высококачественный прототип будущего проекта обнадёживает , но ведь другой, с иными качествами, тоже нужен. Я уверен, что в будущем мы сумеем придать технологиям любые свойства, о которых мечтали в 20-30-е гды. В частности, вид огромного, округлого живота. Я вообще обожаю тестировать новую продукцию.</p> : ''}
                    </div>
                </div>
            </div>
            <div className={css.additionalKnow}>
                <div className={css.middleDiv}>
                    <div className={css.midlemidleDIv}>
                        <p className={css.firstFont}>Опрошенных пользовались микрокредитами</p>
                        <p className={css.secondFont}>Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах</p>
                    </div>
                    <div className={css.midlemidleDIv}>
                        <p className={css.firstFont}>Опрошенных пользовались микрокредитами</p>
                        <p className={css.secondFont}>Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах</p>
                    </div>
                    <div className={css.midlemidleDIv}>
                        <p className={css.firstFont}>Опрошенных пользовались микрокредитами</p>
                        <p className={css.secondFont}>Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах</p>
                    </div>
                    <div className={css.midlemidleDIv}>
                        <p className={css.firstFont}>Опрошенных пользовались микрокредитами</p>
                        <p className={css.secondFont}>Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах</p>
                    </div>
                </div>
            </div>
            <div className={css.form}>
                <p className={css.formsending}>Отправь форму</p>
                <div className={css.inputDiv}>
                    <input className={css.nameForm} type="text" placeholder='Имя'/>
                    <input className={css.phoneForm} type="tel" placeholder='Телефон'/>
                </div>
                <div className={css.newForm}>
                    <div className={css.checkForm}>
                        <input type="checkbox" className={css.checkDiv}/>
                        <p className={css.agree}>Согласен, отказываюсь</p>
                    </div>
                    <div className={css.formSending}>Отправить</div>
                </div>
            </div>
            <p className={css.footer}>© 2021 Лаборатория интернет</p>
        </div>
    )
}