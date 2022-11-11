
import PageComponent from "../models/pageComponent";
import css from './cardImage.module.css'

const CardImage:React.FC<{component?:PageComponent}> = (props) => {

    return(
        <div className={css.card_image}>
            <img src={props.component?.options.src} alt={props.component?.options.alt}  />
        </div>
    );

}

export default CardImage;
