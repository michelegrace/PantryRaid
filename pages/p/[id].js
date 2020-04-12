import { useRouter } from 'next/router';
import Layout from '../../comps/Layout';
import fetch from 'isomorphic-unfetch';

var apiKey = "e4dae24ad2ad4d6cb33e377041aa1e0b";

const Recipe = props => (
  <Layout>
    <div className="row">
      <div className="col">
        <h1>Recipes</h1>
      </div>
      <div className="col-lg-3">
        <div className="recipe-card">
          <img className="img-fluid" src={props.data.image} alt={props.data.title} />
          <h2>{props.data.title}</h2>
          <div className="recipe-card__meta">
            <ul>
              <li>{props.data.readyInMinutes} min</li>
              <li>{props.data.servings} people</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

Recipe.getInitialProps = async function(context){
  const {id} = context.query;

  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`);
  const data = await response.json();

  console.log(data)

  return {data};
}

export default Recipe;