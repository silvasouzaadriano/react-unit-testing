import { render, waitFor, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserList from '../components/UserList';

describe('Happy Path', () => {
  describe('App Component', () => {
    it('should render users list', async () => {

      const { getByText, queryByText, rerender, unmount } = render(<UserList initialItems={['Diego', 'Rodz', 'Mayk']} />)

      expect(getByText('Diego')).toBeInTheDocument()
      expect(getByText('Rodz')).toBeInTheDocument()
      expect(getByText('Mayk')).toBeInTheDocument()

      unmount()
      rerender(<UserList initialItems={['Julia']} />)

      expect(getByText('Julia')).toBeInTheDocument()
      expect(queryByText('Mayk')).not.toBeInTheDocument()

    })

    it('should be able to add new user to users list', async () => {
      const { getByText, getByPlaceholderText, findByText, debug} = render(<UserList initialItems={[]} />)

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
      const { getByText, getAllByText, queryByText, debug} = render(<UserList initialItems={['Adriano']}/>)

      const removeUserButtons = getAllByText('Remove')

      await userEvent.click(removeUserButtons[0])

      await waitFor(() => {
        expect(queryByText('Adriano')).not.toBeInTheDocument();
      });
      
      
    })
  })  
})
