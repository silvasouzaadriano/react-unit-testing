import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Happy Path', () => {
  describe('App Component', () => {
    it('should render users list', () => {

      const { getByText } = render(<App />)

      expect(getByText('Adriano')).toBeInTheDocument();
      expect(getByText('Giovanni')).toBeInTheDocument();
      expect(getByText('João')).toBeInTheDocument();
      

    })
  })  
})
