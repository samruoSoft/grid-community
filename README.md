# Samruo Grid Community
### By Svelte + TS

## Introduction
1. Samruo-Grid-Community is a template that combines Svelte, TypeScript, and Vite, providing a minimal yet feature-rich table component for developing web applications with Svelte and TypeScript. The entire component is only 28K (including one JS file and one CSS file).

2. The template uses Svelte as the frontend framework, combined with TypeScript to provide type checking and a better development experience. By using Vite as the build tool, it offers a fast development server and efficient build process. Basic Layout:

3. The template provides a basic layout, including a header, a footer record statistics area, and a main content area, making it convenient for developers to extend upon this foundation.
4. Certainly! The Samruo-Grid-Community template can be integrated into various frontend development frameworks and languages, including JavaScript, Vue, React, and Angular. Here's how you can leverage this template in each of these environments.

![ezgif-4-0f2c83e449](https://github.com/samruoSoft/grid-community/assets/60513450/e3b1ac2e-1753-4480-b6cb-734067330e7d)


## Example:
```html
<link rel="stylesheet" href="./dist/style.css">
<script src='./dist/samruo-grid-community.iife.js'></script>
<div id="app"></div>
<script>
    let gridOptions = {
        height: 400,
        rowHeight: 30,
        columns: [
            {field: 'name',headerName: 'Name',width: 150},
            {field: 'age', headerName: 'Age', width: 60},
            {field: 'address', headerName: 'Address', width: 200}
        ],
        data: Array.from({length: 100000}, (_, i) => ({
            name: `Item ${i + 1}`,
            age: Math.floor(Math.random() * 100),
            address: `Address ${i + 1}`
        }))
    }
    let myGrid = new Samruo.GridCommunity({
        target: document.getElementById('app'),
        props: {
            options: gridOptions,
        },
    });
</script>
