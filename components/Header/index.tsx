import { Button, Paper, Typography } from "@material-ui/core";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import client from "../../contentful/index";
import { IHome, IHomeFields } from "../../contentful";
import styles from './Hedaer.module.scss'

export default function Header() {
    return (
        <Paper className={styles.root} elevation={2}>

            <Typography variant="h1">PlanTain Code</Typography>
            <div className={styles.nav}>
                <Link href='/'><Button className={styles.headerButton}>Блог</Button></Link>
                <Link href='/notes'><Button className={styles.headerButton}>Заметки</Button></Link>
            </div>
            
        </Paper>
    )
}

