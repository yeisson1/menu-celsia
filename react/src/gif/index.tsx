import { Fragment } from 'react';
import Style from './gif.css';

interface IGif {
    imageGif: string;
    background: string;
    showComponent:boolean;
 }


const Gif = ({imageGif, background, showComponent}: IGif) => { 

    if (!showComponent) { return <Fragment/>}
    
    return (
        <div className={Style.containerImgGif} style={{backgroundColor:background}}>
            <img src={imageGif}></img>
        </div>
      
    )
}

Gif.defaultProps= {
    imageGif: "", 
    background:"#FFFFFF", 
    showComponent: true
}

Gif.schema = {
    title: 'Gif Header',
    type: 'object',
    properties: {  
        imageGif: {
            title: 'Imagen GIF',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader'
            }
        },
        background: {
            title: 'Color Fondo',
            type: 'string',
            widget: {
                'ui:widget': 'color'
            }
        },
        showComponent:{
            title: 'Mostrar/Ocultar componente',
            type: 'boolean',
            default:true
        }    
    }  
}
  

export default Gif;