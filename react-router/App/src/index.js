import React from 'react'
import ReactDOM from 'react-dom';
import render from 'react-dom';
import { BrowserRouter,HashHistory,routes,Router,HashRouter,Match,Route,hashHistory,IndexLink } from 'react-router-dom'
import { Switch,SliderComponent } from 'react-router'
import App from '../src/containers/App'
import Comment2 from '../src/containers/Comment2'
import Comment3 from '../src/containers/Comment3'
import Good from '../src/containers/Good'



ReactDOM.render(
   <BrowserRouter>
       <div>
           <Route exact path="/" component={App}/>
            <Route exact path="/comment2" component={Comment2}/>
            {/* <Route exact path="/comment2/:commentId" component={Comment3}/> */}
            <Route exact path="/comment2/*" component={Comment3}/>
             <Route path="/good" component={Good}/>
         </div>
    </BrowserRouter>, document.getElementById('app')
);



// 注意：/comment2/:commentId 和 /comment2/* 是一样的

/*ReactDOM.render(
   <HashHistory>
       <SliderComponent>
           <Route path="/" component={App}/>
            <Route path="/comment2" component={Comment2}/>
         </SliderComponent>
    </HashHistory>, document.getElementById('app')
);*/

 {/*<Route path="/" component={App}/>
             <Route path="/comment2" component={Comment2}/>
             <Route path="/good" component={Good}/>*/}
//    <Route path="/" component={App}/>  <Route path="/" component={App}/>
/*ReactDOM.render((
    <HashRouter history={hashHistory}>
        <SliderComponent>
            <Route exact path="/" component={App}/>
             <Route path="/comment2" component={Comment2}/>
               <Route path="/good" component={Good}/>
           </SliderComponent>  
    </HashRouter>  
),document.getElementById('app')

)*/

/*注意：
（1）这里用的是router4.0,<BrowserRouter>中间只能插入一个 <Route>
（2）不能用以前的，要不然报错
解决方法：https://stackoverflow.com/questions/34501206/react-router-serverside-rendering-errors-warning-failed-proptype-required-pro
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
        <Route path="/comment" component={Comment}/>
        <Route path="/good" component={Good}/>
  </Router>, document.getElementById('app'))
  （3）上面的import 中ReactDOM 和 render 虽然引用同一个 react-dom，但是不能写成
  import{ ReactDOM，render } from react-dom
*/






/*render((
  <BrowserRouter>
          <Route path="/" component={App}/>
     </BrowserRouter>
), document.getElementById('app'))*/


// 未引入路由
/*ReactDOM.render(
   <Router history={hashHistory}>
    <Route path="/" component={App}/>
        <Route path="/comment" component={Comment}/>
        <Route path="/good" component={Good}/>
  </Router>, document.getElementById('app')
)*/