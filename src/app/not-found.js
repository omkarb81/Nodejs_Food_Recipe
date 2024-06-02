import Link from "next/link";


export default function Notfound(){
    return(
        <div className="flex items-center flex-col justify-center">
           <h1>This page is not found</h1>
           <button className="bg-black text-white p-3 border-r-2" ><Link href={'/'} >Go to Home</Link> </button>
           
        </div>
    )
}