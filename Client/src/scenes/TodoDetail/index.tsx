import React from 'react';
import { Props, connector } from './types';
import { withRouter } from 'react-router-dom';

function TodoDetail(props: Props) {
  return (
    <div>
      Todo Detail
    </div>
  )
}

export default withRouter(connector(TodoDetail));