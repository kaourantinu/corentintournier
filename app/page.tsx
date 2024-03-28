import Image from "next/image";
import AiChat from "./components/AiChat/AiChat";
import styles from './page.module.css'
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import RealisationSection from "./components/RealisationSection/RealisationSection";

export default function Home() {

  return (
    <body>
      <header>
        <Link href={`/#${styles.herosection}`} className={styles.logo}>corentintournier/</Link>
        <nav>
          <ul>
            <li><Link href={`/#${styles.stacksection}`}>Technologies</Link></li>
            <li><Link href="/#realisationsection">Réalisations</Link></li>
            <li><Link href={`/#${styles.expsection}`}>Expériences</Link></li>
            <li><Link href={`/#${styles.schoolsection}`}>Diplôme</Link></li>
            <li><Link href={`/#${styles.aichatsection}`}>Des questions ?</Link></li>
          </ul>
        </nav>
        <Link href='' className='whitebutton'>Me contacter</Link>
      </header>
      <main>
        <section id={styles.herosection}>
          <div id={styles.infodiv}>
            <div id={styles.status}>
              <span id={styles.statuscircle}></span>
              <p id={styles.statustext}>Ouvert à de nouvelles opportunités professionnelles</p>
            </div>
            <h1 id={styles.devtitle}>Développeur web React/Next.js</h1>
            <h2 id={styles.nametitle}>Corentin Tournier</h2>
            <div id={styles.localisationdiv}>
              <IoMdPin size='1.5rem'/><p id={styles.localisation}>Besançon, Doubs, Franche-Comté, France</p>
            </div>
            <div id={styles.icondiv}>
              <Link href='mailto:corentin.tournier@outlook.fr' className={styles.iconlink}><IoIosMail size='1.25rem'/>corentin.tournier@outlook.fr</Link>
              <Link href='tel:+33761413061' className={styles.iconlink}><FaPhoneAlt size='1rem'/>07 61 41 30 61</Link>
              <Link href='https://www.linkedin.com/in/corentin-tournier/' className={styles.iconlink}><FaLinkedinIn size='1rem'/>Corentin Tournier</Link>
            </div>
          </div>
          <div id={styles.photodiv}>
            <Image src='/corentin-tournier-développeur-web-freelance.jpg' width={500} height={500} alt="" priority/>
            <div id={styles.photooverlay}></div>
            
          </div>
        </section>
        <section id={styles.stacksection}>
          <h2>Mes technologies de prédilection</h2>
          <div id={styles.stackbentos}>
            <div className={styles.stackbento}>
              <div className={styles.stacklogos}>
                <BiLogoTypescript size='2.25rem'/>
                <FaReact size='1.75rem'/>
                <SiNextdotjs size='1.75rem'/>
                <SiThreedotjs size='1.75rem'/>
              </div>
              <h3>Front-end</h3>
              <p>TypeScript, React, Next.js, Three.js</p>
            </div>
            <div className={styles.stackbento}>
              <div className={styles.stacklogos}>
                <SiNextdotjs size='1.75rem'/>
                <SiPrisma size='1.75rem'/>
                <BiLogoPostgresql size='2.25rem'/>
              </div>
              <h3>Back-end</h3>
              <p>Next.js, Prisma, PostgreSQL</p>
            </div>
            <div className={styles.stackbento}>
              <div className={styles.stacklogos}>
                <FaGithub size='1.75rem'/>
                <FaFigma size='1.75rem'/>
                <IoLogoVercel size='2.25rem'/>
              </div>
              <h3>Autre</h3>
              <p>Git/GitHub, Figma, Vercel</p>
            </div>
          </div>
        </section>
        <RealisationSection/>
        <section id={styles.expsection}>
            <h2>Mes expériences</h2>
            <div className={styles.expdiv}>
              <input type="radio" id="first" name="first"/>
              <label htmlFor="first">
                <div className={styles.expdivlabelpart}>
                  <p className={styles.date}>JAN. 2023<br></br>AVR. 2024</p>
                  <div>
                    <h3>Consultant & formateur en Marketing Digital</h3>
                    <p className={styles.society}>Agence ikigai - Freelance</p>
                  </div>
                </div>
                <IoIosArrowDown className={styles.arrowexp}/>
              </label>
              <div className={styles.descriptiondiv}>
                <p className={styles.description}>Missions :</p>
                <ul className={`${styles.description} ${styles.descriptionlist}`}>
                  <li>- Création de sites internet (WordPress/Elementor, React/Next.js)</li>
                  <li>- Création de landing pages (systeme.io)</li>
                  <li>- Social Media Management & Community Management</li>
                  <li>- Publicités en ligne (Meta Ads, LinkedIn Ads)</li>
                  <li>- Création de contenus graphiques digitaux (Suite Adobe, Canva, ...)</li>
                  <li>- Formation d&apos;étudiants au Marketing Digital dans différents organismes (Université de Franche-Comté, Formagraph Design, ESTM Pigier, Senza Formations, ...)</li>
                </ul>
              </div>
            </div>
            <div className={styles.expdiv}>
              <input type="radio" id="second" name="first"/>
              <label htmlFor="second">
                <div className={styles.expdivlabelpart}>
                  <p className={styles.date}>AVR. 2021<br></br>DÉC. 2022</p>
                  <div>
                    <h3>Consultant en Marketing Digital</h3>
                    <p className={styles.society}>HLP Studio - CDI</p>
                  </div>
                </div>
                <IoIosArrowDown className={styles.arrowexp}/>
              </label>
              <div className={styles.descriptiondiv}>
                <p className={styles.description}>Missions :</p>
                <ul className={`${styles.description} ${styles.descriptionlist}`}>
                  <li>- Création de sites internet (WordPress/Elementor)</li>
                  <li>- Création de landing pages (systeme.io)</li>
                  <li>- Social Media Management & Community Management</li>
                  <li>- Publicités en ligne (Meta Ads, LinkedIn Ads)</li>
                  <li>- Création de contenus graphiques digitaux (Suite Adobe, Canva, ...)</li>
                </ul>
              </div>
            </div>
            <div className={styles.expdiv}>
              <input type="radio" id="third" name="first"/>
              <label htmlFor="third">
                <div className={styles.expdivlabelpart}>
                  <p className={styles.date}>JAN. 2020<br></br>DÉC. 2020</p>
                  <div>
                    <h3>Community Manager</h3>
                    <p className={styles.society}>Webedia - CDI</p>
                  </div>
                </div>
                <IoIosArrowDown className={styles.arrowexp}/>
              </label>
              <div className={styles.descriptiondiv}>
                <p className={styles.description}>Missions :</p>
                <ul className={`${styles.description} ${styles.descriptionlist}`}>
                  <li>- Développement de stratégies Social Media & Social Marketing</li>
                  <li>- Gestion de la production et de la publications des contenus</li>
                  <li>- Suivi et analyse des performances des contenus</li>
                  <li>- Clients : Castorama, Franprix, Whaou!, Le Petit Marseillais, ...</li>
                </ul>
              </div>
            </div>
        </section>
        <section id={styles.schoolsection}>
            <h2>Mon diplôme</h2>
            <div id={styles.schooldiv}>
              <div id={styles.headerschool}>
                <p className={styles.date}>SEP. 2015<br></br>JUI. 2020</p>
                <div>
                  <h3>Master Information-Communication, parcours Conseil en Communication</h3>
                  <p className={styles.society}>Université de Franche-Comté - BAC +5</p>
                </div>
              </div>
              <p className={styles.description}>Compétences :</p>
                <ul className={styles.descriptionlist}>
                  <li>- Théories de la communication</li>
                  <li>- Pratiques de communication (plan de communication & gestion de projet)</li>
                  <li>- Outils de communication (Événementiel, webdesign, infographie & PAO)</li>
                  <li>- Communication digitale & compréhension du web</li>
                </ul>
            </div>
        </section>
        <section id={styles.aichatsection}>
          <h2>D&apos;autres questions ?</h2>
          <p>Mon clone créé par l&apos;intelligence artificielle pourra répondre à vos questions !</p>
          <AiChat/>
        </section>
      </main>
      <footer>
        <p className={styles.logo}>corentintournier/</p>
      </footer>
    </body>
  );
}
