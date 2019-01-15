<template>
  <div id="test2">
    <!-- 实例一 -->
    <!-- v-cloak 隐藏未编译的变量，直到 Vue 实例准备就绪。 -->
    <form id="main" v-cloak>
      <h1>Services</h1>
      <ul>
        <!-- 循环输出 services 数组, 设置选项点击后的样式 -->
        <li
          v-for="service in services"
          :key="service.price"
          v-on:click="toggleActive(service)"
          v-bind:class="{ 'active': service.active}"
        >
          <!-- 显示订单中的服务名，价格
          Vue.js 定义了货币过滤器，用于格式化价格-->
          {{service.name}}
          <span>{{service.price | currency}}</span>
        </li>
      </ul>

      <div class="total">
        <!-- 计算所有服务的价格，并格式化货币 -->
        Total:
        <span>{{total() | currency}}</span>
      </div>
    </form>

    <!-- 实例二 -->
    <!-- 激活的菜单样式为  active 类 -->
    <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->
    <nav v-bind:class="active" v-on:click.prevent>
      <!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->
      <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
      <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
      <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
      <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
    </nav>
    <!-- 以下 "active" 变量会根据当前选中的值来自动变换 -->
    <p>
      您选择了
      <b>{{active}} 菜单</b>
    </p>

    <!-- 实例三 -->
    <form id="main" v-cloak>
      <div class="bar">
        <!-- searchString 模型与文本域创建绑定 -->
        <input type="text" v-model="searchString" placeholder="输入搜索内容">
      </div>
      <ul>
        <!-- 循环输出数据 -->
        <li v-for="article in filteredArticles" :key="article.title">
          <a v-bind:href="article.url">
            <img v-bind:src="article.image">
          </a>
          <p>{{article.title}}</p>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: "children",
  props: ["channel"],
  data() {
    return {
      active: "home",
      newChannel: null,
      // 定义模型属性 the model properties. The view will loop
      // 视图将循环输出数组的数据
      services: [
        {
          name: "Web Development",
          price: 300,
          active: true
        },
        {
          name: "Design",
          price: 400,
          active: false
        },
        {
          name: "Integration",
          price: 250,
          active: false
        },
        {
          name: "Training",
          price: 220,
          active: false
        }
      ],
      searchString: "",
      // 数据模型，实际环境你可以根据 Ajax 来获取
      articles: [
        {
          title: "What You Need To Know About CSS Variables",
          url: "http://www.runoob.com/css/css-tutorial.html",
          image: "http://static.runoob.com/images/icon/css.png"
        },
        {
          title: "Freebie: 4 Great Looking Pricing Tables",
          url: "http://www.runoob.com/html/html-tutorial.html",
          image: "http://static.runoob.com/images/icon/html.png"
        },
        {
          title:
            "20 Interesting JavaScript and CSS Libraries for February 2016",
          url: "http://www.runoob.com/css3/css3-tutorial.html",
          image: "http://static.runoob.com/images/icon/css3.png"
        },
        {
          title: "Quick Tip: The Easiest Way To Make Responsive Headers",
          url: "http://www.runoob.com/css3/css3-tutorial.html",
          image: "http://static.runoob.com/images/icon/css3.png"
        },
        {
          title: "Learn SQL In 20 Minutes",
          url: "http://www.runoob.com/sql/sql-tutorial.html",
          image: "http://static.runoob.com/images/icon/sql.png"
        },
        {
          title: "Creating Your First Desktop App With HTML, JS and Electron",
          url: "http://www.runoob.com/js/js-tutorial.html",
          image: "http://static.runoob.com/images/icon/html.png"
        }
      ]
    };
  },
  methods: {
    func() {
      this.newChannel = this.newChannel;
    },
    toggleActive: function(s) {
      s.active = !s.active;
    },
    total: function() {
      var total = 0;

      this.services.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });

      return total;
    },
    makeActive: function(item) {
      // 模型改变，视图会自动更新
      this.active = item;
    }
  },
  filters: {
    currency: function(value) {
      return "$" + value.toFixed(2);
    }
  },
  computed: {
    // 计算数学，匹配搜索
    filteredArticles: function() {
      var articles_array = this.articles,
        searchString = this.searchString;

      if (!searchString) {
        return articles_array;
      }

      searchString = searchString.trim().toLowerCase();

      articles_array = articles_array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(searchString) !== -1) {
          return item;
        }
      });

      // 返回过来后的数组
      return articles_array;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 在数据还未加载完时是会有闪烁的情况出现，解决方法也很简单，使用v-cloak,然后定义css */
/*  隐藏未编译的变量 */
[v-cloak] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font: 15px/1.3 "Open Sans", sans-serif;
  color: #5e5b64;
  text-align: center;
}

a,
a:visited {
  outline: none;
  color: #389dc1;
}

a:hover {
  text-decoration: none;
}

section,
footer,
header,
aside,
nav {
  display: block;
}

/*-------------------------
    	订单表单
    --------------------------*/

form {
  background-color: #61a1bc;
  border-radius: 2px;
  box-shadow: 0 1px 1px #ccc;
  width: 400px;
  padding: 35px 60px;
  margin: 50px auto;
}

form h1 {
  color: #fff;
  font-size: 64px;
  font-family: "Cookie", cursive;
  font-weight: normal;
  line-height: 1;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}

form ul {
  list-style: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 15px;
}

form ul li {
  padding: 20px 30px;
  background-color: #e35885;
  margin-bottom: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

form ul li span {
  float: right;
}

form ul li.active {
  background-color: #8ec16d;
}

div.total {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #fff;
}

div.total span {
  float: right;
}

/*-------------------------
		导航
	--------------------------*/

nav {
  display: inline-block;
  margin: 60px auto 45px;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact {
  background-color: #e35885;
}

p {
  font-size: 22px;
  font-weight: bold;
  color: #7d9098;
}

p b {
  color: #ffffff;
  display: inline-block;
  padding: 5px 10px;
  background-color: #c4d7e0;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 18px;
}

/*-------------------------
        搜索输入框
    --------------------------*/

.bar {
  background-color: #5c9bb7;

  background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
  background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
  background-image: linear-gradient(top, #5c9bb7, #5392ad);

  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  width: 400px;
  padding: 14px;
  margin: 45px auto 20px;
  position: relative;
}

.bar input {
  background: #fff no-repeat 13px 13px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);

  border: none;
  width: 100%;
  line-height: 19px;
  padding: 11px 0;

  border-radius: 2px;
  box-shadow: 0 2px 8px #c4c4c4 inset;
  text-align: left;
  font-size: 14px;
  font-family: inherit;
  color: #738289;
  font-weight: bold;
  outline: none;
  text-indent: 40px;
}

ul {
  list-style: none;
  width: 428px;
  margin: 0 auto;
  text-align: left;
}

ul li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}

ul li img {
  width: 60px;
  height: 60px;
  float: left;
  border: none;
}

ul li p {
  margin-left: 75px;
  font-weight: bold;
  padding-top: 12px;
  color: #6e7a7f;
}
</style>
