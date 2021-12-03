import * as React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function Cards(props) {
  const {
    image,
    name,
    released,
    genres,
    platformes,
    id,
    setID,
    setAff,
    aff,
    rating,
  } = props;
  let strGenres = ''; // permettra de stocker les noms des genres
  if (genres) {
    genres.forEach((genre) => {
      if (genre.name) {
        strGenres += `${genre.name}, `;
      }
      return strGenres;
    }); // Stock dans la variable "strGenres" les genres
  }
  strGenres = strGenres.substring(0, strGenres.length - 2);
  let setPlatformes = ''; // permettra de stocker les noms des platefromes
  // si le jeux contient des platformes on fait
  if (platformes) {
    platformes.forEach((platforme) => {
      if (platforme.platform.name) {
        setPlatformes += `${platforme.platform.name}, `;
      }
      return setPlatformes;
    });
  }
  setPlatformes = setPlatformes.substring(0, setPlatformes.length - 2);
  return (
    <Card
      className="card"
      onClick={() => {
        setAff(!aff);
        setID(id);
      }}
    >
      {/* framework mui */}
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
            {/* affiche le nom du jeux transmis */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Rating
              name="read-only"
              value={parseFloat(rating, 10)}
              readOnly
              precision={0.1}
              size="small"
            />
            <br />
            Plateformes: {setPlatformes}
            <br />
            Date: {released}
            <br />
            Genres: {strGenres}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  genres: PropTypes.node.isRequired,
  platformes: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  setID: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
  aff: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
};
