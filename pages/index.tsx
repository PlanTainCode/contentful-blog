import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import client from '../contentful/index'
import { IHome, IHomeFields, IPost, IPostFields } from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home({home, posts}: {home: IHome, posts: IPost[]}) {
  return (
    <div>
        <Paper elevation={2} className={styles.decriptionPaper}>
          <Typography variant='inherit' className={styles.description}>
            {documentToReactComponents(home.fields.description!)}
          </Typography>
        </Paper>
        <Paper elevation={0} className={styles.blockHome}>
          {posts.map(post => {
            return (
              <Card key={post.fields.slug} className={styles.cardHome} elevation={0}>
                <Link href={`/posts/${post.fields.slug}`}>
                  <CardMedia
                  component='img'
                  alt={post.fields.title}
                  image={`http:${post.fields.background?.fields.file.url}`}
                  className={styles.cardImg}
                  />
                </Link>
                
                <CardContent className={styles.cardContent}>
                  <Typography variant='inherit' className={styles.cardDate}>
                    {post.fields.date}
                  </Typography>
                  <Typography variant='h2' className={styles.cardTitle}>
                    {post.fields.title}
                  </Typography>
                  <Typography variant='body2' className={styles.cardText}>
                    {post.fields.description}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
          </Paper>
    </div>
  )
}
// 
// 
export const getStaticProps: GetStaticProps = async () => {

  const home = await client.getEntries<IHomeFields>({
    content_type: 'home',
    limit: 1
  })

  const postEntries = await client.getEntries<IPostFields>({
    content_type: 'post',
    select: 'fields.title,fields.slug,fields.background,fields.date,fields.description,fields.action'
  })


  const [HomePage] = home.items;

  return {
    props: {
      title: 'PlanTain-Banana Blog',
      home: HomePage,
      posts: postEntries.items
    },
    revalidate: 3600
  }
}
