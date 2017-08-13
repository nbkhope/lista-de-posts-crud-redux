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
          title={this.props.title}
          body={this.props.body}
          titleError={this.props.titleError}
          bodyError={this.props.bodyError}
          onCancelPress={this.onCancelPress}
          onOkPress={this.onOkPress}
          changePostTitle={this.props.changePostTitle}
          changePostBody={this.props.changePostBody}
          changePostError={this.props.changePostError}
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
