import React from 'react';

import Repo from './Repository';
import { Container } from '../Styled/RepositoriesStyle';

function Repositories (props) {
    return (
      <Container>
        {props.items.map(item => (
          <Repo
            key={item.id}
            link={item.html_url}
            title={item.name}
            description={item.description}
            image={item.owner.avatar_url}
          />
        ))}
      </Container>
    )
}

export default Repositories;
