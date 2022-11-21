import React from 'react'
import {
     Container,
     Form,
     FormButton,
     FormH1,
     FormInput,
     FormLabel,
     FromContent,
     FromWrap,
     Icon, 
     Text 
} from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
          <FromWrap>
              <Icon to="/">dolla</Icon>
              <FromContent>
                  <Form action="#">
                      <FormH1>Entre em sua conta</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' required />
                      <FormLabel htmlFor='for'>Senha</FormLabel>
                      <FormInput type='password' required />
                      <FormButton type='submit'>Continue</FormButton>
                      <Text>Esqueci a senha</Text>
                  </Form>
              </FromContent>
          </FromWrap>
      </Container>
    </>
  )
}

export default SignIn;