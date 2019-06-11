<template>
  <div class="w-code1">
    <div class="w-code1-qrcode" id="qrcode">
      <img class="w-code1-image" src="http://pic1.cxtuku.com/00/07/42/b03695caf529.jpg">
    </div>
    <dir class="w-button1" @click="btnClick1">click1</dir>
    <dir class="w-button2" @click="btnClick2">click2</dir>
  </div>
</template>

<script>
// import QRCode from "qrcodejs";
import QRCode from "qrcodejs2";

export default {
  name: "QRCode",
  data() {
    return {
      str: "1",
      count: 0,
      instance: null
    };
  },
  created: function() {},
  mounted: function() {
    this.draw();
  },
  methods: {
    draw() {
      if (this.instance) {
        this.instance.makeCode(this.str);
        // this.instance.clear();
      } else {
        this.instance = new QRCode("qrcode", {
          width: 200,
          height: 200, // 高度
          text: "56663159", // 二维码容
          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          colorDark: "#000000", // 前景色
          colorLight: "#ffffff" // 背景色
        });
      }
      this.str = this.str + this.count.toString();
    },
    btnClick1() {
      ++this.count;
      this.draw();
      console.log(this.count);
    },
    btnClick2() {
      this.instance.clear();
      // this.instance = null;
    }
  },
  computed: {}
};
</script>

<style scoped>
.w-code1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.w-code1-qrcode {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-code1-image {
  position: absolute;
  width: 40px;
  height: 40px;
}
.w-button1 {
  margin-top: 250px;
  width: 60px;
  height: 35px;
  background-color: blue;
}
.w-button2 {
  margin-top: 20px;
  width: 60px;
  height: 35px;
  background-color: red;
}
</style>
