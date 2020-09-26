import React, { Component, FormEvent } from 'react'

interface IIputProp{
    value : string;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
}



export const Input: React.FunctionComponent<IIputProp> = ({value,onChange}) =>(
    <input type="text"  value={value} onChange={onChange} placeholder="name"/>
)

interface IFormProp{
    onSubmit:(event:React.FormEvent) => void
}

export const Form :React.FunctionComponent<IFormProp> = ({children,onSubmit})=>(
    <form onSubmit={onSubmit}>{children}</form>)

