<template>
    <div>
        <el-form ref="form" style="width:500px; margin:0 auto;text-align:center;" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="customer.cusName"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <template>
                    <el-radio v-model="customer.cusSex" label="女">女</el-radio>
                    <el-radio v-model="customer.cusSex" label="男">男</el-radio>
                </template>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="customer.cusPhone"></el-input>
            </el-form-item>
            <el-form-item label="公司">
                <el-input v-model="customer.cusCompany"></el-input>
            </el-form-item>
            <el-form-item label="客户等级">
                <el-select v-model="customer.cusLevel" placeholder="请选择">
                    <el-option
                    v-for="item in cusLevels"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="customer.cusEmail"></el-input>
            </el-form-item>
            <el-row>
            <el-button type="success" plain @click="modifyCustomer">修改</el-button>
            </el-row>
        </el-form> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            customer: {
                cusName: '',
                cusSex: '',
                cusPhone: '',
                cusCompany: '',
                cusLevel: '',
                cusEmail: '',
                cusId: ''
            },
            cusLevels: ['一等', '二等', '三等', '四等']
        }
    },
    methods: {
        modifyCustomer () {
            let params = new FormData()
            params.append('cusName', this.customer.cusName)
            params.append('cusSex', this.customer.cusSex)
            params.append('cusPhone', this.customer.cusPhone)
            params.append('cusCompany', this.customer.cusCompany)
            params.append('cusLevel', this.customer.cusLevel)
            params.append('cusEmail', this.customer.cusEmail)
            params.append('cusId', this.customer.cusId)
            axios.post('lclgl/modifyCustomer', params)
            .then(res => {
                if (res.data.status === -1) {
                    this.$message.error('修改失败！')
                } else {
                    this.$message({
                        message: '修改成功！',
                        type: 'success'
                    })
                    this.$router.push('/frontDesk/selectClient')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted () {
        let params = new FormData()
        params.append('cusId', this.$route.params.id)
        axios.post('lclgl/getCustomerById', params)
        .then(res => {
            this.customer = res.data.customer
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>

</style>
