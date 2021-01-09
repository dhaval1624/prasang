import React,{useState,useEffect} from 'react';

import { useQuery } from '@apollo/client';
import { useDispatch,useSelector } from 'react-redux'
import { store } from '../store/storeTypes';
import PhotoSlice from '../store/slices/PhotoSlice';
import { Fetch_My_Photos } from '../utils/GqlQueries';
import MyAllPhotos from '../components/profile/MyAllPhotos';

const MyPhotos = (props:any) => {
    const dispatch = useDispatch();
    const { data, refetch,loading } = useQuery(Fetch_My_Photos);
    const photoActions = PhotoSlice.actions;
    const photoData = useSelector((state:store)=>state.photo.photoList);
    useEffect(()=> {
        try {
            refetch()
            dispatch(
                photoActions.photo({
                    Photo:data.myPhotos
                })
            )        
        } catch (error) {

        }
    },[data])
    let loader : any = "";
    if(!loading && photoData)
    {
        console.log(photoData);
        loader = <MyAllPhotos photo = {photoData}/>;
    }
    return <> 
    {loader}
    </>
}

export default MyPhotos;