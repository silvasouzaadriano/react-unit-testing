import { render } from '@testing-library/react';
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
      //const user = userEvent.setup()
      const { getByText, debug} = render(<App />)

      debug()

      const addUserButton = getByText('Add')

      //await user.click(getByRole('button', {name: /Add/i}))
      await userEvent.click(addUserButton)

      debug()

      expect(getByText('New')).toBeInTheDocument();

      

    })
  })  
})
