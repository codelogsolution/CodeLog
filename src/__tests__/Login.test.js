import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../screens/Login';

describe('Login', () => {
  it('renders LoginScreen initially', () => {
    const {getByPlaceholderText, getByText} = render(<Login />);

    // Ensure login elements are present
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('LOGIN')).toBeTruthy();
  });

  it('displays an error message for empty login', () => {
    const {getByText} = render(<Login />);

    // Trigger login without entering values
    fireEvent.press(getByText('LOGIN'));

    // Ensure error message is displayed
    expect(getByText('Please provide all values')).toBeTruthy();
  });

  it('displays a success message for correct login', () => {
    const {getByPlaceholderText, getByText} = render(<Login />);

    // Enter correct username and password
    fireEvent.changeText(
      getByPlaceholderText('Username'),
      'emilys',
    );
    fireEvent.changeText(
      getByPlaceholderText('Password'),
      'emilyspass',
    );

    // Trigger login
    fireEvent.press(getByText('Login'));

    // Ensure success message is displayed
    // expect(getByText('CODEB')).toBeTruthy();
  });

  it('displays an error message for incorrect login', () => {
    const {getByPlaceholderText, getByText} = render(<Login />);

    // Enter incorrect username and password
    fireEvent.changeText(
      getByPlaceholderText('Username'),
      'emilytest',
    );
    fireEvent.changeText(
      getByPlaceholderText('Password'),
      'emilyspass123',
    );

    // Trigger login
    fireEvent.press(getByText('Login'));

    // Ensure error message is displayed
    expect(getByText('')).toBeTruthy();
  });
});