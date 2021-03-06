import { MongooseDocument } from 'mongoose';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Card, Icon, Label, Image, Button, Popup } from 'semantic-ui-react';
import moment from 'moment';
import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import MyPopup from '../util/MyPopup';

function PostCard({ post: {body, createdAt, id, username, likeCount, commentCount, likes} }) {
    
    const { user } = useContext(AuthContext);

    function likePost() {
        console.log('like Post');
    }



    return (
        <div className="postCard">
            <Card fluid>
                <Card.Content>
                    <Image floated="right" size="mini" src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                    <Card.Description>{body}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui tow buttons">
                        <Button color="blue" basic>
                            Approve
                        </Button>
                        <Button color="red" basic>
                            Decline
                        </Button>
                    </div>
                </Card.Content>

                <Card.Content extra>
                    <LikeButton user={user} post={{ id, likes, likeCount }}/>

                    <MyPopup content="Comment on post" >
                        <Button as="div" labelPosition="right" as={Link} to={`/posts/${id}`}>
                            <Button color="blue" basic>
                                <Icon name="comments" />
                            </Button>
                            <Label basic color="blue" pointing="left">
                                {commentCount}
                            </Label>
                        </Button>
                    </MyPopup>
                    
                    {user && user.username === username && (
                        <DeleteButton postId={id} />
                    )}
                </Card.Content>
            </Card>
        </div>
    )
}

export default PostCard
