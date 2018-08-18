import React from 'react'

const FONT_SIZE_LIST = [

]

const FORMAT_LIST = [
  { label: 'B', style: 'BOLD', title: '굵게'},
  { label: 'I', style: 'ITALIC', title: '기울임' },
  { label: 'U', style: 'UNDERLINE', title: '강조선' },
  { label: 'T', style: 'STRIKETHROUGH', title: '취소선' },
]

const KEYBINDED_STYLE = [
  { keyCode: 'ctrl+shift+u', style: 'unordered-list-item' },
  { keyCode: 'ctrl+b', style: 'BOLD' }
]

export { FONT_SIZE_LIST, FORMAT_LIST, KEYBINDED_STYLE }