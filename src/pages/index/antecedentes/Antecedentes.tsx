import { Reveal } from "../../../components/reveal/Reveal";
import know1 from "../../../assets/animations/knwoledge/know1.json";
import Lottie from "lottie-react";
export const Antecedentes = () => {
  return (
    <div className="antecedentes">
        <h4>Antecedentes</h4>
      <div className="p1ant">
        <Reveal nameClass="p1ant-anim">
          <Lottie animationData={know1} className="anim" />
        </Reveal>
        <Reveal nameClass="p1ant-p">
          <p>
            La creación y difusión del conocimiento son actividades
            fundamentales en las rutas de desarrollo de las regiones, más en un
            contexto de globalización y de creciente importancia de la ciencia y
            la tecnología para enfrentar problemas sociales, económicos y
            ambientales. Innovación y desarrollo científico se han convertido en
            factores explicativos para entender la diferenciación entre las
            rutas de desarrollo regional, la formación de polos de innovación,
            la concentración de clases creativas en distintos lugares, y en
            última instancia, para explicar la diferenciación en las rutas de
            desarrollo que siguen los países.
          </p>
        </Reveal>
      </div>
    </div>
  );
};
