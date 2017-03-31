import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import vrpng from  '../source/vr.png';
import myVideo from '../source/01.mp4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>
          	<a href="/">
          		<img src={vrpng} alt={vrpng}/>
	          	<span>HTML5Pano</span>
	          	<span>®</span>
          	</a>
          </h1>
          <nav id="nav">
            <ul>
              <li className="special">
                <a href="#menu" className="menuToggle">
                		<span>导航</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section >
              <video src={myVideo}  >
              
              </video>              
            <div className='overlay'>
            	
            </div>
            <div className='container'>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            	 <dl>
	            	 	<dt><img src={vrpng} alt={vrpng} />一键智能创建三维全景项目</dt>
	            	 	<dd>
	            	 		只需将全景图片上传到<span>HTML5Pano</span><span>®</span>平台，几秒种内就会自动生成一个完整的三维全景项目，无需更多复杂操作。
	            	 	</dd>
            	 </dl>
            </div>
            <div className='section_footer'>
            	<div className='footer_inner'>
            		<div className='section_footer_left'>
									<h2><span>HTML5Pano</span><span>®</span></h2>
									<p>想你所想的，做你想要的，一切尽在其中！</p>
								</div>
								<ul className="section_footer_right">
									<li><a href="/pano_create.html"  title="创建三维全景项目">创建三维全景项目</a></li>
									<li><a href="/html5pano_demo.html" title="HTML5Pano平台功能演示">查看演示(DEMO)</a></li>
								</ul>
            	</div>
            		
            </div>
        </section>
        <footer>
          <ul className="icons">
              <li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=4142637&amp;site=HTML5Pano&amp;menu=yes" className="icon fa-qq" target="_blank"><span className="label">QQ</span></a></li>
              <li><a href="tel:09318372508" className="icon fa-phone-square"><span className="label">固定电话</span></a></li>
              <li><a href="tel:13893603515" className="icon fa-mobile"><span className="label">移动电话</span></a></li>
              <li><a href="mailto:html5pano@163.com" className="icon fa-envelope-o"><span className="label">邮件</span></a></li>
          </ul>
          <ul className="copyright">
              <li>© 2014-2017　<span>HTML5Pano</span><span>®</span></li>
              <li><a href='http://www.html5pano.com/pano/2016621/html5pano/92fc6d26a87dfc20/vtour/'>查看一个导游图</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
