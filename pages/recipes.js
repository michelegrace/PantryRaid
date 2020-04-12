import {useRouter} from 'next/router';
import Layout from '../comps/Layout';

const RecipeIndex = () => {
    const router = useRouter();

    return(
      <Layout>
        <h1>{router.query.title}</h1>
        <div className="row">
          <div className="col">
            <h1>Recipes</h1>
          </div>
          <div className="col-lg-3">
            <div className="recipe-card">
              {/* <img className="img-fluid" src={props.data.image} alt={props.data.title} />
              <h2>{props.data.title}</h2> */}
              <div className="recipe-card__meta">
                <ul>
                  {/* <li>{props.data.readyInMinutes} min</li>
                  <li>{props.data.servings} people</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </Layout>
    )
}

RecipeIndex.getInitialProps = async function(context){

  //Clean up the query a bit so it matches the style needed for the API endpoint
  const queryPath = context.query.q.replace(" ", "+");
  
  const replaceChar = {
    "%2C": ",+",
    "%20": "+"
  }

  const cleanedPath = queryPath.replace(/%2C|%20/gi, function(matched){
    return replaceChar[matched];
  });
  
  console.log(cleanedPath);
  const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${cleanedPath}&apiKey=${process.env.API_KEY}`);
  const data = await response.json();

  return {
      recipes: data
  };
};

export default RecipeIndex;