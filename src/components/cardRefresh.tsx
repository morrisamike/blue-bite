
import PageComponent from '../models/pageComponent';
import css from './cardRefresh.module.css'
import CardImage from './cardImage';
import CardWeather from './cardweather';

const Card:React.FC<{component?:PageComponent}> = (props) => {
  
    return (
      <div className={css.card} > 
        {
          props.component?.type ==="image"?<CardImage component={props.component} />:<CardWeather component={props.component}/>
        }
        
     </div>
    );
  }
  
  export default Card;