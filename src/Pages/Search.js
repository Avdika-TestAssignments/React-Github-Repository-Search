import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { Container } from '../Styled/SearchStyle';
import SearchForm from '../Components/SearchForm';
import Repos from '../Components/Repositories';
import Spinner from '../Components/Spinner';

function Search() {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    searchRepos('');
  }, []);

  const searchRepos = (keyword) => {
    setRepos([]);

    trackPromise(
      axios
        .get(`https://api.github.com/search/repositories?q=${keyword}+in%3Aname&sort=stars&order=desc`)
        .then(result => setRepos(result.data.items))
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
      <Spinner />
      <Repos items={repos} />
    </Container>
  )
}

export default Search;
