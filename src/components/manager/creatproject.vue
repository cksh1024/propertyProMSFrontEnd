<template>
  <div style="text-align:center">
      <el-input
            placeholder="请输入项目名称"
            class="manager_input"
            v-model="pro_name"
            >
          </el-input>
          <br><br>
            <el-input
            placeholder="请输入客户名称"
            class="manager_input"
            v-model="cus_name"
            >
          </el-input>
          <br><br>
          <el-upload
            class="upload-demo"
            ref="upload"
            multiple
            :action="action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :with-credentials='true'>
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">创建项目</el-button>
          </el-upload>
          <h1>已有项目</h1>
          <el-table
            ref="singleTable"
            :data="tableData"
            style="width: 660px;margin:0 auto;">
            <el-table-column
              property="proId"
              label="项目编号"
              width="150">
            </el-table-column>
            <el-table-column
              property="proName"
              label="项目名称"
              width="150">
            </el-table-column>
            <el-table-column
              property="proCondition"
              label="项目状况"
              width="150">
            </el-table-column>
            <el-table-column
              property="stageCondition"
              label="阶段状况">
            </el-table-column>
          </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            pro_name: '',
            cus_name: '',
            fileList: [],
            action: '',
            tableData: []
        }
    },
    methods: {
        createPro () {
            let param = new FormData()
            param.append('pro_name', this.pro_name)
            param.append('cus_name', this.cus_name)
            axios.post('lclgl/createproject', param)
            .then(res => {
                this.$message.success(res.data.msg)
                this.showmanagePro()
            })
      },
      showmanagePro () {
            axios.post('lclgl/showmanagePro')
            .then(res => {
                this.tableData = res.data
            })
        },
      submitUpload () {
            this.createPro()
            this.action = `http://localhost:8080/lclgl/mkpro/${this.pro_name}`
            this.$nextTick(() => {
                 this.$refs.upload.submit()
            })
      },
        handleRemove (file, fileList) {
            console.log(file, fileList)
      },
        handlePreview (file) {
            console.log(file)
      }
    },
    mounted () {
        this.showmanagePro()
    }
}
</script>

<style>
.manager_input .el-input__inner {
        border-radius: 30px;
        font-size: 15px;
        padding: 25px 20px;
        width: 300px;
    }
</style>
