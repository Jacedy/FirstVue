<template>
  <!-- <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>文档标题</title>
</head>
 
<body>
文档内容
</body>

<script>
js脚本
</script>
 
  </html>-->
  <div id="htmltest">
    <!-- 在新窗口打开链接 -->
    <a href="http://www.runoob.com/" target="_blank">访问菜鸟教程!</a>

    <p>
      无边框的图片链接:
      <a href="http://www.runoob.com/html/html-tutorial.html">
        <img border="0" src="smiley.gif" alt="HTML 教程" width="32" height="32">
      </a>
    </p>

    <p>
      这是一个电子邮件链接：
      <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">发送邮件</a>
    </p>
    <p>
      <b>注意:</b> 单词之间空格使用 %20 代替，以确保浏览器可以正常显示文本。
    </p>

    <!-- style属性 -->
    <!-- 水平居中的text-align:center; 和 margin:0 auto;
    这两种方法都是用来水平居中的，前者是针对父元素进行设置而后者则是对子元素。他们起作用的首要条件是子元素必须没有被float影响，否则一切都是无用功。-->
    <p
      style="background-color:yellow; font-family:verdana; font-size:20; color:red; width:300px; height:30px; margin:0 auto;"
    >style样式</p>
    <br>

    <!-- 表格 -->
    <table border="1" style="margin:0 auto;">
      <!-- border='0'无边框 -->
      <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
      </tr>
      <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
      </tr>
    </table>

    <h4>水平标题:</h4>
    <table border="1" style="margin:0 auto;">
      <tr>
        <th>Name</th>
        <th>Telephone</th>
        <th>Telephone</th>
      </tr>
      <tr>
        <td>Bill Gates</td>
        <td>555 77 854</td>
        <td>555 77 855</td>
      </tr>
    </table>

    <h4>垂直标题:</h4>
    <table border="1" style="margin:0 auto;">
      <tr>
        <th>First Name:</th>
        <td>Bill Gates</td>
      </tr>
      <tr>
        <th>Telephone:</th>
        <td>555 77 854</td>
      </tr>
      <tr>
        <th>Telephone:</th>
        <td>555 77 855</td>
      </tr>
    </table>

    <!-- 无序列表 -->
    <ul>
      <li>Coffee</li>
      <li>Milk</li>
    </ul>

    <!-- 有序列表 -->
    <ol>
      <li>Coffee</li>
      <li>Milk</li>
    </ol>

    <!-- 自定义列表 -->
    <dl>
      <dt>Coffee</dt>
      <dd>- black hot drink</dd>
      <dt>Milk</dt>
      <dd>- white cold drink</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "htmltest",
  data() {
    return {
      newMessage: ""
    };
  }
};
</script>

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
</style>
