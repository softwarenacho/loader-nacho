# Loader Component

![loader-nacho](/example/loader-nacho.png)

![loader animation](https://raw.githubusercontent.com/softwarenacho/loader-nacho/main/example/loading.gif)

A customizable loader component for displaying loading animations in React applications.

The `Loader` component is a React component designed to display a customizable loading animation. It includes various props to customize the appearance and behavior of the loader.

## Installation

To use the `Loader` component in your React project, you can install it via npm or yarn:

```bash
npm install loader-nacho
```

or

```bash
yarn add loader-nacho
```

## Usage

Import the `Loader` component into your React application and use it like any other React component:

```javascript
import React from 'react'
import Loader from 'loader-nacho'

const MyComponent = () => {
  return (
    <div>
      <Loader />
    </div>
  )
}

export default MyComponent
```

## Props

The `Loader` component accepts the following props:

- `icon`: (Optional) URL of an icon to display inside the loader.
- `itemBackgroundColor`: (Optional) Background color of the loader items. Defaults to `#991b87`.
- `itemTextColor`: (Optional) Text color of the loader items. Defaults to `#ffffff`.
- `animationEase`: (Optional) CSS animation easing function. Defaults to `ease`.
- `animationDuration`: (Optional) Duration of the animation. Defaults to `2s`.
- `circleColors`: (Optional) Array of colors for the loader circles. Defaults to an array of predefined colors.
- `circleSize`: (Optional) Size of the loader circles. Defaults to `150px`.
- `borderWidth`: (Optional) Width of the loader border. Defaults to `125px`.
- `gradientColor`: (Optional) Color for the loader gradient. Defaults to `#3f1867`.
- `circleOpacity`: (Optional) Opacity of the loader circles. Defaults to `0.75`.
- `boxShadowBlur`: (Optional) Blur radius of the loader circle shadows. Defaults to `20px`.

## Examples

Customize the appearance and behavior of the loader by passing different props:

```javascript
<Loader
  icon='/path/to/icon.svg'
  itemBackgroundColor='#991b87'
  gradientColor='#991b87'
  itemTextColor='#ffffff'
  animationEase='ease-out'
  animationDuration='2.5s'
  circleColors={['#3fffff80', '#ac60ef80', '#04f1a280', '#f77bda80']}
  circleSize='150px'
  borderWidth='125px'
  circleOpacity=''
  boxShadowBlur='10px'
/>
```

This will render a loader with a custom icon, red background, black text, smooth animation, and smaller circles.

## License

MIT © [softwarenacho](https://github.com/softwarenacho)

```

Feel free to adjust the installation instructions, usage examples, and license details according to your project's needs.
```
