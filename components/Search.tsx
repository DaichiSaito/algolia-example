import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

export default function Search(): JSX.Element {
  const searchClient = algoliasearch(process.env.NEXT_PUBLIC_APPLICATION_ID!, process.env.NEXT_PUBLIC_API_KEY!);
  const indexName = 'test_index';
  return (
    <div>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
}