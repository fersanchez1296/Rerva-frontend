import { Reveal } from "../../../components/reveal/Reveal";
import slideleft from "../../../assets/animations/knwoledge/slide-left.json";
import Lottie from "lottie-react";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  text : string;
  anim : object
}

export const ObjetivoP2 = ({text, anim} : Props) => {
  return (
    <Grid container spacing={2} className="slider-container">
      <Grid xs={12} md={5}>
        <Reveal nameClass="slider-text">
          <p>
            {text}
          </p>
        </Reveal>
      </Grid>
      <Grid xs={12}  md={5}>
        <Reveal nameClass="slider-anim">
          <Lottie animationData={anim} />
        </Reveal>
      </Grid>
      <Grid xs={12}  md={6}>
        <Reveal>
          <Lottie animationData={slideleft} style={{width : "50px"}}/>
        </Reveal>
      </Grid>
    </Grid>
  );
};
