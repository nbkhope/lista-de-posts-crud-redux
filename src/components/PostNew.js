import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import PostForm from './PostForm';
import { changePostTitle, changePostBody, changePostError, createPost } from '../actions';

class PostNew extends Component {
  onTitleChange = (title) => {
    console.log('Titulo modificado:', title);
    if (title === '') { // inválido
      console.log('Title esta invalido')
      this.props.changePostError('title', 'O título não pode estar em branco');
    }
    else {
      this.props.changePostError('title', null);
    }

    this.props.changePostTitle(title);
  }

  onBodyChange = (body) => {
    console.log('Conteudo modificado:', body);
    if (body === '') {
      console.log('Conteudo esta invalido')
      this.props.changePostError('body', 'O conteúdo não pode estar em branco')
    }
    else {
      this.props.changePostError('body', null);
    }
    this.props.changePostBody(body);
  }

  onCancelPress = () => {
    Actions.pop();
  }

  onOkPress = () => {
    const { title, body } = this.props;
    this.props.createPost({ title, body });
    Actions.list({ type: 'reset' });
  }

  render() {
    return (
      <View>
        <Text>Tudo legal? Novo post.</Text>
        <PostForm
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          title={this.props.title}
          body={this.props.body}
          titleError={this.props.titleError}
          bodyError={this.props.bodyError}
          onCancelPress={this.onCancelPress}
          onOkPress={this.onOkPress}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, body, titleError, bodyError } = state.postForm;
  return { title, body, titleError, bodyError };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changePostTitle,
    changePostBody,
    changePostError,
    createPost,
  }, dispatch);
};

// const mapDispatchToProps = {
//   changePostTitle
// };

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
