---
title: React入门
---

# React入门

## 简介

**React** 是一个用于构建用户界面的 JavaScript 库。

- 是一个将数据渲染为 HTML 视图的开源 JS 库
- 它遵循基于组件的方法，有助于构建可重用的 UI 组件
- 它用于开发复杂的交互式的 web 和移动 UI

## 入门案例

首先需要引入几个 react 包

- react.development.js
- react-dom.development.js
- babel.min.js 

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>hello_react</title>
  </head>
  <body>
    <!-- 准备好一个"容器" -->
    <div id="test"></div>

    <!-- 引入react核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入react-dom，用于支持react操作DOM -->
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <!-- 引入babel，用于将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <script type="text/babel">
      /* 此处一定要写babel */
      //1.创建虚拟DOM
      const VDOM = <h1>Hello</h1> /* 此处一定不要写引号，因为不是字符串 */
      //2.渲染虚拟DOM到页面
			const root = ReactDOM.createRoot(document.querySelector('#test'));
      root.render(VDOM);
    </script>
  </body>
</html>
```

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="./srcripts/react.development.js"></script>
    <script type="text/javascript" src="./srcripts/react-dom.development.js"></script>
    <script type="text/javascript" src="./srcripts/babel.min.js"></script>

    <style>
        .title {
           background-color: orange;
           width: 200px; 
        }
    </style>
</head>
<body>
    <div id = "test"></div>
    <script type="text/babel">
        const myId = "buMai"
        const myData = "hello, REACT"
        const VDOM = (
            <div>
                <h2 id={myId.toLocaleLowerCase()} className="title">
                    <span style={{color: 'white', fontSize: '29px'}}>{myData.toLocaleLowerCase()}</span>
                </h2>
            </div>
        )
        ReactDOM.render(VDOM, document.getElementById("test"))
    </script>
</body>
</html>
```

## JSX 语法

JSX 是 JavaScript 的语法扩展，JSX 使得我们可以以类似于 HTML 的形式去使用 JS。JSX便是React中声明式编程的体现方式。声明式编程，简单理解就是以结果为导向的编程。使用JSX将我们所期望的网页结构编写出来，然后React再根据JSX自动生成JS代码。所以我们所编写的JSX代码，最终都会转换为以调用`React.createElement()`创建元素的代码。

1. 定义虚拟DOM，JSX不是字符串，不要加引号

2. 标签中混入`JS表达式`的时候使用{}

   ```jsx
   id = {myId.toUpperCase()}
   ```

3. 样式的类名指定不能使用class，使用`className`

4. 内敛样式要使用`{{}}`包裹

   ```jsx
   style={{color:'skyblue',fontSize:'24px'}}
   ```

5. 不能有多个根标签，只能有一个根标签

6. JSX的标签必须正确结束（自结束标签必须写/）

7. JSX中html标签应该小写，React组件应该大写开头。如果小写字母开头，就将标签转化为 html 同名元素，如果 html 中无该标签对应的元素，就报错；如果是大写字母开头，react 就去渲染对应的组件，如果没有就报错

8. 如果表达式是空值、布尔值、undefined，将不会显示

### 🦴 其它

1. 注释

   ```
   // 写在花括号里面
   ReactDOM.render(
       <div>
       <h1>小丞</h1>
       {/*注释...*/}
        </div>,
       document.getElementById('example')
   );
   ```

2. `class`需要使用`className`代替

3. `style`中必须使用对象设置，例如：
```jsx
// 正确的写法
<div style={{background: 'red'}}></div>
```

4. 数组

   > JSX 允许在模版中插入数据，数据自动展开全部成员
   >
   > {} 只能用来放js表达式，而不能放语句（if for） 在语句中是可以去操作JSX

   ```
   var arr = [
     <h1>小丞</h1>,
     <h2>同学</h2>,
   ];
   ReactDOM.render(
     <div>{arr}</div>,
     document.getElementById('example')
   );
   ```

   案例：

   ```
   <div id = "test"></div>
   <script type="text/babel">
       // 模拟数据
       const data = ['Angular', 'React', 'Vue']
       const VDOM = (
           <div>
               <h1>前端js框架列表</h1>
               <ul>
                   {
                       data.map((item, index) => {
                           return <li key={index}>{item}</li>
                       })
                   }
               </ul>
           </div>
       )
       ReactDOM.render(VDOM, document.getElementById("test"))
   </script>
   ```



# 面向组件

## 组件的定义

当应用是以多组件的方式实现，这个应用就是一个组件化的应用

只有两种方式的组件

- 函数组件
- 类式组件

**注意：**

1. 组件名必须是首字母大写（React 会将以小写字母开头的组件视为原生 DOM 标签。例如，< div />`代表 HTML 的 div 标签，而`< Weclome /> 则代表一个组件，并且需在作用域内使用 `Welcome`）
2. 虚拟DOM元素只能有一个根元素
3. 虚拟DOM元素必须有结束标签 `< />`

**渲染类组件标签的基本流程**

1. React 内部会创建组件实例对象
2. 调用`render()`得到虚拟 DOM ,并解析为真实 DOM
3. 插入到指定的页面元素内部

### 函数式组件

### 类式组件

### 组合组件

### 提取组件

