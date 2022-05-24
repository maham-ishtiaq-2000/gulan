import * as React from 'react';
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
import RoomIcon from '@material-ui/icons/Room';

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

const AllUsersCard = (props) => {
  let item = props.item
  const [expanded, setExpanded] = React.useState(false);
  let name = item.first_name+" "+item.last_name
  let firstLetter = item.first_name[0].toUpperCase()
  let post;
  console.log(item.user_post)
  if(item.user_post){
    post = "User Post"
  }
  else{
    post = "Tailor's post"
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{marginTop : '1%' , marginBottom : '3%'}}>
    <Card sx={{ maxWidth: 445 }} style={{marginLeft : '2%' , marginRight : '2%' , marginTop : '2%' , marginBottom : '2%' }} style={{width : '80%'}}>
      <CardHeader style={{fontWeight : '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {firstLetter}
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
          {post}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
   
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> 
      
        
        
      </CardActions>
     
    </Card>
    </div>
  );
}

export default AllUsersCard;
