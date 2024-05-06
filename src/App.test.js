import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the Truddle title', () => {
  render(<App />)
  const title = screen.getByText(/Truddle/i)
  const subtitle = screen.getByText(/Truddle/i)
  expect(title).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()
})
