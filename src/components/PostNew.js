import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import PostForm from './PostForm';
import { changePostTitle, changePostBody, changePostError, createPost, resetPostForm } from '../actions';

class PostNew extends Component {
  componentWillUnmount() {
    this.props.resetPostForm();
  }

  onTitleChange = (title) => {
    console.log('Titulo modificado:', title);
    this.validateField({ name: 'title', value: title, label: 'título' });

    this.props.changePostTitle(title);
  }

  onBodyChange = (body) => {
    console.log('Conteudo modificado:', body);
    this.validateField({ name: 'body', value: body, label: 'conteúdo' });
    this.props.changePostBody(body);
  }

  validateField = (field) => {
    if (field.value === '') { // inválido
      console.log(field.name + ' esta invalido')
      this.props.changePostError(field.name, `O ${field.label} não pode estar em branco`);
    }
    else {
      this.props.changePostError(field.name, null);
    }
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
    resetPostForm,
  }, dispatch);
};

// const mapDispatchToProps = {
//   changePostTitle
// };

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
