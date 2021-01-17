<template>
    <div>
    <el-card shadow="never">
      <div slot="header">个人信息设置</div>
      <div style="min-height:60vh;width:70%">
        <el-form size="small" :model="staffInfo" label-width="100px">

          <el-form-item label="用户图片">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:8080/lclgl/modifyAvatar"
              :show-file-list="false"
              ref="avatar"
              :on-success="handleAvatarSuccess"
              :with-credentials='true'
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="用户姓名">
            <el-input v-model="staffInfo.staffName"></el-input>
          </el-form-item>

          <el-form-item label="用户编号">
            <el-input v-model="staffInfo.userId" disabled></el-input>
          </el-form-item>

          <el-form-item label="用户性别">
            <el-radio-group v-model="staffInfo.staffSex">
              <el-radio label="女">女</el-radio>
              <el-radio label="男">男</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="职位名称">
            <el-input v-model="staffInfo.statusType" disabled></el-input>
          </el-form-item>

          <el-form-item label="出生日期">
            <div class="block">
              <el-date-picker
              v-model="staffInfo.staffBirthday"
              type="date"
              placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>

          <el-form-item label="手机">
            <el-input v-model="staffInfo.staffPhone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="staffInfo.staffEmail"></el-input>
          </el-form-item>

          <el-form-item label="教育经历">
            <el-input type="textarea" :rows="2" v-model="staffInfo.staffEdu"></el-input>
          </el-form-item>

            <el-form-item label="工作经历">
            <el-input type="textarea" :rows="2" v-model="staffInfo.staffJob"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="modifyStaff()">保存设置</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      staffInfo: {},
      imageUrl: '',
      status: 0
    }
  },
  methods: {
    modifyStaff () {
      let birthday = this.staffInfo.staffBirthday
      if (typeof this.staffInfo.staffBirthday !== 'string') {
        birthday = this.changeDateFormat(this.staffInfo.staffBirthday)
      } else {
        let splits = birthday.split('-')
        birthday = splits[0] + '-' + splits[1] + '-'
        let d = parseInt(splits[2]) + 1
        d = d < 10 ? '0' + d : d
        birthday += d
      }

      if (this.$refs.avatar.uploadFiles.length !== 0) this.$refs.avatar.submit()
      else this.status++

      let param = new FormData()
      param.append('staffName', this.staffInfo.staffName)
      param.append('staffSex', this.staffInfo.staffSex)
      param.append('statusId', this.staffInfo.statusId)
      param.append('staffPhone', this.staffInfo.staffPhone)
      param.append('staffQq', this.staffInfo.staffQq)
      param.append('staffEmail', this.staffInfo.staffEmail)
      param.append('staffNaplace', this.staffInfo.staffNaplace)
      param.append('staffIdnum', this.staffInfo.staffIdnum)
      param.append('staffBirplace', this.staffInfo.staffBirplace)
      param.append('staffResidence', this.staffInfo.staffResidence)
      param.append('staffNation', this.staffInfo.staffNation)
      param.append('staffEdu', this.staffInfo.staffEdu)
      param.append('staffJob', this.staffInfo.staffJob)
      param.append('staffId', this.staffInfo.userId)
      param.append('staffBirthday', birthday)
      axios.post('lclgl/modifyStaff', param)
      .then(res => {
          if (res.data.status === -1) {
            this.$message.error('修改失败！')
          } else {
            this.$message({
                message: '修改成功！',
                type: 'success'
            })
            if (++this.status === 2) this.$router.push('/superUser')
          }
      })
      .catch(err => {
          console.log(err)
      })
    },
    changeDateFormat (cellval) {
      if (cellval) {
        var date = new Date(cellval)
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        var currentDate = date.getDate() + 1
        currentDate = currentDate < 10 ? '0' + currentDate : currentDate
        return date.getFullYear() + '-' + month + '-' + currentDate
      }
      return ''
    },
    beforeAvatarUpload (file) {
      var imgReaderl = new FileReader()
      imgReaderl.onload = evt => {
        this.imageUrl = evt.target.result
      }
      imgReaderl.readAsDataURL(file)
      return true
    },
    handleAvatarSuccess (res, file) {
      if (++this.status === 2) this.$router.push('/superUser')
    }
  },
  mounted () {
    this.status = 0
    axios.post('lclgl/getStaff')
    .then(res => {
      this.staffInfo = res.data.staffInfo
      this.imageUrl = this.staffInfo.staffPic
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
