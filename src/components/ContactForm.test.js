import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('Contact form renders without errors', () => {
  render(<ContactForm />);

});

test('user can fill out and submit the form', () => {
  render(<ContactForm />);

  //query for each input field with RTL matchers
  const firstNameInput = screen.getByLabelText(/first name/i)
  const lastNameInput = screen.getByLabelText(/last name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const messageInput = screen.getByLabelText(/message/i)

  //fill out the form
  userEvent.type(firstNameInput, 'Edd');
  userEvent.type(lastNameInput, 'Burke');
  userEvent.type(emailInput, 'bluebill1049@hotmail.com');
  userEvent.type(messageInput, 'message');

  //click the button
  //userEvent.click(button);

  //assert that the new person added is now on the page
  // const edd = screen.getByText(/edd/i);
  // expect(edd).toBeInTheDocument();
})
