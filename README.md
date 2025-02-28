### Getting Started

###### Follow the below steps

In the project directory, you can run:

##### `npm install`

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

###### `Tech stack used:`

- ReactJS
- Typescript
- Tailwind for css
- Jest, RTL for tests
- lucide-react for icons
- Eslint, prettier for code formatting

###### `How to add new poll widget`

- We can pass questions as props
- Questions is an array of objects having below structure
- Json api for the sane can be found in data.ts

  ```
  export interface IQuestion {
  id: number
  qsn: string
  options: Option[]
  voted?: boolean
  selectedOption?: string
  }
  ```
