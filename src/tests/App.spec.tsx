import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Happy Path', () => {
  describe('App Component', () => {
    it('should render users list', () => {

      const { getByText } = render(<App />)

      expect(getByText('Adriano')).toBeInTheDocument();
      expect(getByText('Giovanni')).toBeInTheDocument();
      expect(getByText('João')).toBeInTheDocument();
      

    })

    it('should be able to add new user to users list', async () => {
      const { getByText, getByPlaceholderText, findByText, debug} = render(<App />)

      const inputElement = getByPlaceholderText('New User');

      const addUserButton = getByText('Add')

      //debug()

      await userEvent.type(inputElement, 'New');

      //debug()

      await userEvent.click(addUserButton)

      //debug()

      await waitFor(() => {
        expect(getByText('New')).toBeInTheDocument();
      });

      
    })

    it('should be able to remove an user from users list', async () => {
      const { getByText, getAllByText, queryByText, debug} = render(<App />)

      const removeUserButtons = getAllByText('Remove')

      await userEvent.click(removeUserButtons[0])

      await waitFor(() => {
        expect(queryByText('Adriano')).not.toBeInTheDocument();
      });
      
      
    })
  })  
})
