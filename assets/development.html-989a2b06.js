import{_ as d,M as i,p as s,q as o,R as a,t as e,N as n,a1 as t}from"./framework-5866ffd3.js";const c={},l=a("h1",{id:"开发指南",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#开发指南","aria-hidden":"true"},"#"),e(" 开发指南")],-1),h=a("h2",{id:"前端",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#前端","aria-hidden":"true"},"#"),e(" 前端")],-1),u={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://nuxt.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/WongSaang/chatgpt-ui",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h3><p>安装最新稳定版 node.js，如果需要打包成 docker 镜像，还需要安装 docker。</p><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动开发服务" tabindex="-1"><a class="header-anchor" href="#启动开发服务" aria-hidden="true">#</a> 启动开发服务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打包成-docker-镜像" tabindex="-1"><a class="header-anchor" href="#打包成-docker-镜像" aria-hidden="true">#</a> 打包成 docker 镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -t image-name:latest .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="后端" tabindex="-1"><a class="header-anchor" href="#后端" aria-hidden="true">#</a> 后端</h2>`,11),m={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://djangoproject.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/WongSaang/chatgpt-ui-server",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="环境准备-1" tabindex="-1"><a class="header-anchor" href="#环境准备-1" aria-hidden="true">#</a> 环境准备</h3><p>安装Python、pip/pipenv，如果需要打包成 docker 镜像，还需要安装 docker。</p><h3 id="安装依赖-1" tabindex="-1"><a class="header-anchor" href="#安装依赖-1" aria-hidden="true">#</a> 安装依赖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动开发服务-1" tabindex="-1"><a class="header-anchor" href="#启动开发服务-1" aria-hidden="true">#</a> 启动开发服务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python manage.py runserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打包成-docker-镜像-1" tabindex="-1"><a class="header-anchor" href="#打包成-docker-镜像-1" aria-hidden="true">#</a> 打包成 docker 镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -t image-name:latest .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8);function f(k,y){const r=i("ExternalLinkIcon");return s(),o("div",null,[l,h,a("p",null,[e("所需技能："),a("a",u,[e("Vue"),n(r)]),e("、"),a("a",p,[e("Nuxt"),n(r)])]),a("p",null,[e("项目地址："),a("a",g,[e("https://github.com/WongSaang/chatgpt-ui"),n(r)])]),v,a("p",null,[e("所需技能："),a("a",m,[e("Python"),n(r)]),e("、"),a("a",x,[e("Django"),n(r)])]),a("p",null,[e("项目地址："),a("a",b,[e("https://github.com/WongSaang/chatgpt-ui-server"),n(r)])]),_])}const j=d(c,[["render",f],["__file","development.html.vue"]]);export{j as default};
