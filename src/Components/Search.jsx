import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { Container } from '../Styled/SearchStyle';
import SearchForm from './SearchForm';
import Repos from './Repositories';
import Spinner from './Spinner';
import NotFound from './NotFound';

function Search() {
  const [repos, setRepos] = React.useState([]);
  const [emptySearch, setEmptySearch] = React.useState(false);

  const handleResult = result => {
    setRepos(result);
    setEmptySearch(result.length === 0);
  };

  const searchRepos = (keyword) => {
    setRepos([]);

    trackPromise(
      axios
        .get(`https://api.github.com/search/repositories?q=${keyword}+in%3Aname&sort=stars&order=desc`)
        .then(result => handleResult(result.data.items))
        .catch((error) => {
          console.log('we have received an error: ', error);
        }));
  };

  return (
    <Container>
      <SearchForm
        placeholder="Enter Repository Name"
        buttonText="Search"
        onSubmit={value => searchRepos(value)}
      />
      { emptySearch && (<NotFound />) }
      <Spinner />
      <Repos items={repos} />
    </Container>
  )
}

export default Search;
