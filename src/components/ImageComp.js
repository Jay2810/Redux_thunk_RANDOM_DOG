import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import CircularIndeterminate from "./LoadingAnim";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { fetchDog } from "../thunk";
class MediaCard extends Component {
  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <ButtonGroup disableElevation variant="contained">
            <Button
              color="success"
              onClick={() => this.props.dispatch({ type: "RESIZE_IMAGEP" })}
            >
              +10
            </Button>
            <Button
              color="warning"
              onClick={() => this.props.dispatch({ type: "RESIZE_IMAGEM" })}
            >
              -10
            </Button>
          </ButtonGroup>
        </div>
        <Card
          sx={{
            width: this.props.size,
            height: this.props.size + 200,
            margin: "0 auto",
          }}
        >
          {this.props.loading ? (
            <div>
              <CircularIndeterminate />
            </div>
          ) : (
            <CardMedia
              component="img"
              width={this.props.size}
              height={this.props.size}
              image={this.props.url}
              alt="dogo"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Size:{this.props.size}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>Dog</h4>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ margin: "0 auto" }}
              size="large"
              variant="contained"
              color="primary"
              onClick={() => {
                console.log("CLICKED SHOW DOG: this.props", this.props);
                this.props.dispatch(fetchDog());
              }}
            >
              Change Image
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const ConnectedImageComp = connect((state) => {
  console.log("CONNECT IMG | INIT STATE", state);
  return state;
})(MediaCard);

export default ConnectedImageComp;
