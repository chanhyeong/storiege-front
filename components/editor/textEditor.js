import React from 'react'
import Draft, {Editor, EditorState, RichUtils} from 'draft-js'
import EditorBar from './bar/editorBar'

import 'styles/editor/common.scss'

const emptyContentState = Draft.convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'foo',
      type: 'unstyled',
      entityRanges: [],
    },
  ],
})

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createWithContent(emptyContentState)};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className='text_editor'>
        <EditorBar />
        <Editor
          editorKey='editor'
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default TextEditor