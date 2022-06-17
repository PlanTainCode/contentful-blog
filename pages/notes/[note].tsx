import { CardMedia, Paper, Typography } from "@material-ui/core";
import React from "react";
import { INote, INoteFields, IPost, IPostFields } from "../../contentful";
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../contentful/index";
import styles from '../../styles/Note.module.scss'

export default function Note({note}: {note: INote}) {
    return (
        <>  
            <Head>
                <title>{note.fields.title}</title>
            </Head>
        
            <Paper elevation={1} className={styles.postPaper}>
                <div className={styles.postContent}>
                    <Typography variant="h1" className={styles.postTitle}>{note.fields.title}</Typography>
                    <Typography variant="body2" className={styles.postDate}>{note.fields.date}</Typography>
                    <Typography variant="inherit" className={styles.postText}>{documentToReactComponents(note.fields.content!)}</Typography>
                </div>
                
            </Paper>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const noteEntries = await client.getEntries<INoteFields>({
        content_type: 'note',
        select: 'fields.slug'
      })

    return {
        paths:  noteEntries.items.map(item => {
                return {
                    params: {
                        note: item.fields.slug
                    }
                }
        }),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params!.note!;

    const noteEntries = await client.getEntries<INoteFields>({
        content_type: 'note',
        limit: 1,
        "fields.slug": slug
      })

    const [NotePage] = noteEntries.items;

    return {
        props: {
            note: NotePage
        }
    }
}