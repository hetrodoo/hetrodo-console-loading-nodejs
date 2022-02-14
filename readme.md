
# [node-console-loading](https://www.npmjs.com/package/node-console-loading)

A util function to show a simple loading animation on console.

### Tested Platforms

- Windows

## Installation

```bash
yarn add node-console-loading
```

or

```bash
npm install node-console-loading
```

## Usage

```typescript
import {createLoader} from "node-console-loading";

//Creating a loading animation
const loader = createLoader("Success!", "Failed!");

//To stop use:
loader.markAsSuccess();
loader.markAsFailed();

//You can attach to a promise using the attach method
const promise = new Promise(resolve => {
    setTimeout(resolve, 2000); //A promise that resolves itself in 2 seconds
});

loader.attach(promise);

//Using your own custom animation
const frames = [
    ".   ",
    " .  ",
    "  . ",
    "   .",
    "  . ",
    " .  ",
]

createLoader("Success!", "Failed!", frames);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)