import React, {PropsWithChildren, useContext, useEffect, useState} from 'react';
import {Thread} from '../types/threads';
// import { generateThreads } from '@/helper-functions/fakerData';
import { useQuery } from '@apollo/react-hooks';
import Data from "../helper-functions/graphql/queries/getThreads";

export const ThreadsContext = React.createContext<Thread[]>([])

export const ThreadProvider = ({children}: PropsWithChildren): JSX.Element => {

    const [threads, setThreads] = useState<Thread[]>([])

    const { loading, error, data } = useQuery(Data, {
        onCompleted: () => {setThreads(data.getThreads)},
        // onError: () => alert('Error encountered!')
    });
    
    
    // useEffect(() => {
    //     // setThreads(generateThreads());
       

      
   
    // }, [Data])



    return  <ThreadsContext.Provider value={threads}>
        {children}
    </ThreadsContext.Provider>
}