import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Client, Databases, Query } from "appwrite";


function Blogread() {
let [respText, setRespText]=useState('');
const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)

const databases = new Databases(client);

let promise = databases.listDocuments(
    process.env.REACT_APP_APPWRITE_DATABASE_ID,
    process.env.REACT_APP_APPWRITE_COLLECTION_ID,
    [
        Query.equal("title", ["demo blog"])
    ]
);

promise.then(function (response) {
    console.log(response.documents[0]);
    setRespText(response.documents[0].blogbody);
    console.log('resp',respText );
}, function (error) {
    console.log(error);
});
 
 
  return (
    <div style={{color:'white', textAlign:'justify'}}>
        { parse(respText) }
    </div>
  )
}

export default Blogread