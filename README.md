# react-firebase-hooks
ToDos without classes. Only Hooks!

1. npm install node-sass react-router-dom bootstrap axios

2. add in index.scss:
~~~javascript
@import "~bootstrap/scss/bootstrap";
~~~
and testing boostrap as
~~~javascript
<div className="container">Test</div>
~~~

3. create routing for 2 pages: Home & About:
~~~javascript
<BrowserRouter>
	<div className="container pt-4">
		<Switch>
			<Route path={'/'} exact component={Home}/>
			<Route path={'/about'} component={About}/>
		</Switch>
	</div>
</BrowserRouter>
~~~

4. create Navbar with Navlink-s:
~~~javascript
<NavLink className="nav-link" to="/" exact>Главная</NavLink>
<NavLink className="nav-link" to="/about">Инфо</NavLink>
~~~

5. add content ( Jumbotron ) to About page

6. create Notes.js and a list of 3 items
~~~javascript
const notes = new Array( 3 )
		.fill('')
		.map( (_, i) => ({id: i, title: `Note ${i + 1}`}) )
~~~

7. create button (for each item) to delete this item

8. add current date to item
~~~javascript
<span>{new Date().toLocaleDateString()}</span>
~~~

9. create component Alert (the type of alert will be transmitted dynamically or return NULL)

10. create AlertState, alertReducer, alertContext and types and AlertState wrapped all components in App

11. add logic...

12. create a local state in Form.js and show and remove alert
