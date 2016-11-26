import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import List from './components/List';
import PostDetail from './components/PostDetail';
import PostNew from './components/PostNew';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="list"
        component={List}
        title="Lista de Posts"
        rightTitle="Novo"
        onRight={() => Actions.postNew()}
        initial
      />
      <Scene key="postDetail" component={PostDetail} title="Ver Post" />
      <Scene
        key="postNew"
        component={PostNew}
        title="Novo Post"
      />
    </Router>
  );
};

export default RouterComponent;
