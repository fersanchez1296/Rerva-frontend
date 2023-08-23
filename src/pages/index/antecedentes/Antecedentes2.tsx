import { Reveal } from "../../../components/reveal/Reveal";
import know2 from "../../../assets/animations/knwoledge/know2.json";
import Lottie from "lottie-react";
export const Antecedentes2   = () => {
  return (
    <div className="antecedentes ant-v2">
      <div className="title">
        <h4>Antecedentes</h4>
      </div>
      <div className="text">
        <Reveal nameClass="p1ant-p">
          <p>
            En el centro de la discusión sobre lo que se sabe de una región y lo
            que se genera de conocimientos en cada región, está el tema del
            vínculo existente entre ciencia y desarrollo, lo cual plantea
            interrogantes sobre el vínculo existente y sobre las formas
            convencionales de generar investigación y desarrollo.
          </p>
        </Reveal>
      </div>
      <div className="anim">
        <Reveal nameClass="p1ant-anim">
          <Lottie animationData={know2} className="anim" />
        </Reveal>
      </div>
      <div className="anim2">algo</div>
      <div className="anim3">algo</div>
    </div>
  );
};
