import React from 'react';
import './Profile.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';



class Profile extends React.Component {
    render() {
        const profile = this.props.val;
        let state = false;
        let url = '';
        const dateCreated = new Date(profile.created_at).toDateString();
        if(profile.name) {
            state = true;
            url = "https://github.com/" + profile.login;
        }
        return(
            <div className="Card">
                { ( () => {
                        if(state) 
                        {
                            return (
                                <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {profile.name[0]}
                                    </Avatar>
                                    }
                                    title={profile.name}
                                    subheader={dateCreated}
                                />
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={profile.avatar_url}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                    {profile.bio}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton onClick={()=> window.open(url)} aria-label="add to favorites">
                                    <GitHubIcon />
                                    </IconButton>
                                </CardActions>
                                </Card>
                            );
                        }
                    })()
                }
            </div>
        );
    }
}

export default Profile;
