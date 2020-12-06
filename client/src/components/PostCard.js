import { MongooseDocument } from 'mongoose';
import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';

function PostCard({ post: {body, createdAt, id, username, likeCount, commentCount, likes} }) {
    
    function likePost() {
        console.log('like Post');
    }

    function commentOnPost() {
        console.log('comment On Post');

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
                    <Button as="div" labelPosition="right" onClick={likePost}>
                        <Button color="teal" basic>
                            <Icon name="heart" />
                        </Button>
                        <Label basic color="teal" pointing="left">
                            {likeCount}
                        </Label>
                    </Button>

                    <Button as="div" labelPosition="right" onClick={commentOnPost}>
                        <Button color="blue" basic>
                            <Icon name="comments" />
                        </Button>
                        <Label basic color="blue" pointing="left">
                            {commentCount}
                        </Label>
                    </Button>
                </Card.Content>
            </Card>
        </div>
    )
}

export default PostCard
