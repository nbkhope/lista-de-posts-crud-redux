import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changePostTitle, changePostBody } from '../actions';

class PostNew extends Component {
  onTitleChange = (title) => {
    console.log('Titulo modificado:', title);
    this.props.changePostTitle(title);
  }

  onBodyChange = (body) => {
    console.log('Conteudo modificado:', body);
    this.props.changePostBody(body);
  }

  render() {
    return (
      <View>
        <Text>Tudo legal? Novo post.</Text>
        <Text style={{ fontWeight: 'bold' }}>Título</Text>
        <TextInput
          style={{ height: 40, borderWidth: 4 }}
          onChangeText={this.onTitleChange}
          value={this.props.title}
        />

        <Text style={{ fontWeight: 'bold' }}>Conteúdo</Text>
        <TextInput
          style={{ height: 80, borderWidth: 4 }}
          onChangeText={this.onBodyChange}
          value={this.props.body}
          multiline={true}
        />

        <TouchableOpacity
          style={{ borderWidth: 9, padding: 6, backgroundColor: 'antiquewhite' }}
          onPress={() => null}
        >
          <Text>OK</Text>
        </TouchableOpacity>
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
    changePostBody
  }, dispatch);
};

// const mapDispatchToProps = {
//   changePostTitle
// };

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
