# Machine Task 1 💻

## Table of Contents


- [Responsiveness](#responsiveness)
- [Comments](#comments)
- [Conclusion](#conclusion)
- [Dependencies](#dependencies)
- [Run Locally](#run-locally)
- [Collabrators](#collabrators)
- [Tech Stack](#tech-stack)


# Assignment Overview 📄

This assignment involves replicating a given design using React, with a focus on maintaining a clean and organized codebase. In this project, we've utilized React Icons for handling iconography. This README will provide an overview of the project structure and some key development choices.

## Project Structure 📂

1. **src Folder** :
   - The `src` folder is the core of our project. It contains all our React components.
   - Components are organized within this folder to keep our codebase manageable and intuitive.

2. **Styles Folder**:
   - We've created a `styles` folder within `src` to house all our modular CSS files.
   - Each CSS file uses the `.module.css` extension to ensure a clear separation of styles.
   - This approach avoids deep nesting and promotes maintainability.

3. **Utils Folder**:
   - The `utils` folder is home to constants and utility functions.
   - Constants, such as URLs for images, follow the snake_case naming convention. For example, `IMAGE_URL`.
   - This convention aids in code readability and consistency.
   - We use camelCase for naming components when mocking data.

4. **Layout Structure**:
   - To enhance the project's structure and intuitiveness, we've divided it into different sections.
   - Sections like header, sidebar, main section, and left sidebar are encapsulated within a `layout.js` component.

5. **Assets**:
   - The `assets` directory contains all the images and resources needed for the project.
   - This separation makes it easier to manage assets and keeps them organized.

6. **Reusable Components**:
   - We've developed reusable components, including buttons and cards, to maintain code consistency and reduce redundancy.

## Responsiveness
   - The project is designed to be responsive and adapt to various screen sizes, ensuring a consistent user experience across devices.

## Comments 
   - We have added comments wherever necessary to clarify code logic and enhance codebase understanding.

# Conclusion

This project aims to replicate a given design using React, adhering to best practices in terms of code structure and organization. By following naming conventions and utilizing modular CSS, we aim to create a maintainable and responsive application.

Feel free to reach out if you have any questions or need further information about the project.



## Dependencies

Here are the main dependencies used in this project:


- **react**: "^18.2.0"
- **react-dom**: "^18.2.0"
- **react-icons**: "^4.10.1"
- **react-router-dom**: "^6.15.0"
- **react-scripts**: "5.0.1"

- 
## Run Locally

Clone the project

```bash
git clone https://github.com/geekyneha/company-task-1.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
## Tech Stack

**Client:** React.js, CSS Modules, React icons 




## Collabrators

- [@geekyneha](https://github.com/geekyneha/company-task-1.git)

