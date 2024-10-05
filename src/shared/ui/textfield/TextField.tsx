import React, { useState } from 'react';
import * as S from '@/shared/ui/textfield/TextField.style';
import { TextFieldProps, TextFieldSize } from '@/shared/ui/textfield/Textfield.types';

const MAX_LENGTHS = 50;

const TextField = ({ value, onChange, size = 'lg', placeholder = '' }: TextFieldProps) => {
  const [text, setText] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    if (newValue.length <= MAX_LENGTHS) {
      setText(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <S.Container size={size}>
      <S.Header>
        <S.Label>
          게시글 제목<S.StarWrapper>*</S.StarWrapper>
        </S.Label>
        <S.CharCount>
          {text.length} / {MAX_LENGTHS}
        </S.CharCount>
      </S.Header>
      <S.Input
        type="text"
        value={text}
        onChange={handleChange}
        maxLength={MAX_LENGTHS}
        hasValue={text.length > 0}
        placeholder={placeholder}
      />
    </S.Container>
  );
};

export default TextField;