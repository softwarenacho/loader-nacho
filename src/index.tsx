import React from 'react'

interface LoaderProps {
  icon: string
  itemBackgroundColor?: string
  itemTextColor?: string
  animationDuration?: string
  circleColors?: string[]
  circleSize?: string
  borderWidth?: string
}

const Loader: React.FC<LoaderProps> = ({
  icon,
  itemBackgroundColor = '#991b87',
  itemTextColor = '#ffffff',
  animationDuration = '2s',
  circleColors = ['#3fffff80', '#ac60ef80', '#04f1a280', '#f77bda80'],
  circleSize = '150px',
  borderWidth = '125px'
}: LoaderProps) => {
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
    background: `linear-gradient(30deg, ${itemBackgroundColor} 0%, ${
      itemBackgroundColor !== '#991b87' ? itemBackgroundColor : '#3f1867'
    } 100%)`,
    borderRadius: '50%',
    boxShadow: `${itemBackgroundColor ? '' : '0 0 5px 2px #7f5879'}`
  }

  const circleContainerStyles: React.CSSProperties = {
    position: 'absolute',
    width: parseInt(circleSize) + 30 + 'px',
    height: parseInt(circleSize) + 30 + 'px', // Add 30px for padding and margins
    animation: `rotate ${animationDuration} ease infinite`
  }

  const circleStyles: React.CSSProperties = {
    zIndex: 1,
    position: 'absolute',
    width: circleSize,
    height: circleSize,
    backgroundColor: 'transparent',
    opacity: 0.75,
    borderRadius: '50%',
    animation: `combined ${
      parseInt(animationDuration) * 2
    } ease-in-out infinite`
  }

  const iconStyles: React.CSSProperties = {
    zIndex: 4,
    color: itemTextColor,
    animation: `pulse ${parseInt(animationDuration)}s ease infinite`,
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
      transform: rotate(0deg) scale(1) translate(2.5px, -2.5px);
      z-index: 2;
    }
    10% {
      transform: rotate(90deg) scale(1.2) translate(2.5px, 0);
      shape-outside: ellipse(150% 90%);
      z-index: 1;
    }
    20% {
      transform: rotate(180deg) scale(1) translate(-2.5px, -2.5px);
      z-index: 2;
    }
    30% {
      transform: rotate(270deg) scale(1.2) translate(0, 2.5px);
      z-index: 1;
    }
    40% {
      transform: rotate(360deg) scale(1.1) translate(-2.5px, 0);
      z-index: 1;
    }
    50% {
      transform: rotate(270deg) scale(1) translate(-2.5px, 2.5px);
      z-index: 2;
    }
    60% {
      transform: rotate(180deg) scale(1.1) translate(-2.5px, 0);
      z-index: 1;
      shape-outside: ellipse(20% 180%);
    }
    70% {
      transform: rotate(90deg) scale(1) translate(-2.5px, -2.5px);
      z-index: 2;
    }
    80% {
      transform: rotate(0deg) scale(1) translate(0, 2.5px);
      shape-outside: ellipse(140% 40%);
      z-index: 1;
    }
    90% {
      transform: rotate(90deg) scale(1.1) translate(0, -2.5px);
      z-index: 2;
    }
    100% {
      transform: rotate(0deg) scale(1) translate(-2.5px, 2.5px);
      z-index: 2;
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
        <div style={borderStyles} data-testid='border' />
        <div style={circleContainerStyles} data-testid='circleContainer'>
          {circleColors.map((color, index) => (
            <div
              key={index}
              style={{
                ...circleStyles,
                boxShadow: `0 0 10px 20px ${color}`,
                backgroundColor: color,
                top: index % 2 === 0 ? '1px' : 'auto',
                bottom: index % 2 !== 0 ? '1px' : 'auto',
                left: index % 4 === 0 || index % 4 === 3 ? '1px' : 'auto',
                right: index % 4 === 2 || index % 4 === 3 ? '1px' : 'auto',
                animationDelay: `${index * 0.4}s`
              }}
              data-testid='circle'
            />
          ))}
        </div>
        <img
          style={iconStyles}
          src={icon}
          data-testid='icon'
          alt='Loading Icon'
        />
      </div>
    </div>
  )
}

export default Loader
