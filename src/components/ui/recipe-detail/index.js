import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <Link href="/recipe-list">
        <h1 className="lg:text-3xl font-bold my-12 ml-8 sm:text-xl cursor-pointer">
          Recipe List
        </h1>
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl flex mx-auto justify-center items-center">
        <div className="grid items-start gap-10 grid-cols-1 lg:grid-cols-2">
          <div className="w-full lg:sticky sm:flex top-0 gap-2">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name || "Recipe Image"}
              className="w-4/5 object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <p className="text-2xl font-semibold text-gray-700">
                {getRecipeDetails?.mealType}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-2xl font-semibold text-gray-700">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-700">
                Ingredients
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
