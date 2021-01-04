<template>
  <div>
    <el-button>添加员工</el-button>
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
            <el-input v-model="user.staffPhone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="user.staffEmail"></el-input>
          </el-form-item>

          <el-form-item label="QQ">
            <el-input v-model="user.staffQq"></el-input>
          </el-form-item>

          <el-form-item label="籍贯">
            <el-input v-model="user.staffNaplace"></el-input>
          </el-form-item>

          <el-form-item label="教育经历">
            <el-input type="textarea" :rows="2" v-model="user.staffEdu"></el-input>
          </el-form-item>

            <el-form-item label="工作经历">
            <el-input type="textarea" :rows="2" v-model="user.staffJob"></el-input>
          </el-form-item>

        </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
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
      user: {}
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
    }
  },
  mounted () {
    axios.post('lclgl/getStaffs')
    .then(res => {
      this.staff_info = res.data.staffs
      console.log(this.staff_info)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
