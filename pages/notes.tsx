import { Card, CardContent, Typography } from "@material-ui/core"
import { GetStaticProps } from "next"
import React from "react"
import client from "../contentful/index"
import { INote, INoteFields } from "../contentful"
import styles from '../styles/Notes.module.scss'
import Link from 'next/link';

export default function Portfolio({title, notes}: {title: string, notes: INote}) {
    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <div className={styles.containerNotes}>
                {notes.map(note => {
                    return (
                        <Card key={note.fields.slug} className={styles.cardNote} elevation={0}>
                            <Link href={`/notes/${note.fields.slug}`}>
                                <CardContent className={styles.cardContent}>
                                    <Typography variant='inherit' className={styles.cardDateNote}>
                                        {note.fields.date}
                                    </Typography>
                                    <Typography variant='h2' className={styles.cardTitleNote}>
                                        {note.fields.title}
                                    </Typography>
                                    <Typography variant='body2' className={styles.cardTextNote}>
                                        {note.fields.description}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  
    const noteEntries = await client.getEntries<INoteFields>({
      content_type: 'note',
      select: 'fields.title,fields.slug,fields.date,fields.description'
    })
  
  
    return {
      props: {
        title: 'Заметки',
        notes: noteEntries.items
      },
      revalidate: 3600
    }
  }