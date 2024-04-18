import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import Loader from './index'

describe('Loader component', () => {
  it('renders without crashing', () => {
    render(<Loader icon='example.png' />)
  })

  it('renders the correct number of circles', () => {
    const { getAllByTestId } = render(<Loader icon='example.png' />)
    const circles = getAllByTestId('circle')
    expect(circles).toHaveLength(4) // Assuming default circleColors prop has 4 colors
  })

  it('renders the correct icon', () => {
    const iconSrc = 'example.png'
    const { getByAltText } = render(<Loader icon={iconSrc} />)
    const icon = getByAltText('Loading Icon')
    expect(icon).toHaveAttribute('src', iconSrc)
  })

  it('applies correct inline styles', () => {
    const { getByTestId } = render(<Loader icon='example.png' />)
    const border = getByTestId('border')
    const circleContainer = getByTestId('circleContainer')
    const icon = getByTestId('icon')

    expect(border).toHaveStyle(
      'background: linear-gradient(30deg, #991b87 0%, #3f1867 100%)'
    )
    expect(circleContainer).toHaveStyle('width: 180px') // Assuming default circleSize prop
    expect(icon).toHaveStyle('animation: pulse 3s ease infinite')
  })

  // Add more specific tests according to your requirements
})
