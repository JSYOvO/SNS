import React from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid, Image } from 'semantic-ui-react';

import PostCard from '../components/PostCard';
function Home() {
    
    // const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    const posts = data?.getPosts;
    

    return (
        <div className="home">
            <Grid columns={3}>
                <Grid.Row className="home__pageTitle">
                    <h1>Recent Posts</h1>
                </Grid.Row>
                <Grid.Row className="page-title">
                    {loading ? (
                        <h1>Loading posts..</h1>
                    ) : (
                        posts && posts.map(post => (
                            console.log(post),
                            <Grid.Column key={post.id}>
                                <PostCard post={post} />
                            </Grid.Column>
                        ))
                    )}
                </Grid.Row>
            </Grid>
        </div>
    )
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts {
            id
            body
            createdAt
            username
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id
                username
                createdAt
                body
            }
        }
    }
`

export default Home
