<template>
    <div style="height:100%">
        <el-table
        :data="tableData"
        :height="tableHeight"
        border
        style="width: 100%">
            <el-table-column fixed prop="staffName" label="姓名"  width="150" style="z-index:1;"></el-table-column>
            <el-table-column
            prop="statusType"
            label="职位">
            </el-table-column>
            <el-table-column
            label="性别"
             width="120"
            :filters="[{ text: '女', value: '女' }, { text: '男', value: '男' }]"
            :filter-method="filterTag">
                <template slot-scope="scope">
                    <span v-text="scope.row.staffSex"></span>
                </template>
            </el-table-column>
             <el-table-column
            prop="staffBirthday"
            label="生日" width="150">
            </el-table-column>
            <el-table-column prop="staffPhone" label="联系电话" width="130">
            </el-table-column>
            <el-table-column
            prop="staffQq"
            label="QQ" width="150">
            </el-table-column>
            <el-table-column
            prop="staffEmail"
            label="邮箱" width="150">
            </el-table-column>
            <el-table-column
            prop="staffIdnum"
            label="身份证号" width="150">
            </el-table-column>
            <el-table-column
            prop="staffNaplace"
            label="籍贯" width="150">
            </el-table-column>
            <el-table-column
            prop="staffNation"
            label="民族" width="150">
            </el-table-column>
            <el-table-column
            prop="staffBirplace"
            label="出生地" width="150">
            </el-table-column>
            <el-table-column
            prop="staffResidence"
            label="现地址" width="150">
            </el-table-column>
            <el-table-column
            prop="staffEdu"
            label="教育经历" width="150">
            </el-table-column>
            <el-table-column
            prop="staffJob"
            label="工作经历" width="150"> 
            </el-table-column>
            <el-table-column
            label="操作"
            width="150">
                <template slot-scope="scope">
                    <el-popconfirm title="确定修改吗？" @confirm="modifyStaff(scope.row.userId)">
                        <el-button slot="reference" type="warning">修改</el-button>
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
            tableHeight: window.innerHeight * 0.85,
            tableData: []
        }
    },
    methods: {
        filterTag (value, row) {
            return row.staffSex === value
        },
        modifyStaff (staffId) {
            this.$router.push('/frontDesk/modifyStaff/' + staffId)
        },
        changeDateFormat (cellval) {
            if (cellval) {
                var date = new Date(cellval)
                var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
                var currentDate = date.getDate()
                currentDate = currentDate < 10 ? '0' + currentDate : currentDate
                return date.getFullYear() + '-' + month + '-' + currentDate
            }
            return ''
        }
    },
    mounted () {
        axios.post('lclgl/getStaffs')
        .then(res => {
            this.tableData = res.data.staffs
            for (let index in this.tableData) {
                this.tableData[index].staffBirthday = this.changeDateFormat(this.tableData[index].staffBirthday)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>
body .el-table th.gutter{
    display: table-cell!important;
}
</style>
