# 🧱 Dev Stack Builder Website
-  Build your ideal development stack. Here you can explore modern frontend, backend, database and tooling options and can compare them side by side and put together to know which fits the project best.

## 🛠️ Built With
- React.js
- Tailwind CSS
- TypeScript
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)


---

## ✨ Features
- Browsing Technologies by Category: Explore the technologies Frontend, Backend, Database and Tooling each with their respective description, quick tags and ratings.
- Build Your Own Stack: By clicking "Add to Stack" one can add the technology on their stack section and can also remove them individually  or all together.
- Card list: The list ensures you to compare the technologies all at a single glance to quickly  decide which one to add to the stack.


## ⚛️ React Questions
## 1. What is JSX, and why is it used in React?
   -> JSX is basically a syntax where one can write HTML like codes inside the JavaScript. It is used in React because this makes the UI clean and easier.

## 2. What is the difference between props and state?
   -> Props is the data that is given to the component whereas State is the data that the component manages and can change directly.

## 3. What does the `useState` hook do, and where did you use it in this project?
      ->'useState' allows the component to store and update its data.
      In Technologies.tsx file: 
             const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnology[]>([]);

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
      -> 'useEffect' runs code after the component renders.

## 5. Why does every item in a `.map()` list need a unique `key` prop?
      -> So that React can understand which item will change, remove or be added - to maintain the uniqueness.

## 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
      -> Conditional rendering refers to the fact that when we want to show something specific in the UI only when the  condition satisfies.
      In Technologies.tsx file:
            {count === 0 ? (
                <div className="mt-5 rounded-lg border border-dashed border-[#E2E8F0] px-4 py-8 text-center">
                   <p className="text-sm text-[#94A3B8]">Your stack is empty.</p>
                </div>
              ) : (
                 <> </>
                )
            }

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
      -> If we want to pass the datas from a parent component to a child component pass the data as props. And if we want to send something back to the parent use function.

