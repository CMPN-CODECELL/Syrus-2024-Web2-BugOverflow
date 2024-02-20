import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import vector from "../../assets/otherImages/undraw_about_me_re_82bv.svg";

const About = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "secondary.main",
            // fontFamily: "Segoe UI Emoji",
            fontSize: "30px",
            mt: 4,
          }}
          textAlign={"center"}
        >
          About Us
        </Typography>
        <Grid>
          <Grid item textAlign={"center"} sx={{ mb: 7, mt: 1 }}>
            <img
              src={vector}
              alt="/"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
              }}
            />
          </Grid>
          <Grid item>
            <Typography fontFamily={"sans-serif"}>
              ipsum dolor sit amet, consectetur adipiscing elit. Proin quis dui
              hendrerit, tempus enim vitae, faucibus diam. Duis sit amet
              sagittis lorem. Curabitur feugiat risus urna. Curabitur sit amet
              odio euismod, aliquam tellus a, pulvinar odio. Nam accumsan magna
              a tortor iaculis dapibus. Curabitur maximus urna a lorem finibus,
              a aliquam tellus porttitor. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Duis eu
              metus consectetur tellus tristique sagittis. Donec eget rutrum
              sapien. Nulla aliquet facilisis mi, non scelerisque quam molestie
              et. Nunc eu tortor et diam posuere aliquam eget sed est. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Ut ultricies
              dui id metus sodales, sit amet lobortis eros ullamcorper. Nulla
              mattis ipsum et dui suscipit dapibus vulputate a nulla. Aliquam
              sit amet neque elementum, efficitur orci ac, ultricies turpis.
              Aenean mauris libero, laoreet ac dolor at, laoreet fringilla
              lorem. Donec sem risus, pulvinar et justo ut, vulputate facilisis
              sapien. Nulla placerat urna enim, sed consectetur massa sagittis
              sagittis. Nullam interdum diam mauris, quis varius diam convallis
              sed. Proin urna justo, scelerisque eu nisi vel, tincidunt commodo
              elit. Fusce nec aliquam purus. Aliquam aliquet venenatis nisi at
              scelerisque. Praesent tincidunt pulvinar nisl ut aliquam. Integer
              vitae viverra lorem, vel hendrerit felis. Proin tellus augue,
              eleifend et sem gravida, dignissim condimentum lacus. Curabitur a
              congue nulla. Duis nec tortor elementum, blandit elit ac,
              tristique velit. Integer rutrum odio id nisl laoreet, vitae
              egestas tortor dictum. Curabitur tristique nunc at sapien
              convallis, et pellentesque justo efficitur. Nunc mauris metus,
              euismod nec justo vitae, laoreet tincidunt tellus. Nam auctor orci
              at dui ornare pharetra. Cras velit diam, semper sed est nec,
              aliquam semper lacus. Praesent id turpis at dolor ullamcorper
              hendrerit quis ac metus. Etiam interdum posuere neque, in luctus
              arcu mollis eget. Pellentesque venenatis non ligula non efficitur.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vivamus tempus nisi vel purus
              ornare, nec ornare lectus egestas. Praesent quis dictum augue.
              Quisque malesuada faucibus tellus et auctor. Duis ut libero ut
              lacus rhoncus placerat. Etiam viverra feugiat venenatis.
              Vestibulum fringilla nibh sed nibh dapibus hendrerit. Donec congue
              ac erat vitae feugiat. Integer congue a risus vel suscipit.
              Praesent elementum, enim eu molestie euismod, sem ex ultricies
              purus, vitae aliquet risus urna quis erat. Fusce elementum dolor a
              lacinia pharetra. Donec lorem lacus, tempus nec urna in, congue
              lobortis enim. Etiam ut viverra quam. Etiam efficitur ex sed
              imperdiet egestas. Nam congue lacinia justo eget imperdiet. Aenean
              iaculis dui bibendum libero vulputate, sed sollicitudin felis
              faucibus. In eu ultrices enim, id sollicitudin augue. Cras dictum
              placerat venenatis. Nullam facilisis quis mauris sed sodales.
              Nulla neque arcu, pharetra a cursus vel, pharetra ac velit.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
