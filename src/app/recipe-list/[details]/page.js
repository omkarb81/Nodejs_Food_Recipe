import RecipeDetailsItem from "@/components/ui/recipe-detail";

async function FetchRecipeDetail(currentRecipeId) {
    try {
        const apiRecipe = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiRecipe.json(); 
        return data;
    } catch (e) {
        throw new Error(e.message); 
    }
}

export default async function RecipeDetails({ params }) {
    if (!params?.details) {
        return <div>Error: No recipe ID provided.</div>;
    }

    try {
        const getRecipeDetails = await FetchRecipeDetail(params.details);
        return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
    } catch (e) {
        return <div>Error: {e.message}</div>;
    }
}
