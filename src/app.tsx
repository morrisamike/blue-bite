import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import Page from './components/page';
import PageInfo from './models/pageInfo';

const App = () => {
    const { id } = useParams<{ id: string }>();
    const pageUrl = 'http://localhost:3030/page/'+ id;
    const [pageData,setPageData] = useState<PageInfo|undefined>(undefined);

    useEffect(()=>{
        getData();
    },[])

    async function getData() {
        //currently calls twice, needs fetch 
        await axios.get(pageUrl)
        .then(res=>{
            updateData(res.data.data)
        })
        .catch((error)=>{
            console.error('failed to get data!',error);
        });
    }

    const updateData=(updatedData:any)=>{
        setPageData(updatedData);
    }

    return (
        <div>
            <Page pageinfo={pageData} />
        </div>
    );
};

export default App;