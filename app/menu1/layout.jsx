
export const metadata ={
    title : "Artical page"
}
export default function FeaturedArticalPage({children}) {

    return (
        <>
            <h1>  Artical </h1>
         <div className="w-[100%] h-20 bg-slate-600 text-white">
         {children}
         </div>
            
        </>
    );
}