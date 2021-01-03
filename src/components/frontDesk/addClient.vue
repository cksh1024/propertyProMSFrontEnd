<template>
    <div>
        <el-form ref="form" style="width:500px; margin:0 auto;text-align:center;" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="cusName"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <template>
                    <el-radio v-model="cusSex" label="女">女</el-radio>
                    <el-radio v-model="cusSex" label="男">男</el-radio>
                </template>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="cusPhone"></el-input>
            </el-form-item>
            <el-form-item label="公司">
                <el-input v-model="cusCompany"></el-input>
            </el-form-item>
            <el-form-item label="客户等级">
                <el-select v-model="cusLevel" placeholder="请选择">
                    <el-option
                    v-for="item in cusLevels"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="cusEmail"></el-input>
            </el-form-item>
            <el-row>
            <el-button type="success" plain @click="addCustomer">添加</el-button>
            </el-row>
        </el-form> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            cusName: '',
            cusSex: '',
            cusPhone: '',
            cusCompany: '',
            cusLevel: '',
            cusEmail: '',
            cusLevels: ['一等', '二等', '三等', '四等']
        }
    },
    methods: {
        addCustomer () {
            let params = new FormData()
            params.append('cusName', this.cusName)
            params.append('cusSex', this.cusSex)
            params.append('cusPhone', this.cusPhone)
            params.append('cusCompany', this.cusCompany)
            params.append('cusLevel', this.cusLevel)
            params.append('cusEmail', this.cusEmail)
            axios.post('lclgl/addCustomer', params)
            .then(res => {
                if (res.data.status === -1) {
                    this.$message.error('添加失败！')
                } else {
                    this.$message({
                        message: '添加成功！',
                        type: 'success'
                    })
                    this.$router.push('/frontDesk/selectClient')
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

</style>
