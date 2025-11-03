# Homework 3: Project Scaffolding

Topics: TypeScript, ESLint, Prettier formatting, Zod Validation, Unit Testing, CLI execution, Project Management

In this homework, you will be putting together your own publishable npm package using a combination of TypeScript and the Zod package for validating types. You will be building this project **from scratch**: we will provide you no starter code, not even a package.json or configuration files like before! With the knowledge from the lecture on project mananagement, you'll get to step into the shoes of a developer to choose all the tools you need for a project yourself- with some guidance, of course.

This homework is an exercise in reading documentation on your own. About 80% of this homework is just looking it up, because you're exploring new packages and setting things up yourself! In particular, acquiant yourself with the Zod and TypeScript documentations to get familiar with how to use them in projects.

### Assignment Goals

- Use TypeScript in a project alongside the Zod package for validation
- Develop project management skills in JavaScript by building a project and its dependencies from scratch
- Learn the ecosystem of npm and publishing packages

## Pizza Validation

### Schema

In this assignment you'll be developing a pizza validation package. By the end, you should be able to pass in a JSON file into a command-line interface (CLI) and judge whether that object is a valid pizza or not. What constitutes a valid pizza? Well, we will use the following schema for a pizza:

- size: number\- diameter in inches
- crust: string\- either stuffed or normal
- isDeepDish: optional boolean\- by default should be false (non-deep dish)
- toppings: optional array of strings\- should include only valid toppings. You should choose at least 4 toppings that should never go on pizza. (so it's up to you whether you think pineapple should be on pizza!)

## Installation

[Accept assignment on GitHub Classroom](https://classroom.github.com/a/x6X7wJcH)

Below we'll provide a general order of operations to get you started. You don't have to follow it exactly- you just have to meet the requirements for the project by the end! See the rubric at the bottom of this assignment for more details.

Be reminded that this assignment is all about finding solutions on your own. You know the tools and knowledge to read and find documentation online. Most the tools you need for this project are well-documented and have plenty of resources online! You don't always need to fall back to asking AI for the answer, though if you do, remember to keep all chat logs to document your conversations!

Please use git to your advantage! Remember to make a commit (and push) when you've done something significant, so you can't accidentally un-make that progress later.

### Dependencies

At the very least, you will need to following dependencies to develop this application:

- typescript
- eslint
- prettier
- zod
- jest (or another testing framework)

**This may not be an exhaustive list of the dependencies you need for this project.** You are free to install any other packages that may help for this project, so long as the core of the project still uses TypeScript and Zod.

When setting up your project, be sure to follow the requirements listed in the rubric for what we are looking for in terms of setup. You will need to add a few configuration files and set up some rules and options within them.

## Instructions

### Validation Function

Once your project's dependencies are installed, should start by creating your validation function. This pizza validation should use the **Zod** package in order to validate whether a given input is a pizza. Follow the specifications in the rubric for specific details that we want out of this function. If we don't mention a certain detail, it is up to your discretion on how to implement that feature.

### CLI Functionality

Next, you'll set up your command-line interface. This should involve another source file that runs the pizza validator on a selected JSON file containing a pizza object passed in through some manner of input arguments within the command-line. There are a variety of ways to parse input arguments, but we'll direct you to parseArgs from the built-in node:util. You may also find that the package ts-node is good to testing this section, so that you don't have to rebuild your project every time you need to test this code.

### Unit Testing

Finally, you set up and write some unit tests for your project. We will be using Jest for this purpose, so look up how to install and use the syntax of Jest in order to prepare your test suite. We'd recommend using ts-jest alongside this it, but feel free to find your own solution if you come across one. Follow the requirements for tests in the rubric below.

### Documentation

A good project and package should always be well documented and user friendly! In a README.md file, document how to use your package, including how to use the CLI functionality, and what function(s) the pizza validator will use. Don't forget to comment your code liberally, so that developers may inspect the inner workings of your code!

### Publish to npm (optional)

Finally, you'll get to publish your package to npm! This process was shown partially in class, but can be reviewed at this [link](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages). Remember that you will need to create an npm account, login to the account through the terminal, and make sure you publish the package publically (or else it will prompt you to pay to be private!).

#### File Structure

We recommend you put any **source code** you write within a src directory.

When building a TypeScript project, you will be compiling and outputting .ts code to a separate directory. You can leave this as the default dist or change it if you'd like. Make sure this output directory is the one that is shipped when you go to publish the project.

When writing test code, read up on some documentation of what will be detected by Jest tests or other frameworks. Organizing your project in a certain way will let your tests be easily automated with a command and allow you to even write multiple test files!

## AI Synthesis Activity

As part of an initiative to promote honest and ethical use of AI and LLMs in programming classes, you will perform an AI synthesis activity as part of this homework. This assignment will be written within your AIAssignment.md file, and will differ based on a self-report of whether you have used AI for any part of this assignment or not. Please be truthful about your usage, because either way, you will still need to perform this AI synthesis activity! This AI synthesis activity will represent **5% of the individual homework's grade**.

### Activity A: If you used AI

- Cite the usage by including screenshots or a link to the conversation with your AI of choice. Make sure to include any context, instructions, and all the converstations you had with the AI.
- Write about why you used AI. Was there a gap in knowledge you wanted to fill? Were the answers through traditional search engines not adquete? Did you want to let AI help you format something in a quick manner?
- Evaluate the AI's response. If you asked multiple questions, you can pick one of the responses the AI generated. Does the AI answer your question properly? Does it hallucinate any details? Could there be room to improve this response through manual editing? Did you accept this response fully or adapt parts of it into your work?
- If you used unfamiliar syntax or concepts generated by AI within your assignment, be sure to research them and explain what those concepts are to demonstrate your understanding.

### Activity B: If you did NOT AI

- Explain some improvement you want to make within your code. Perhaps you have a code block that could be more concise, or a part of your code could be improved with a library or be performed with a more efficient algorithm.
- Ask AI how to improve your code, by picking a part of your program you are interested in improving and asking something along the lines of "how can I improve this code?" This does not have to be verbatim; you could ask more specific questions for improvement, like "what JavaScript libraries could improve the efficiency of my code?"
- Evaluate the response the AI generates. You may need to do some research to do this evaluation, to see if the syntax generates correctly or if any libraries the AI suggests are appropriate for the current task. Report on whether the AI's solution fits within your project, or if it would need modifications to work properly.
- You do NOT need to use the AI suggestion within your final submission, if your code already works properly. If the scope of your inquiry in this activity leads you to replace parts of your code, switch to Assignment A instead.

Templates for these responses are included in the provided AIAssignment.md starter files for this assignment. You can also refer to the dedicated [AI Policy](ai-policy) page for more information and examples of good responses. This activity will be graded mostly for effortful completion. We are looking to foster an environment of honest AI usage, so please take this activity as a learning opportunity!

## Submission & Rubric

To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your AIAssignment.md file containing your AI syntesis activity. You should only push the files related to the package, you don't need to push any test files you made to test the package. Before you submit, make sure you lint your code for style errors using the command npm run lint. More details on style can be found in the [style guide](style-guide). We will take -1 points for every style error remaining in the submission for the submitted files. Since this project requires you to make your own ESLint, we will use your linting rules instead of the standard rules we would apply.

### Rubric

#### **\[5pts total\]** Your package must be organized and valid for publishing with npm.

- **\[3pts\]** It must have a name, version, author, and description
- **\[2pts\]** Only the packages required in your source code should be listed as dependencies. The rest (i.e. typescript, eslint) should be devDependencies.

To test this section, try making a new, empty package in a directory next to your pizza validator. You should be able to install it as a dependency just by providing its path:

npm install ../folder-name

Alternatively, you can actually publish the package to npm and install it from there. Make sure you indicate that you did so within the README so that we can see it as well!

#### **\[10pts total\]** Your package should provide an exported function taking a parameter of type unknown which allows users to check if something is a pizza.

- **\[3pts\]** The function's behavior should be accurate to "valid pizzas".
- **\[4pts\]** This function's implementation must use the package zod for validation.
- **\[3pts\]** This function must return a **discriminated union** type object with the fields:

- isPizza
- errors only if isPizza is false (providing some form of information on why the given object is not a pizza)
- pizza only if isPizza is true, which should be our same pizza object but with the type known.

Here's an example of usage as a dependency:

```typescript
import { validatePizza } from '<package-name>';

const result = validatePizza({ hehehehaw: true });
// there should be no typescript errors below
if (result.isPizza) console.log(result.pizza.crust);
else console.log(result.errors);
```

#### **\[5pts total\]** Your project should use TypeScript.

- **\[2pts\]** All your code (besides config files) should be written in TypeScript – in .ts files
- **\[3pts\]** You should have a package.json script called build that transpiles your source code using tsc, and plops it into a directory preferably called dist

#### **\[5pts total\]** Your project should have linting and formatting set up.

- **\[3pts\]** eslint installed locally + config file with at least 4 extra rules other than the recommended default rules
- **\[2pts\]** prettier installed locally + config file with at least 2 extra rules that are not default

#### **\[5pts total\]** Your project should have unit testing.

- **\[2pts\]** A testing suite, such as Jest, should be run when you call npm test. It should test any \*.test.ts files in your test folder.
- **\[3pts\]** For your pizza validation function, write at least 1 valid and 2 invalid test cases.

#### **\[7pts total\]** Your package should include CLI functionality.

- **\[5pts\]** Running your package as a binary should tell us in the console if a given json file is a pizza, and if not, the specific reason(s) why it's not a pizza.
- **\[2pts\]** If provided a file that doesn't exist or it can't read, it should catch this error and report it to the console.

To test this, you can run the following:

npm install --global . # install this package globally

<package-name> test-pizza.json # assuming you have a file \`test-pizza.json\`

#### **\[5pts total\]** You should include a README.md and LICENSE file.

- **\[2pts\]** README.md should provide an example of using the package as a dependency.
- **\[2pts\]** And it should show CLI usage.
- **\[2pts\]** LICENSE file, matching the license listed in package.json (use ISC if not sure)

#### **\[3pts\]** Your repository should not include node_modules or any emitted code. This can be controlled with a .gitignore file.
