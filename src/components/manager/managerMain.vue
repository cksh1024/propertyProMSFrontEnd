<template>
    <div>
        <p>已有项目</p>
        <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
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
          <el-button type="primary" @click="selectPro">进入项目</el-button>
          <el-button type="primary" @click="CompletePro">完成项目</el-button>
          <p>项目回退到：</p>  
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" @click="proBack">确定</el-button>
          <hr>
          <p>未被分配的员工</p>
        <el-table
        ref="multipleTable"
        :data="tableData1"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="userId"
          label="工号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffName"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffSex"
          label="性别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="statusName"
          label="职位"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
        <el-button type="primary" @click="chooseworkers">确认选择</el-button>
        <hr>
        <p>管理员工</p>
        <el-table
        ref="multipleTable1"
        :data="tableData2"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange1">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="userId"
          label="工号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffName"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffSex"
          label="性别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="statusName"
          label="职位"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
        <el-button type="primary" @click="deleteworkers">删除员工</el-button>
        <hr>
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
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            options: [{
              value: '建模阶段',
              label: '建模阶段'
            }, {
              value: '渲染阶段',
              label: '渲染阶段'
            }, {
              value: '后期阶段',
              label: '后期阶段'
            }],
            tableData: [],
            currentRow: '',
            multipleSelection: [],
            multipleSelection1: [],
            tableData1: [],
            tableData2: [],
            pro_name: '',
            cus_name: '',
            fileList: [],
            action: '',
            value: ''
        }
    },
    methods: {
        handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleSelectionChange1 (val) {
        this.multipleSelection1 = val
      },
        handleCurrentChange (val) {
        this.currentRow = val
      },
        selectPro () {
            if (this.currentRow !== null && this.currentRow.length !== 0) {
              sessionStorage.setItem('proId', this.currentRow.proId)
              this.$router.replace('/Promanagement')
            } else {
              alert('请先选择项目')
            }
        },
        showmanagePro () {
            axios.post('lclgl/showmanagePro')
            .then(res => {
                console.log(res.data)
                this.tableData = res.data
            })
        },
        proBack () {
            if (this.currentRow !== null && this.currentRow.length !== 0) {
              let param = new FormData()
              param.append('stageType', this.value)
              param.append('selectedPro', JSON.stringify(this.currentRow))
              console.log(this.value, this.currentRow)
              axios.post('lclgl/proBack', param)
              .then(res => {
                alert(res.data.msg)
                this.showmanagePro()
              })
            } else {
                alert('请选择项目')
            }
        },
        CompletePro () {
            if (this.currentRow !== null && this.currentRow.length !== 0) {
              let param = new FormData()
              param.append('completepro', JSON.stringify(this.currentRow))
              axios.post('lclgl/CompletePro', param)
              .then(res => {
                alert(res.data.msg)
                this.showmanagePro()
              })
            } else {
              alert('请先选择项目')
            }
        },
        showfreeworkers () {
            axios.post('lclgl/staffShow')
            .then(res => {
                console.log(res.data)
                this.tableData1 = res.data
            })
      },
      showteamworkers () {
            axios.post('lclgl/teamworkers')
            .then(res => {
                console.log(res.data)
                this.tableData2 = res.data
            })
      },
      chooseworkers () {
            let parma = new FormData()
            parma.append('selectedworkers', JSON.stringify(this.multipleSelection))
            axios.post('lclgl/staffselect', parma)
            .then(res => {
                alert(res.data.msg)
                this.showfreeworkers()
                this.showteamworkers()
            })
      },
      deleteworkers () {
            let param = new FormData()
            param.append('selectedteamworkers', JSON.stringify(this.multipleSelection1))
            axios.post('lclgl/teamworkerselect', param)
            .then(res => {
                alert(res.data.msg)
                this.showfreeworkers()
                this.showteamworkers()
            })
      },
      createPro () {
            let param = new FormData()
            param.append('pro_name', this.pro_name)
            param.append('cus_name', this.cus_name)
            axios.post('lclgl/createproject', param)
            .then(res => {
                alert(res.data.msg)
                this.showmanagePro()
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
        this.showfreeworkers()
        this.showteamworkers()
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
