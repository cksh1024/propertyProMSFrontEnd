<template>
  <div>
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
          {{ user.user_name }}
        </div>
        <div>
          <el-image slot="reference" :src="user.user_pic"></el-image>
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
            :src="user.user_pic"
            ></el-image>
          </el-form-item>

          <el-form-item label="用户姓名">
            <el-input v-model="user.user_name" disabled></el-input>
          </el-form-item>

          <el-form-item label="用户编号">
            <el-input v-model="user.user_id" disabled></el-input>
          </el-form-item>

          <el-form-item label="用户性别">
            <el-radio-group v-model="user.staff_sex" disabled>
              <el-radio label="女">女</el-radio>
              <el-radio label="男">男</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="职位编号">
            <el-input v-model="user.status_id" disabled></el-input>
          </el-form-item>

          <el-form-item label="职位名称">
            <el-input v-model="user.status_name" disabled></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input v-model="user.staff_phone"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input v-model="user.staff_phone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="user.staff_email"></el-input>
          </el-form-item>

          <el-form-item label="教育经历">
            <el-input type="textarea" :rows="2" v-model="user.staff_edu"></el-input>
          </el-form-item>

            <el-form-item label="工作经历">
            <el-input type="textarea" :rows="2" v-model="user.staff_job"></el-input>
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
export default {
  data () {
    return {
      staff_info: [{
        user_id: 2020001,
        status_id: 101,
        status_name: '老板',
        user_name: '史蒂夫',
        user_pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        staff_sex: '男',
        staff_phone: 18084042667,
        staff_qq: 1067970043,
        staff_email: '1067970043@qq.com',
        staff_idnum: '500381200001311214',
        staff_naplace: '',
        staff_nation: '',
        staff_birplace: '',
        staff_residence: '',
        staff_edu: '',
        staff_job: ''
      }, {
        user_id: 2020201,
        status_id: 101,
        user_name: '王小美',
        status_name: '前台',
        user_pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        staff_sex: '男',
        staff_phone: 18084042667,
        staff_qq: 1067970043,
        staff_email: '1067970043@qq.com',
        staff_idnum: '500381200001311214',
        staff_naplace: '',
        staff_nation: '',
        staff_birplace: '',
        staff_residence: '',
        staff_edu: '',
        staff_job: ''
      }, {
        user_id: 2020301,
        status_id: 101,
        user_name: '王伟',
        status_name: '模型主管',
        user_pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        staff_sex: '男',
        staff_phone: 18084042667,
        staff_qq: 1067970043,
        staff_email: '1067970043@qq.com',
        staff_idnum: '500381200001311214',
        staff_naplace: '',
        staff_nation: '',
        staff_birplace: '',
        staff_residence: '',
        staff_edu: '',
        staff_job: ''
      } ],
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
  }
}
</script>

<style>

</style>
