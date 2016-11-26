import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class PostNew extends Component {
  render() {
    return (
      <View>
        <Text>Tudo legal? Novo post.</Text>
        <Text>{this.props.title}</Text>
        <Text>{this.props.body}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, body } = state.postForm;
  return { title, body };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
