import React from 'react'

interface LoaderProps {
  icon?: string
  itemBackgroundColor?: string
  itemTextColor?: string
  animationEase?: string
  animationDuration?: string
  circleColors?: string[]
  circleSize?: string
  borderWidth?: string
  gradientColor?: string
  circleOpacity?: number
  boxShadowBlur?: string
}

const Loader: React.FC<LoaderProps> = ({
  icon,
  itemBackgroundColor = '#991b87',
  itemTextColor = '#ffffff',
  animationEase = 'ease',
  animationDuration = '2s',
  circleColors = ['#3fffff80', '#ac60ef80', '#04f1a280', '#f77bda80'],
  circleSize = '150px',
  borderWidth = '125px',
  gradientColor = '#3f1867',
  circleOpacity = 0.75,
  boxShadowBlur = '20px'
}: LoaderProps) => {
  const multiplyTimeString = (
    timeString: string,
    multiplier: number
  ): string => {
    // Extract the numeric part of the string
    const numericPart = parseFloat(timeString)
    // Extract the unit part of the string (e.g., "s" or "ms")
    const unit = timeString.replace(/[^a-zA-Z]/g, '')
    // Multiply the numeric part and convert it back to the string
    const result = (numericPart * multiplier).toString()
    // Combine the result with the unit and return
    return result + unit
  }

  const loaderStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }

  const borderStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    position: 'absolute',
    width: borderWidth,
    height: borderWidth,
    background: `linear-gradient(30deg, ${itemBackgroundColor} 0%, ${gradientColor} 100%)`,
    borderRadius: '50%',
    boxShadow: `${
      itemBackgroundColor
        ? `0 0 5px 2px ${itemBackgroundColor}`
        : '0 0 5px 2px #7f5879'
    }`
  }

  const circleContainerStyles: React.CSSProperties = {
    position: 'absolute',
    width: parseInt(circleSize) + 30 + 'px',
    height: parseInt(circleSize) + 30 + 'px',
    animation: `rotate ${animationDuration} ${animationEase} infinite`
  }

  const circleStyles: React.CSSProperties = {
    position: 'absolute',
    width: circleSize,
    height: circleSize,
    backgroundColor: 'transparent',
    opacity: circleOpacity,
    borderRadius: '50%',
    animation: `combined ${multiplyTimeString(
      animationDuration,
      1.5
    )} ${animationEase} infinite`
  }

  const iconStyles: React.CSSProperties = {
    zIndex: 4,
    color: itemTextColor,
    animation: `pulse ${multiplyTimeString(
      animationDuration,
      2
    )} ${animationEase} infinite`,
    filter: `${itemBackgroundColor ? '' : 'drop-shadow(5px 5px 10px black)'}`
  }

  const keyframes = `@keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes combined {
    0% {
      transform: rotate(0deg) translate(2.5px, -2.5px);
    }
    10% {
      transform: rotate(90deg)) translate(2.5px, 0);
    }
    20% {
      transform: rotate(180deg) translate(-2.5px, -2.5px);
    }
    30% {
      transform: rotate(270deg)) translate(0, 2.5px);
    }
    40% {
      transform: rotate(360deg)) translate(-2.5px, 0);
    }
    50% {
      transform: rotate(270deg) translate(-2.5px, 2.5px);
    }
    60% {
      transform: rotate(180deg)) translate(-2.5px, 0);
    }
    70% {
      transform: rotate(90deg) translate(-2.5px, -2.5px);
    }
    80% {
      transform: rotate(0deg) translate(0, 2.5px);
    }
    90% {
      transform: rotate(90deg)) translate(0, -2.5px);
    }
    100% {
      transform: rotate(0deg) translate(-2.5px, 2.5px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }`

  return (
    <div>
      <style>{keyframes}</style>
      <div style={loaderStyles}>
        {icon && (
          <img
            style={iconStyles}
            src={icon}
            data-testid='icon'
            alt='Loading Icon'
          />
        )}
        <div style={borderStyles} data-testid='border' />
        <div style={circleContainerStyles} data-testid='circleContainer'>
          {circleColors.map((color, index) => (
            <div
              key={index}
              style={{
                ...circleStyles,
                zIndex: index + 1,
                boxShadow: `0 0 ${boxShadowBlur} ${boxShadowBlur} ${color}`,
                backgroundColor: color,
                top: index % 4 === 0 ? '2px' : 'auto',
                bottom: index % 4 === 1 ? '2px' : 'auto',
                left: index % 4 === 2 ? '2px' : 'auto',
                right: index % 4 === 3 ? '2px' : 'auto',
                animationDelay: `${index * 0.2}s`
              }}
              data-testid='circle'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loader
