<template>
    <div>
        <el-table :data="auditInfo" style="width: 100%" border :height="height?height:250">
            <el-table-column prop="commitDate" label="日期" width="180" sortable></el-table-column>
            <el-table-column prop="staffInfo.staffName" label="姓名" width="180"></el-table-column>
            <el-table-column prop="auditFile" label="审核文件">
                <template slot-scope="scope">
                    <el-link v-text="scope.row.auditFile" @click="downloadFile(scope.row)"></el-link>
                </template>
            </el-table-column>
            <el-table-column prop="pro.proName" label="所属项目"></el-table-column>
            <el-table-column label="审核状态" :filters="allAuditStatus" :filter-method="filterStatus" filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="statusType(scope.row.auditStatus)" disable-transitions>{{scope.row.auditStatus}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="warning" v-if="scope.row.auditStatus==='待审核'" @click="auditOperation(scope.row, 'acceptAudit')">接受审核</el-button>
                    <el-button type="success" v-if="scope.row.auditStatus!=='待审核'" @click="auditOperation(scope.row, 'pass')">通过</el-button>
                    <el-button type="danger" v-if="scope.row.auditStatus!=='待审核'" @click="auditOperation(scope.row, 'reject')">驳回</el-button>
                </template>
            </el-table-column>
        </el-table>
        <UploadFile/>
    </div>
</template>

<script>
import UploadFile from '../commons/uploadFile'
import axios from 'axios'
export default {
    props: ['height'],
    components: {
        UploadFile
    },
    data () {
        return {
            filterStatus (value, row) {
                return row.auditStatus === value
            },
            filterHandler (value, row, column) {
                const property = column['property']
                return row[property] === value
            },
            statusType (auditStatus) {
                if (auditStatus === '待审核') return 'warning'
                return 'primary'
            },
            allAuditStatus: [
                {text: '待审核', value: '待审核'},
                {text: '审核中', value: '审核中'}
            ],
            auditInfo: []
        }
    },
    methods: {
        updateTableData () {
            axios.post('lclgl/getAuditInfoOfManager')
            .then(res => {
                if (res.data.status === 1) {
                    this.auditInfo = res.data.auditInfo
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        downloadFile (row) {
            window.open(`http://localhost:8080/lclgl/download/${row.auditFile}/${row.auditStatus}/${row.staffInfo.userId}/${row.pro.proId}`)
        },
        auditOperation (row, operation) {
            let param = new FormData()
            param.append('auditId', row.auditId)
            param.append('auditFile', row.auditFile)
            param.append('staffId', row.staffInfo.userId)
            param.append('proName', row.pro.proName)
            param.append('operation', operation)
            axios.post('lclgl/processAudit', param)
            .then(res => {
               if (res.data.status === 1) {
                   this.updateTableData()
               }
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted () {
        this.updateTableData()
    }
}
</script>

<style>

</style>
