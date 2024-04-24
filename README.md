# Loader Component

![loader-nacho](/example/loader-nacho.png)

![loader animation](/example/loader-nacho.gif)

A customizable loader component for displaying loading animations in React applications.

It displays 4 circles around an image.

## Installation

You can install the loader component via npm or yarn:

```bash
yarn add loader-nacho

npm install --save loader-nacho
```

## Usage

```jsx
import Loader from 'loader-nacho'

const MyComponent = () => {
  return (
    <div>
      <Loader
        icon='/path/to/icon.svg'
        itemBackgroundColor='#991b87'
        itemTextColor='#ffffff'
        animationDuration='2.5s'
        circleColors={['#3fffff80', '#ac60ef80', '#04f1a280', '#f77bda80']}
        circleSize='150px'
        borderWidth='125px'
      />
    </div>
  )
}

export default MyComponent
```

## Props

- `icon` (string, required): Path to the icon to be displayed at the center of the loader. (should be a valid image)
- `itemBackgroundColor` (string, optional): Background color of the loader items. Defaults to `#991b87`.
- `itemTextColor` (string, optional): Text color of the loader items. Defaults to `#ffffff`.
- `animationDuration` (string, optional): Duration of the animation cycle. Defaults to `2.5s`.
- `circleColors` (string[], optional): Array of colors for the loader circles. Defaults to a set of predefined colors.
- `circleSize` (string, optional): Size of the loader circles. Defaults to `150px`.
- `borderWidth` (string, optional): Width of the loader border. Defaults to `125px`.

## Customization

You can customize the loader appearance by passing different props to the `Loader` component. For example, you can change the background color, text color, animation duration, circle colors, circle size, and border width.

## License

This component is licensed under the MIT License. Feel free to use and modify it according to your needs.

```

Feel free to adjust the installation instructions and other details to fit your project's conventions and requirements.
MIT © [softwarenacho](https://github.com/softwarenacho)
```
