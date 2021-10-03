import React from 'react';
import './Profile.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import Snackbar from '@mui/material/Snackbar';

class Profile extends React.Component {
    render() {
        const profile = this.props.val;
        let state = false;
        let url = '';
        let val = this.props.hit;
        let dateCreated = '';
        if(profile.name) {
            state = true;
            url = "https://github.com/" + profile.login;
            dateCreated = new Date(profile.created_at).toDateString();
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
                        else {
                            let vertical = 'bottom';
                            let horizontal = 'right';
                            if(!isNaN(val))
                            {
                                return (
                                    <Snackbar open={true} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                                        <Alert severity="error">
                                            User not found!!
                                        </Alert>
                                    </Snackbar>
                                );
                            }
                        }
                    })()
                }
            </div>
        );
    }
}

export default Profile;
