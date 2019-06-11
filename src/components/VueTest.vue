<template>
  <div id="test">
    <h1>{{msg}}</h1>
    <!-- v-model：双向数据绑定，会更新，常用于 input,checkbox,radio,select -->
    <input type="text" v-model="msg">
    <br>

    <p style="white-space: pre">{{ message2 }}</p>
    <!-- 空格会被保留 -->
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
    <br>

    <!-- v-once：数据绑定，不会更新 -->
    <span v-once>这个将不会改变: {{ msg }}</span>

    <!-- v-html：输出HTML代码 -->
    <p>Using mustaches: {{message}}</p>
    <p>
      Using v-html:
      <span v-html="message"></span>
    </p>

    <select v-model="selected" multiple>
      <option selected>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selected | json }}</span>
    <br>

    <!-- v-bind：HTML属性中的值应使用v-bind指令 -->
    {{5+5}}
    <br>
    {{ ok ? 'YES' : 'NO' }}
    <br>
    {{ message.split('').reverse().join('') }}
    <div :id="'list-' + id">中文文档</div>
    <!-- <div v-bind:id="'list-' + id">中文文档</div> -->
    <!-- v-on：事件绑定 -->
    <button v-on:click="greet">Greet</button>
    <!-- Alt + C -->
    <input @keyup.alt.67="clear">
    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>
    <br>
    <button @click="reverseMessage">反转字符串</button>
    <br>
    <!-- <button v-on:click="reverseMessage">反转字符串</button><br> -->
    <div>
      <input type="button" value="clickme" v-on:click="item+=1">
      <input type="button" value="clickme" v-on:click="greet(message2)">
      <input type="button" value="clickme" v-on:click="greet(message2,$event)">
      <input type="button" value="clickme" v-on:click="greet($event)">
      <div @click="show1($event)">
        <div @click="show2($event)">点击我呀</div>
      </div>
      <div @click="show1()">
        <!-- 阻止冒泡 -->
        <div @click.stop="show2()">点击我呀</div>
        <!-- 阻止默认行为 -->
        <div @contextmenu.prevent="show2()">右键点击我呀</div>
        <!-- 阻止单击事件继续传播 -->
        <!-- <a v-on:click.stop="doThis"></a> -->
        <!-- 提交事件不再重载页面 -->
        <!-- <form v-on:submit.prevent="onSubmit"></form> -->
        <!-- 修饰符可以串联 -->
        <!-- <a v-on:click.stop.prevent="doThat"></a> -->
        <!-- 只有修饰符 -->
        <!-- <form v-on:submit.prevent></form> -->
        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
        <!-- <div v-on:click.capture="doThis">...</div> -->
        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <!-- <div v-on:click.self="doThat">...</div> -->
        <!-- 点击事件将只会触发一次 -->
        <!-- <a v-on:click.once="doThis"></a> -->
      </div>

      <div>{{item}}</div>
    </div>
    {{ msg | capitalize }}
    <br>
    {{ reversedMessage}}
    <br>

    <!-- v-fi：条件语句 -->
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>

    <!-- v-for：循环语句 -->
    <ol>
      <li v-for="site in sites" :key="site.name">name: {{site.name}}</li>
    </ol>
    <ul>
      <li v-for="(key, index) in sites" :key="index">{{ key }} : {{ index }}</li>
    </ul>

    <div id="computed_props">
      千米 :
      <input type="text" v-model="kilometers">
      米 :
      <input type="text" v-model="meters">
    </div>

    <!-- 样式绑定 -->
    <div id="app">
      <div v-bind:class="{ active1: isActive }"></div>
      <div v-bind:class="classObject"></div>
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">中文文档</div>
      <div v-bind:style="[baseStyles, overridingStyles]">中文文档</div>
      <br>
    </div>

    <!-- 单选 -->
    <input type="radio" id="runoob" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" id="google" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>

    <!-- 复选 -->
    <!-- "for" 属性可把 label 绑定到另外一个元素。请把 "for" 属性的值设置为相关元素的 id 属性的值。 -->
    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <input type="checkbox" id="selectall" @click="changeAllChecked">
    <label for="selectall">全选</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>
    <br>
    <br>

    <!-- 下拉选择 -->
    <select v-model="selected" name="fruit">
      <option value>选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>
    <div id="output">选择的网站是: {{selected}}</div>
    <br>

    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model.lazy="msg">
    <!-- 将输入转换为Number类型 -->
    <input v-model.number="age" type="number">
    <!-- 自动过滤用户输入的首尾空格 -->
    <input v-model.trim="msg">
    <br>

    <!-- 子组件 -->
    <children @updateMsg="resetMsg" :message="message2"></children>

    <!-- 自定义指令 -->
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>

    <div v-runoob="{ color: 'green', text: '中文文档!' }"></div>
    <br>

    <!-- 跳转 -->
    <!-- 在template中页面跳转 -->
    <router-link :to="{path:'/elementui', query:{id:'2'}}">
      <!-- <router-link :to="{name:'/elementui', params:{id:2}}"> -->
      <!-- ??? -->
      <button class="btn btn-default">点击跳转</button>
    </router-link>
    <br>
    <!-- 在js中页面跳转 -->
    <button @click="jumpToE()">跳转</button>
    <br>
    <br>

    <!-- 动画 -->
    <button v-on:click="show = !show">点我</button>
    <transition name="fade">
      <p v-show="show" v-bind:style="styleobj">动画实例</p>
    </transition>
    <br>

    <button v-on:click="clock">开启定时器</button>
    <br>
  </div>
