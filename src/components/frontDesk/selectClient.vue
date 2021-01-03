<template>
    <div>
        <el-table
        :data="tableData"
        :height="tableHeight"
        border
        style="width: 100%">
            <el-table-column prop="cusName" label="姓名" width="200"></el-table-column>
            <el-table-column
            label="性别"
            width="130"
            :filters="[{ text: '女', value: '女' }, { text: '男', value: '男' }]"
            :filter-method="filterTag">
                <template slot-scope="scope">
                    <span v-text="scope.row.cusSex"></span>
                </template>
            </el-table-column>
            <el-table-column prop="cusPhone" label="联系电话">
            </el-table-column>
            <el-table-column prop="cusCompany" label="公司">
            </el-table-column>
            <el-table-column prop="cusLevel" label="客户等级">
            </el-table-column>
            <el-table-column prop="cusEmail" label="邮箱">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-popconfirm title="确定修改吗？" @confirm="modifyCustomer(scope.row)">
                        <el-button slot="reference" type="warning">修改</el-button>
                    </el-popconfirm>
                    <el-popconfirm title="确定删除吗？" @confirm="delCustomer(scope.row)">
                        <el-button slot="reference" type="warning">删除</el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            tableData: [],
            tableHeight: window.innerHeight
        }
    },
    methods: {
        filterTag (value, row) {
            return row.staffSex === value
        },
        delCustomer (row) {
            let params = new FormData()
            params.append('cusId', row.cusId)
            axios.post('lclgl/delCustomer', params)
            .then(res => {
                if (res.data.status === -1) {
                    this.$message.error('删除失败！')
                } else {
                    this.$message({
                        message: '删除成功！',
                        type: 'success'
                    })
                    this.getCustomers()
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        modifyCustomer (row) {
            this.$router.push('/frontDesk/modifyClient/' + row.cusId)
        },
        getCustomers () {
            axios.post('lclgl/getCustomers')
            .then(res => {
                this.tableData = res.data.customers
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted () {
        this.getCustomers()
    }
}
</script>

<style>

</style>
