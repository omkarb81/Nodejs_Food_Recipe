import Recipeslist from "@/components/ui/recipe-list";

async function FetchListRecipt(){
    try {
        const apiRecipe = await fetch('https://dummyjson.com/recipes');
        const data = await apiRecipe.json(); 
        return data?.recipes;
    } catch(e) {
        throw new Error(e.message); 
    }
}

export default async function Recipelist() {
    const recipelist = await FetchListRecipt();
    return <Recipeslist recipelist={recipelist} />;
}
