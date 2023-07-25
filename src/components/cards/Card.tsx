
import { useEffect} from "react";
import { useGetDocumentsQuery } from "../../api/api.slice";
import udeg from '../../assets/logo/udeg.png'
import { Spiner } from "../spiner/Spiner";

type getDataFunctionType = (length: number) => void;

interface param  {
  children : React.ReactNode
  getLength : getDataFunctionType
}

export const Card = ({children,getLength} : param) => {
  const { data, isError, isLoading,error } = useGetDocumentsQuery(children);
  useEffect(() => {
    if (data) {
      getLength(data.length);
    }
  }, [data, getLength]);

  if (isLoading) return <Spiner showSpiner/>;
  if (isError) return <div>{`Error ${console.log(error)}`}</div>;

  if (!data) {
    return null; // O cualquier otro renderizado condicional mientras esperas la respuesta
  }

  
  return (
    <>
      <div className="card-container">
      {data.map((dc : any) => {
        return (
          <div className="card activator z-depth-2" key={dc.titulo}>
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={udeg} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-1 flow-text">
                {dc.titulo}
              </span>
              <span className="activator"><b>{dc["autor principal"]}</b></span>
              <span className="activator">{dc.tema}</span>
              <span className="activator">{dc["pais de la publicación"]}</span>
              <span className="activator"><strong><i>{dc.year}</i></strong></span>
              <a href={dc["link "]} target="blank"> 
                <p>Ver documento</p>
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title">
                <i className="material-icons right">close</i>
              </span>
              <p><b>Revista o libro : </b>{dc["nombre de la revista o libro"]}</p>
              <p><b>Tipo de documento: </b>{dc["tipo de documento"]}</p>
              <p><b>Editorial : </b>{dc["libros-editorial"]}</p>
              <p><b>Páginas : </b>{dc.paginas}</p>
              <p><b>Disponibilidad : </b>{dc.disponibilidad}</p>
              <p><b>Coautores : </b>{`${dc.coautor.map((el : any,index : number) => index === dc.coautor.length -1 ? el + "." : el)}`}</p>
              <p><b>Compilador,Editor,Coordinador,libro : </b>{dc["compilador-editor-coordinador-libro"]}</p>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};
