import styled from "styled-components";
import React from "react";

const Label = styled.label`
    display:flex;
    align-items: center;
    > span { 
        margin-right: 16px; 
        white-space: nowrap; 
    }
    > input {
        display:block;
        width: 100%;
        line-height:48px;
        background: none;
        border: none;
        color:#333; 

    }
`
type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>; // 继承Input类型

const Input: React.FC<Props> = (props) => {
    const { label, ...rest } = props;
    return (
        <Label>
            <span>{label}</span>
            <input {...rest} />
        </Label>
    );
};

export default Input;