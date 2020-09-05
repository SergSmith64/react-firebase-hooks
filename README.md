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
* <NavLink className="nav-link" to="/" exact>Главная</NavLink>
* <NavLink className="nav-link" to="/about">Инфо</NavLink>