</template>

<script>
import children from "./Children";
export default {
  name: "Test",
  data() {
    return {
      msg: "eMy Vue.js App",
      message: "<p>Jacedy</p>",
      message2: "vuejs",
      searchText: "",
      checked: false,
      checkedNames: [],
      checkedArr: ["Runoob", "Taobao", "Google"],
      picked: "Runoob",
      selected: "",
      items: [{ message: "Foo" }, { message: "Bar" }],
      ok: true,
      seen: false,
      id: 1,
      sites: [
        { id: "1", name: "Runoob" },
        { id: "3", name: "Google" },
        { id: "2", name: "Taobao" }
      ],
      type: "C",
      kilometers: 0,
      meters: 0,
      isActive: true,
      error: {
        value: true,
        type: "fatal"
      },
      activeColor: "green",
      fontSize: 30,
      baseStyles: {
        color: "green",
        fontSize: "30px"
      },
      overridingStyles: {
        "font-weight": "bold"
      },
      show: true,
      styleobj: {
        fontSize: "30px",
        color: "red"
      },
      item: 1
    };
  },
  created: function() {
    // setInterval(this.timer, 1000);

    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.startTimeOut();
  },
  mounted: function() {
    // 动态改变数据，界面刷新数据
    this.sites.push({ id: "4", name: "jacedy" });
    this.$set(this.sites, 0, { id: "0", name: "jason" });
  },
  // methods 在重新渲染的时候，函数总会重新调用执行
  methods: {
    reverseMessage: function() {
      // 反转字符串
      this.msg = this.msg
        .split("")
        .reverse()
        .join("");
      console.log(this.msg);
    },
    greet: function(event) {
      // `this` 在方法里指当前 Vue 实例
      alert("Hello " + this.msg + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
    changeAllChecked: function() {
      this.checked = !this.checked;
      if (this.checked) {
        this.checkedNames = this.checkedArr;
      } else {
        this.checkedNames = [];
      }
    },
    resetMsg(newData) {
      this.msg = newData;
    },
    jumpToE() {
      this.$router.push({ path: "/elementui", query: { id: "2" } });
      // this.$router.push({name: '/elementui', params:{id: '2'}})    // ???

      // this.$route.query.name
    },
    // Ajax Get请求
    get: function() {
      // 发送get请求（不带参数）
      this.$http.get("/try/ajax/ajax_info.txt").then(
        function(res) {
          document.write(res.body);
        },
        function() {
          console.log("请求失败处理");
        }
      );
      // 发送get请求（带参数）
      this.$http.get("get.php", { a: 1, b: 2 }).then(
        function(res) {
          document.write(res.body);
        },
        function(res) {
          console.log(res.status);
        }
      );
    },
    post: function() {
      //发送 post 请求
      this.$http
        .post(
          "/try/ajax/demo_test_post.php",
          { name: "中文文档", url: "http://www.runoob.com" },
          { emulateJSON: true }
        )
        .then(
          function(res) {
            document.write(res.body);
          },
          function(res) {
            console.log(res.status);
          }
        );
    },
    // 定时器的使用
    clock: function() {
      setInterval(() => {
        this.kilometers++;
      }, 1000);
    },
    timer: function() {
      this.meters++;
    },
    startTimeOut() {
      this.timeOut = setTimeout(() => {
        this.msg = "Hi Jacedy";
      }, 2000);
    },
    show1: function(ev) {
      alert(1);
    },
    show2: function(ev1) {
      ev1.cancelBubble = true; // 原生js阻止冒泡
      alert(2);
    }
  },
  // computed 基于它的依赖缓存，只有依赖发生改变才会重新取值
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    site: {
      // getter
      get: function() {
        return this.name + " " + this.url;
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(" ");
        this.name = names[0];
        this.url = names[names.length - 1];
      }
    },
    classObject: function() {
      return {
        base: true,
        active: this.isActive && !this.error.value,
        "text-danger": this.error.value && this.error.type === "fatal"
      };
    }
    //     timeOut: {
    //       set (val) {
    //           this.$store.state.timeout.compileTimeout = val;
    //       },
    //       get() {
    //           return this.$store.state.timeout.compileTimeout;
    //       }
    //     },
  },
  // 过滤器
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  // 监听属性
  watch: {
    kilometers: function(val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function(val) {
      this.kilometers = val / 1000;
      this.meters = val;
    },
    checkedNames: function() {
      if (this.checkedNames.length == this.checkedArr.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  },
  components: {
    children
  },
  // 注册一个局部的自定义指令
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
      /*
        bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
        inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
        update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
        componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
        unbind: 只调用一次， 指令与元素解绑时调用。
      */
    },
    runoob: {
      bind: function(el, binding) {
        // 简写方式设置文本及背景颜色
        el.innerHTML = binding.value.text;
        el.style.backgroundColor = binding.value.color;
      }
    }
  }
};
/*
// 调用 setter， vm.name 和 vm.url 也会被对应更新
vm.site = '中文文档 http://www.runoob.com';
document.write('name: ' + vm.name);
document.write('<br>');
document.write('url: ' + vm.url);
*/
</script>

<!--
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});

-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active1 {
  width: 100px;
  height: 100px;
  background: green;
  margin: 0 auto;
}
.base {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.active {
  background: green;
}
.text-danger {
  background: red;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}
/*
  Vue在元素显示与隐藏的过渡中，提供了 6 个 class 来切换：
v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
*/

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

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
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
</style>
