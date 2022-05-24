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

const AllTailorsCard = (props) => {
  let item = props.item
  const [expanded, setExpanded] = React.useState(false);
  let name = item.first_name+" "+item.last_name
  let firstName = name[0]
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let experience = "Experience : "+item.experience
  let rate = "Average_Per_Stitch : "+item.average_rate_per_stitching

  return (
    <div style={{marginTop : '1%' , marginBottom : '3%'}}>
    <Card sx={{ maxWidth: 445 }} style={{ marginRight : '2%' , marginTop : '2%' , marginBottom : '2%' }} style={{width : '80%'}}>
      <CardHeader style={{fontWeight : '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {firstName}
          </Avatar>
        }
       
        title={name}

        
      />
     
    
      <CardContent>
         
        <Typography variant="body2" color="text.secondary">
          {experience}
          <br></br>
          <br></br>
          {rate}
        </Typography>
      </CardContent>
    
     
    </Card>
    </div>
  );
}

export default AllTailorsCard;
