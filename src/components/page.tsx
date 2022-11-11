import React, { useEffect, useState } from 'react';
import PageComponent from '../models/pageComponent';
import PageInfo from '../models/pageInfo';
import Card from './cardRefresh';


 const Page:React.FC<{pageinfo?:PageInfo}> = (props) => {
 const [cardList,setCardList] = useState <PageComponent[]>([]);

  //generate Cards based on the list component ID's 
  const generateCards = ()=>{
    props.pageinfo?.lists.forEach(
      (list)=>{
        list.components.forEach(
          (compID)=>{
            props.pageinfo?.components.forEach(
              (c)=>{
                //didnt like ternary if for some reason ???
                if(c.id===compID){
                  updateCards(cardList.push(c));
                }
              }
            )
          }
        )
      }
    )
  }

  useEffect(()=>{
    generateCards();
   },[props.pageinfo])

  const updateCards=(updatedData:any)=>{
    let tempArray =[...cardList];
    tempArray.push(updatedData);
    setCardList(tempArray);
  }

    return (
      <div className='page '>
        {cardList.map(
          (c)=>(
            <Card component={c} key={Math.random()}/>
          )
        )}
     </div>
    ); 
  }



export default Page;