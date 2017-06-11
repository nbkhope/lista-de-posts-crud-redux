import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import PostForm from './PostForm';
import { changePostTitle, changePostBody, createPost } from '../actions';

class PostNew extends Component {
  onTitleChange = (title) => {
    console.log('Titulo modificado:', title);
    this.props.changePostTitle(title);
  }

  onBodyChange = (body) => {
    console.log('Conteudo modificado:', body);
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
          onCancelPress={this.onCancelPress}
          onOkPress={this.onOkPress}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, body } = state.postForm;
  return { title, body };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changePostTitle,
    changePostBody,
    createPost,
  }, dispatch);
};

// const mapDispatchToProps = {
//   changePostTitle
// };

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
