import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));



const MyPostCard = (props) =>{
    const item = props.item;
    console.log(item)
    let name = item.first_name+" "+item.last_name
    const [expanded, setExpanded] = React.useState(false);
    let firstName = name[0].toUpperCase()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <div style={{marginTop : '1%' , marginBottom : '3%'}}>
                <Card sx={{ maxWidth: 445 }} style={{marginLeft : '40%' , marginRight : '2%' , marginTop : '2%' , marginBottom : '2%' }}>
                <CardHeader style={{fontWeight : '20px'}}
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {firstName}
                        </Avatar>
                        }
                    
                        title={name}
                        subheader={item.date}
                    />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.images[0]}
                    alt="Dress"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" >
                        {item.description}
                    </Typography>
                     <br></br>
                     
                    <Typography variant="body2" color="text.secondary">
                      
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                   
                    
                    
                  </CardActions>
                 
                </Card>
                </div>
    )
}

export default MyPostCard;