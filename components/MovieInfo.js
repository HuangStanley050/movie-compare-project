import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useMovie } from "./context/MovieStore";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const MovieInfo = ({ Info }) => {
  const classes = useStyles();

  return Info ? (
    <Card className={classes.root} style={{ marginTop: "2rem" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Info.image}
          title="movie_impage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Info.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Info.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : null;
};

export default MovieInfo;
