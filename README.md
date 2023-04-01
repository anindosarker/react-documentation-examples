# React Examples

This repository contains a collection of React examples for learning react. A lot of the examples are sourced from the official [React Documentation](https://www.react.dev). 

The examples are stored in separate folders and cover a wide range of React concepts, from basic rendering to complex state management and data fetching.

I'm planning to add more examples in the future. If you have any suggestions, please feel free to open an issue or a pull request. 😀

# Getting Started

1. To get started, clone this repository to your local machine using:

   ```sh
   git clone https://github.com/anindosarker/react-examples.git
   ```

1. Navigate to the project directory:

   ```sh
   cd react-examples
   ```

1. Navigate to any example directory and install the necessary dependencies using Yarn. For example:

   ```
   cd TicTacToe
   yarn
   ```

   Once the dependencies are installed, you can run the development server using:

   ```sh
   yarn dev
   ```

   This will start a local development server at http://localhost:5173/ where you can view the examples in your browser.

1. Repeat step 3 for any other examples you'd like to run. 😀

# Contributing

Contributions are welcome and encouraged! If you'd like to add an example, please follow these steps:

1. Fork this repository to your GitHub account.
1. Create a new branch in your forked repository with a descriptive name for your example.
   ```
   git branch NewExample
   ```
1. Swtich to your new branch.
   ```
   git checkout NewExample
   ```
1. Create a new directory with a descriptive name for your example. For example:
   ```sh
   mkdir NewExample
   ```
   Every folder should be a new react project, sepeartly runnable. The file structer should look like this:
   ```
   react-examples
    ├── LiftingStateUp
    │   ├── ...code here
    |   └── README.md
    ├── TicTacToe
    │   ├── ...code here
    |   └── README.md
    ├── NewExample
    │   ├── ...code here
    |   └── README.md
    └── README.md
   ```
1. Add your React code and any necessary dependencies to the directory.
1. Create a new file called README.md in your example directory and describe what your example does and how it works.
    ```
    NewExample
    ├── ...code here
    └── README.md
    ```
1. Add your example to the list in the main README.md file in the [Available Examples](https://github.com/anindosarker/react-examples/blob/f46b454c0184342ffbc1648daf31b4f7a86bbbfb/README.md#available-examples) section with a brief description and a link to your example directory.
    ```md
    - [NewExample](https://github.com/anindosarker/react-examples/tree/main/NewExample)
    ```
1. Commit your changes and push them to your forked repository. Use a meaningful commit message.

    ```sh
    git add .
    git commit -m "Added NewExample"
    git push origin NewExample
    ```
1. Open a pull request to the main repository.

# Available Examples

The following examples are currently available:

- [Lifting State Up](https://github.com/anindosarker/react-documentation-examples/tree/main/LiftingStateUp)
- [TicTacToe](https://github.com/anindosarker/react-documentation-examples/tree/main/TickTacToe)
