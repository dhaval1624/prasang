import React,{useState,useEffect} from 'react';

import { useQuery } from '@apollo/client';
import { useDispatch,useSelector } from 'react-redux'
import { store } from '../store/storeTypes';
import CategorySlice from '../store/slices/CategorySlice';

import { FetchCategory } from '../utils/GqlQueries';
import EventCategory from '../components/Category/EventCategory';

const Category = (props:any) => {
    const dispatch = useDispatch();
    const { data, refetch,loading } = useQuery(FetchCategory);
    const catActions = CategorySlice.actions;
    const catData = useSelector((state:store)=>state.category.catList);
    const [categoryError, setcategoryError] = useState("");
    useEffect(()=> {
        try {
            refetch()
            dispatch(
                catActions.category({
                  category:data.eventCategories  
                })
            )        
        } catch (error) {
            setcategoryError(error.message)
        }
    },[data])
    let loader : any = "";
    if(!loading && catData)
    {
        loader = <EventCategory category = {catData}/>;
    }
    return <> 
    {loader}
    </>
}

export default Category;