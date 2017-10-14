import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

class PostForm extends Component {
  onTitleChange = (title) => {
    console.log('Titulo modificado:', title);
    const titleError = this.validateField({ name: 'title', value: title, label: 'título' });

    this.props.changePostTitle(title);
    this.props.changePostError('title', titleError);
  }

  onBodyChange = (body) => {
    console.log('Conteudo modificado:', body);
    const bodyError = this.validateField({ name: 'body', value: body, label: 'conteúdo' });
    this.props.changePostBody(body);
    this.props.changePostError('body', bodyError);
  }

  validateField = (field) => {
    if (field.value === '') { // inválido
      console.log(field.name + ' esta invalido')
      return `O ${field.label} não pode estar em branco`;
    }
    else {
      return null;
    }
  }

  canSubmit = () => {
    return !this.validateField({ name: 'title', value: this.props.title }) && !this.validateField({ name: 'body', value: this.props.body });
  }

  render() {
    const inputStyle = { height: 40, borderWidth: 4 };
    if (this.props.titleError) {
      inputStyle.backgroundColor = 'red';
    }
    const inputBodyStyle = { height: 80, borderWidth: 4 };
    if (this.props.bodyError) {
      inputBodyStyle.backgroundColor = 'red';
    }
    const submitDisabled = !this.canSubmit();
    const okBackgroundColor = submitDisabled ? 'lightgrey' : 'antiquewhite';

    return (
      <View>
        <Text style={{ fontWeight: 'bold' }}>Título</Text>
        <TextInput
          style={inputStyle}
          onChangeText={this.onTitleChange}
          value={this.props.title}
          maxLength={40}
        />
        {this.props.titleError ? <Text style={{ color: 'red' }}>{this.props.titleError}</Text> : null }


        <Text style={{ fontWeight: 'bold' }}>Conteúdo</Text>
        <TextInput
          style={inputBodyStyle}
          onChangeText={this.onBodyChange}
          value={this.props.body}
          multiline={true}
          maxLength={512}
        />
        {this.props.bodyError ? <Text style={{ color: 'red' }}>{this.props.bodyError}</Text> : null}

        <TouchableOpacity
          style={{ borderWidth: 9, padding: 6, backgroundColor: 'gray' }}
          onPress={this.props.onCancelPress}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ borderWidth: 9, padding: 6, backgroundColor: okBackgroundColor }}
          onPress={this.props.onOkPress}
          disabled={submitDisabled}
        >
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PostForm;
