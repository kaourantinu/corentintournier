'use client'

import styles from './RealisationSection.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

export default function RealisationSection(){

    const projects = [
        {id: 1, name: 'Agence ikigai', imageUrl: '/ikigaiwebsite.png', description: `Un site vitrine réalisé lors de mon aventure en tant qu'indépendant pour présenter les prestations que je proposais aux entreprises et aux indépendants. Le site reprend la charte graphique que j'avais définie, tout en développant une stratégie SEO locale sur Besançon.`, projectUrl: 'https://agenceikigai.vercel.app/', technos: ["Next.js", "TypeScript"]},
        {id: 2, name: 'Le Comptoir des Bières', imageUrl: '/comptoirwebsite.png', description: "Un projet réalisé en tant que freelance avant de me spécialiser dans le développement web : il s'agit d'un site internet e-commerce pour un bar et cave à bières situé aux alentours de Besançon. Le site est optimisé pour le référencement local et propose un service de Click and Collect.", projectUrl: 'https://lecomptoirdesbieresbesancon.com/', technos: ["WordPress", "Elementor", "WooCommerce"]},
        {id: 3, name: 'bgremover', imageUrl: '/bgremoverwebsite.png', description: "Un outil réalisé avec Next.js permettant de retirer l'arrière-plan d'une image choisie et cela, en un clic et quelques secondes. bgremover envoie l'image choisie par l'utilisateur à l'API publique de remove.bg afin d'en retirer l'arrière-plan. L'outil est limité à 150 images traitées par mois.", projectUrl: 'https://bgremover-ashen.vercel.app/', technos: ["Next.js", "TypeScript", "API Remove.Bg"]},
        {id: 4, name: 'Showroom iPhone', imageUrl: '/iphonewebsite.png', description: "Un showroom interactif Apple présentant l'iPhone 15 Pro. Il utilise la puissance de three.js et de la 3D afin de présenter le nouveau téléphone d'Apple à travers un configurateur gérant la couleur, la quantité de stockage, tout en adaptant le prix de vente.", projectUrl: 'https://appleiphone15pro.vercel.app/', technos: ["Next.js", "TypeScript", "three.js"]},
        {id: 5, name: 'corentintournier/', imageUrl: '/corentinwebsite.png', description: "Le site internet sur lequel vous êtes actuellement ! Ce site présente mon profil : celui d'un développeur web junior React/Next.js. Vous me découvrez à travers les technologies web que j'utilise, mes réalisations, mes expériences, mon diplôme et mon clone AI 3D géré par ChatGPT.", projectUrl: 'https://corentintournier.fr/', technos: ["Next.js", "TypeScript", "three.js", "API ChatGPT"]},
    ]

    const [currentProject, setCurrentProject] = useState(projects[0])

    function setPreviousArrowProject(){
        if (currentProject.id === projects[0].id){
            setCurrentProject(projects[projects.length - 1])
        } else {
            setCurrentProject(projects[currentProject.id - 2])
        }
    }

    function setNextArrowProject(){
        if (projects.length === currentProject.id){
            setCurrentProject(projects[0])
        } else {
            setCurrentProject(projects[currentProject.id])
        }
    }

    return(
        <section id={`${styles.realisationsection}`} className='container'>
            <div id={styles.realisationinfo} className="horizontalslide">
                <h2>Mes réalisations</h2>
                <h3>{currentProject.name}</h3>
                <div id={styles.technosmobile}>
                    {currentProject.technos.map((techno, index) => (
                        <div key={index} className={styles.techno}>{techno}</div>
                    ))}
                </div>
                <p>{currentProject.description}</p>
                <Link href={currentProject.projectUrl} target='_blank' rel='noreferrer noopener' className='whitebutton'>Découvrir le projet <FiExternalLink /></Link>
            </div>
            <div id={styles.currentrealisation}>
                <div id={styles.realisationphoto}>
                    <Image src={currentProject.imageUrl} width={1920} height={1080} alt=''/>
                    <div id={styles.technos}>
                        {currentProject.technos.map((techno, index) => (
                            <div key={index} className={styles.techno}>{techno}</div>
                        ))}
                    </div>
                </div>
                <div id={styles.projectchoice}>
                    <RiArrowDropLeftLine size='2.5rem' onClick={setPreviousArrowProject} style={{cursor: 'pointer'}}/>
                    <div id={styles.projectnumbers}>
                        {projects.map((project, index) => (
                            <div key={index} className={project.id === currentProject.id ? styles.activeprojectbubble : styles.projectbubble} onClick={() => setCurrentProject(projects[index])}>{project.id}</div>
                        ))}
                    </div>
                    <RiArrowDropRightLine size='2.5rem' onClick={setNextArrowProject} style={{cursor: 'pointer'}}/>
                </div>
            </div>
        </section>
    )
}