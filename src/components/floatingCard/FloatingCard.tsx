import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export const FloatingCard = ({ handleOpenFloatingCard, dataC,countryName } : any) => {
  const groupedData = dataC.reduce((result : any, el : any) => {
    const territorioAnalizado = el["territorio analizado"];
    if (!result[territorioAnalizado]) {
      result[territorioAnalizado] = [];
    }
    result[territorioAnalizado].push(el);
    return result;
  }, {});
  
  return (
    <div className="cardcontainer">
      <div className="cardf">
        <div className="close">
          <h3>{countryName}</h3>
          <IconButton
            color="primary"
            aria-label="close floating card"
            onClick={handleOpenFloatingCard}
          >
            <HighlightOffIcon />
          </IconButton>
        </div>
        <div className="card-content">
          <div className="title">
          
          </div>
          {Object.keys(groupedData).map((territorio) => (
        <Accordion key={territorio} sx={{backgroundColor : "#eceff1"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{territorio}</Typography>
          </AccordionSummary>
          {groupedData[territorio].map((el : any) => (
            <AccordionDetails key={el.titulo}>
              <Accordion sx={{backgroundColor : "#cfd8dc"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {`Área : ${el.area}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Accordion sx={{backgroundColor : "#b0bec5"}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                      {`Disciplina : ${el.disciplina}`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Accordion sx={{backgroundColor : "#90a4ae"}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                      {`Tema : ${el.tema}`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Accordion sx={{backgroundColor : "#78909c"}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                      {`Título : ${el.titulo}`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <a href={el["link "]} target="_blank" rel="noopener noreferrer">Ver Documento</a>
                      </Typography>
                    </AccordionSummary>
                  </Accordion>
                    </AccordionDetails>
                  </Accordion>
                    </AccordionDetails>
                  </Accordion>
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
        </div>
      </div>
    </div>
  );
};
