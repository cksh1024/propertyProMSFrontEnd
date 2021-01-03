<template>
    <div>
        <el-form ref="form" style="width:500px; margin:0 auto;text-align:center;" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="staffInfo.staffName"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <template>
                    <el-radio v-model="staffInfo.staffSex" label="女">女</el-radio>
                    <el-radio v-model="staffInfo.staffSex" label="男">男</el-radio>
                </template>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker type="date" placeholder="选择日期" v-model="staffInfo.staffBirthday" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="职位">
                <el-select v-model="staffInfo.statusId" placeholder="请选择">
                    <el-option
                    v-for="item in statusLevels"
                    :key="item.statusId"
                    :label="item.statusType"
                    :value="item.statusId">
                    </el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="联系电话">
                <el-input v-model="staffInfo.staffPhone"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
                <el-input v-model="staffInfo.staffQq"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="staffInfo.staffEmail"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="staffInfo.staffIdnum"></el-input>
            </el-form-item>
            <el-form-item label="籍贯">
                <el-input v-model="staffInfo.staffNaplace"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                <el-input v-model="staffInfo.staffNation"></el-input>
            </el-form-item>
            <el-form-item label="出生地">
                <el-input v-model="staffInfo.staffBirplace"></el-input>
            </el-form-item>
            <el-form-item label="现居地">
                <el-input v-model="staffInfo.staffResidence"></el-input>
            </el-form-item>
            <el-form-item label="教育经历">
                <el-input v-model="staffInfo.staffEdu"></el-input>
            </el-form-item>
            <el-form-item label="工作经历">
                <el-input v-model="staffInfo.staffJob"></el-input>
            </el-form-item>
            <el-row>
            <el-button type="success" plain @click="modifyStaff">修改</el-button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            staffInfo: {
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
                staffBirthday: ''
            },
            statusLevels: []
        }
    },
    mounted () {
        axios.post('lclgl/getStatusLevels')
        .then(res => {
            if (res.data.status !== -1) {
                this.statusLevels = res.data.statusLevels
            }
        })
        .catch(err => {
            console.log(err)
        })
        let params = new FormData()
        params.append('staffId', this.$route.params.id)
        axios.post('lclgl/getStaffById', params)
        .then(res => {
            this.staffInfo = res.data.staffInfo
        })
        .catch(err => {
            console.log(err)
        })
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
                    this.$router.push('/frontDesk/selectStaff')
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
        }
    }
}
</script>

<style>

</style>
