<template>
<div>
  <el-button type="primary" @click="dialogFormVisible = true ">添加员工</el-button>
  <el-row :gutter="20">
    <el-col
      :span="5"
      v-for="(user, index) in staff_info"
      :key="index"
      style="margin-top: 10px">
      <el-button type="text" @click="get_staff(user)">
      <el-card shadow="hover" body-style="{ padding:0px }">
        <div slot="header" align="center" class="clearfix">
          <i class="el-icon-s-custom"></i>
          {{ user.staffName }}
        </div>
        <div>
          <el-image slot="reference" :src="user.staffPic"></el-image>
        </div>
        <div align="center">
        </div>
      </el-card>
    </el-button>
    </el-col>

    <el-dialog
    title="员工详细信息"
    :visible.sync="dialogVisible"
    width="60%"
    :before-close="handleClose">
      <el-form size="small"  label-width="100px">
        <el-form-item label="用户图片">
            <el-image
            style="width: 140px; height: 200px"
            :src="user.staffPic"
            ></el-image>
          </el-form-item>

          <el-form-item label="用户姓名">
            <el-input v-model="user.staffName" disabled></el-input>
          </el-form-item>

          <el-form-item label="用户编号">
            <el-input v-model="user.userId" disabled></el-input>
          </el-form-item>

          <el-form-item label="用户性别">
            <el-radio-group v-model="user.staffSex" disabled>
              <el-radio label="女">女</el-radio>
              <el-radio label="男">男</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="职位编号">
            <el-input v-model="user.statusId" disabled></el-input>
          </el-form-item>

          <el-form-item label="职位名称">
            <el-input v-model="user.status_name" disabled></el-input>
          </el-form-item>

          <el-form-item label="年龄">
            <el-input v-model="user.staffAge" disabled></el-input>
          </el-form-item>

          <el-form-item label="出生日期">
            <div class="block">
              <el-date-picker
              v-model="user.staffBirthday"
              type="date"
              placeholder="选择日期"
              disabled>
              </el-date-picker>
            </div>
          </el-form-item>

          <el-form-item label="身份证号码">
            <el-input v-model="user.staffIdnum" disabled></el-input>
          </el-form-item>

          <el-form-item label="民族">
            <el-input v-model="user.staffNation" disabled></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input v-model="user.staffPhone" disabled></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="user.staffEmail" disabled></el-input>
          </el-form-item>

          <el-form-item label="QQ">
            <el-input v-model="user.staffQq" disabled></el-input>
          </el-form-item>

          <el-form-item label="籍贯">
            <el-input v-model="user.staffNaplace" disabled></el-input>
          </el-form-item>

          <el-form-item label="教育经历">
            <el-input type="textarea" :rows="2" v-model="user.staffEdu" disabled></el-input>
          </el-form-item>

            <el-form-item label="工作经历">
            <el-input type="textarea" :rows="2" v-model="user.staffJob" disabled></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form ref="form" style="width:500px; margin:0 auto;text-align:center;" label-width="80px">
        <el-form-item label="姓名">
                <el-input v-model="staffName"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <template>
                    <el-radio v-model="staffSex" label="女">女</el-radio>
                    <el-radio v-model="staffSex" label="男">男</el-radio>
                </template>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker type="date" placeholder="选择日期" v-model="staffBirthday" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="职位">
                <el-select v-model="statusId" placeholder="请选择">
                    <el-option
                    v-for="item in statusLevels"
                    :key="item.statusId"
                    :label="item.statusType"
                    :value="item.statusId">
                    </el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="联系电话">
                <el-input v-model="staffPhone"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
                <el-input v-model="staffQq"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="staffEmail"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="staffIdnum"></el-input>
            </el-form-item>
            <el-form-item label="籍贯">
                <el-input v-model="staffNaplace"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                <el-input v-model="staffNation"></el-input>
            </el-form-item>
            <el-form-item label="出生地">
                <el-input v-model="staffBirthplace"></el-input>
            </el-form-item>
            <el-form-item label="现居地">
                <el-input v-model="staffResidence"></el-input>
            </el-form-item>
            <el-form-item label="教育经历">
                <el-input v-model="staffEdu"></el-input>
            </el-form-item>
            <el-form-item label="工作经历">
                <el-input v-model="staffJob"></el-input>
            </el-form-item>
            <el-row>
            <el-button type="success" plain @click="addStaff">添加</el-button>
            </el-row>
      </el-form>
    </el-dialog>
  </el-row>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      staff_info: [],
      dialogVisible: false,
      user: {},
      dialogFormVisible: false,
      staffName: '',
      staffSex: '',
      statusId: '',
      staffPhone: '',
      staffQq: '',
      staffEmail: '',
      staffNaplace: '',
      staffIdnum: '',
      staffNation: '',
      staffBirthplace: '',
      staffResidence: '',
      staffEdu: '',
      staffJob: '',
      staffBirthday: '',
      statusLevels: []
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    get_staff (row) {
      this.dialogVisible = true
      this.user = row
    },
    getStaffs () {
      axios.post('lclgl/getStaffs')
      .then(res => {
        this.staff_info = res.data.staffs
      })
      .catch(err => {
        console.log(err)
      })
    },
    addStaff () {
      let param = new FormData()
      param.append('staffName', this.staffName)
      param.append('staffSex', this.staffSex)
      param.append('statusId', this.statusId)
      param.append('staffPhone', this.staffPhone)
      param.append('staffQq', this.staffQq)
      param.append('staffEmail', this.staffEmail)
      param.append('staffNaplace', this.staffNaplace)
      param.append('staffIdnum', this.staffIdnum)
      param.append('staffNation', this.staffNation)
      param.append('staffBirplace', this.staffBirthplace)
      param.append('staffResidence', this.staffResidence)
      param.append('staffEdu', this.staffEdu)
      param.append('staffJob', this.staffJob)
      param.append('staffBirthday', this.staffBirthday)
      axios.post('lclgl/addStaff', param)
      .then(res => {
          if (res.data.status === -1) {
              this.$message.error('添加失败！')
          } else {
              this.$message({
                  message: '添加成功！',
                  type: 'success'
              })
              this.$router.push('/E_information')
          }
      })
      .catch(err => {
          console.log(err)
      }) 
    }
  },
  mounted () {
    this.getStaffs()
     axios.post('lclgl/getStatusLevels')
        .then(res => {
            if (res.data.status !== -1) {
                this.statusLevels = res.data.statusLevels
            }
        })
        .catch(err => {
            console.log(err)
        })
  }
}
</script>

<style>

</style>
