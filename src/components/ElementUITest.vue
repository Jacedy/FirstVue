<template>
  <div class="element">
      <p>{{ msg }}</p><br>
      <el-button >默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button><br><br>
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number><br><br>
      <el-input placeholder="el-input输入框" style="width=50%">a</el-input><br><br>
      <input placeholder="input输入框"><br><br>

      <div style="margin:0 auto;width:660px">
          <el-table :data="tableData" border>
          <el-table-column label="序号" width="100" prop="id"></el-table-column>
          <el-table-column label="姓名" width="160">
              <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" width="160">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.addr }}</p>
                        <div slot="reference" class="name-tap">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
          </el-table-column>
          <el-table-column label="操作" width="400">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleInfo(scope.$index, scope.row)">详细信息</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
      </div>

      <el-dialog title="详细信息" :visible.sync="centerDialogVisible" width="30%" center>
        <span>姓名: {{ person.name }}</span><br>
        <span>住址: {{ person.addr }}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Element',
  data () {
    return {
      msg: 'ElementUI Test',
      num1: 1,
      centerDialogVisible: false,
      person: {
          name: '',
          addr: ''
      },
      tableData: [{
          id: '1',
          name: '张三',
          sex: '男',
          addr: '长沙',
          visible: true
        }, {
          id: '2',
          name: '李四',
          sex: '女',
          addr: '武汉',
          visible: false
        }, {
          id: '3',
          name: '王五',
          sex: '男',
          addr: '四川',
          visible: false
        }]
    }
  },
  methods: {
      handleChange(value) {
          console.log(value);
      },
      handleInfo(index, row) {
          console.log(row);
          this.person.name = row.name;
          this.person.addr = row.addr;
          this.centerDialogVisible = true;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
