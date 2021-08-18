import { render, screen } from '@testing-library/react'

import MyComponent from '.'

describe('<MyComponent />', () => {
  it('should render the heading', () => {
    render(<MyComponent />)

    expect(
      screen.getByRole('heading', { name: /my component/i })
    ).toBeInTheDocument()
  })

  it('should render colors correctly', () => {
    const { container } = render(<MyComponent />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
      color: '#fff'
    })
  })
})
