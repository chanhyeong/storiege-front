import React from 'react'
import Draft, {Editor, EditorState, RichUtils} from 'draft-js'
import EditorBar from './bar/editorBar'

import 'styles/common.scss'

const emptyContentState = Draft.convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'first',
      type: 'unstyled',
      entityRanges: [],
    },
  ],
})

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createWithContent(emptyContentState)}
    this.onChange = (editorState) => this.setState({editorState})
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this._onEdit = this._onEdit.bind(this)
  }

  _onEdit(style) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, style)
    )
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='text_editor'>
        <EditorBar 
          onEdit={this._onEdit}
        />
        <div className='write_box'>
          <Editor
            editorKey='editor'
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}

export default TextEditor