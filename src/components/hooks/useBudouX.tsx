import React from 'react';
import { loadDefaultJapaneseParser } from 'budoux'

const parser = loadDefaultJapaneseParser()

const useBudouX = () => {
  const parse = (text: string) => {
    return parser.parse(text).map((s, index) => (<span key={index} style={{ display: 'inline-block' }}>{s}</span>))
  }
  
  return {
    parse
  }
}

export default useBudouX;
  
