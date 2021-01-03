<template>
    <div>
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
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
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
    },
    methods: {
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
                    this.$router.push('/frontDesk/selectStaff')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.el-form-item__label {
    font-size: 15px;
}
.el-radio__input {
    font-size: 20px;
}
.el-radio__label {
    font-size: 20px;
}
.el-radio {
    margin-right: 120px;
}
.el-form-item {
    margin-top: 10px;
}
.el-select {
    width: 100%;
}
</style>
