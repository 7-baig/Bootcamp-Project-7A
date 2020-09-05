import React from 'react'
import githubIcon from '../../assets/github.svg'
import styles from './Footer.module.css'

export const Footer = () => {

    return (
        <div className={styles.container}>
            <a href="https://github.com/7-baig/Bootcamp-Project-7A">
                <img src={githubIcon} alt="github-icon" />
            </a>
        </div>
    )
}
