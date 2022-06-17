import { CardMedia, Paper, Typography } from "@material-ui/core";
import React from "react";
import { IPost, IPostFields } from "../../contentful";
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../contentful/index";
import styles from '../../styles/Post.module.scss'

export default function Post({post}: {post: IPost}) {
    return (
        <>  
            <Head>
                <title>{post.fields.title}</title>
            </Head>
        
            <Paper elevation={1} className={styles.postPaper}>
                <CardMedia 
                component='img'
                alt={post.fields.title}
                image={`http:${post.fields.background?.fields.file.url}`} 
                className={styles.postMedia}
                />
                <div className={styles.postContent}>
                    <Typography variant="h1" className={styles.postTitle}>{post.fields.title}</Typography>
                    <Typography variant="body2" className={styles.postDate}>{post.fields.date}</Typography>
                    <Typography variant="inherit" className={styles.postText}>{documentToReactComponents(post.fields.content!)}</Typography>
                </div>
                
            </Paper>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const postEntries = await client.getEntries<IPostFields>({
        content_type: 'post',
        select: 'fields.slug'
      })

    return {
        paths:  postEntries.items.map(item => {
                return {
                    params: {
                        post: item.fields.slug
                    }
                }
        }),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params!.post!;

    const postEntries = await client.getEntries<IPostFields>({
        content_type: 'post',
        limit: 1,
        "fields.slug": slug
      })

    const [PostPage] = postEntries.items;

    return {
        props: {
            post: PostPage
        }
    }
}