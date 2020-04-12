import Layout from '../comps/Layout';
import Search from '../comps/Search.js';
import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';


const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
          <a>{props.id}</a>
        </Link>
    </li>
)

const Index = props => (
    <Layout>

      <Search />
    </Layout>
  );

export default Index;