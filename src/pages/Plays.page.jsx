import React from 'react'
import PlaysFilter from '../components/PlaysFilters/PlayFilter.component';
import Poster from '../components/Poster/Poster.component';

const Plays=()=> {
    return (
        <>
         <div className="container mx-auto px-4">
             <div className="w-full lg:flex lg:flex-row-reverse">
                 <div className="lg:w-3/4">
                 <h2 className="text-2xl font-bold">Plays in Pune</h2>
                 <div className="flex flex-wrap ">
                 <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                 <Poster 
                 src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                 title=" `Kanthamani` (Saadarame) Surabhi Theatre Play"
                 subtitle="Telugu -> ₹400"/>
                 
                 </div>
                 <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                 <Poster 
                 src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                 title=" `Kanthamani` (Saadarame) Surabhi Theatre Play"
                 subtitle="Telugu -> ₹400"/>
                 
                 </div>
                 <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                 <Poster 
                 src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                 title=" `Kanthamani` (Saadarame) Surabhi Theatre Play"
                 subtitle="Telugu -> ₹400"/>
                 
                 </div>
                 <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                 <Poster 
                 src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                 title=" `Kanthamani` (Saadarame) Surabhi Theatre Play"
                 subtitle="Telugu -> ₹400"/>
                 
                 </div>
                 </div>
                 </div>
             
             <div className="w-3/12">
             <h2 className="text-2xl font-bold mb-4">Filters</h2>
             <div>
                <PlaysFilter
                title="Date"
                tags={["Today","Towmorrow","This Weekend"]}/>
                <PlaysFilter
                title="Languages"
                tags={["Tamil","Telugu","Hindi"]}/>
                <PlaysFilter
                title="Date"
                tags={["Today","Towmorrow","This Weekend"]}/>
                <PlaysFilter
                title="Date"
                tags={["Today","Towmorrow","This Weekend"]}/>
             </div>
             </div>
             </div>
         </div>   
        </>
    )
}

export default Plays;
