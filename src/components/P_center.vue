<template>
    <div>
    <el-card shadow="never">
      <div slot="header">个人信息设置</div>
      <div style="min-height:60vh;width:70%">
        <el-form size="small"  ref="form" :model="form" label-width="100px">

          <el-form-item label="用户图片">
            <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :fit="fit"></el-image>
          </el-form-item>

          <el-form-item label="用户姓名">
            <el-input v-model="form.staff_name"></el-input>
          </el-form-item>

          <el-form-item label="用户编号">
            <el-input v-model="form.user_id" disabled></el-input>
          </el-form-item>

          <el-form-item label="用户性别">
            <el-radio-group v-model="form.staff_sex">
              <el-radio label="女">女</el-radio>
              <el-radio label="男">男</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="职位名称">
            <el-input v-model="form.status_name" disabled></el-input>
          </el-form-item>

          <el-form-item label="出生日期">
            <div class="block">
              <el-date-picker
              v-model="form.birday"
              type="date"
              placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>

          <el-form-item label="手机">
            <el-input v-model="form.staff_phone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="form.staff_email"></el-input>
          </el-form-item>

          <el-form-item label="教育经历">
            <el-input type="textarea" :rows="2" v-model="form.staff_edu"></el-input>
          </el-form-item>

            <el-form-item label="工作经历">
            <el-input type="textarea" :rows="2" v-model="form.staff_job"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit()">保存设置</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user_id: 2020001,
        status_id: 101,
        status_name: '老板',
        team_id: '无团队',
        staff_pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        staff_name: '史蒂夫',
        staff_sex: '男',
        birday: '2000-01-31',
        staff_phone: 18084042667,
        staff_qq: 1067970043,
        staff_email: '1067970043@qq.com',
        staff_idnum: '500381200001311214',
        staff_naplace: '重庆',
        staff_nation: '汉族',
        staff_birplace: '重庆市',
        staff_residence: '某个山卡卡',
        staff_edu: '小学毕业',
        staff_job: '在腾讯扫过地'
      },
      url: '',
      fit: ''
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>

<style>

</style>
