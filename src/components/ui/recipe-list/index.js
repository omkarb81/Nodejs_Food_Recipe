import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/ui/card";
import Link from "next/link";

export default function Recipeslist({ recipelist }) {
  console.log(recipelist);
  return (
    <div className="p-4 mx-9 lg:max-w-full gap-8 md:max-w-4xl sm:max-w-full">
      <div className="flex justify-between mx-2">
        <h1 className="lg:text-5xl font-bold my-10 sm:text-2xl ">Recipes</h1>
        <Link href={`/`}>
          <p className="lg:text-3xl font-bold my-12 sm:text-xl ">Home</p>{" "}
        </Link>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipelist && recipelist.length > 0
          ? recipelist.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`}>
                <Card>
                  <CardContent className="bg-white rounded-md cursor-pointer shadow-md overflow-hidden hover:scale-[1.1] transition-all">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80 mt-5">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipe.name}
                      </h3>
                    </div>
                    <div className="mt-6 flex items-center flex-wrap gap-2">
                      <p className="font-bold text-gray-600">
                        Rating: {recipe.rating}
                      </p>
                      <div className="ml-auto">
                        <p className="font-bold text-gray-600">
                          {recipe.cuisine}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
