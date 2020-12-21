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
            <el-table-column prop="suggestion" label="意见" width="180"></el-table-column>
        </el-table>
        <UploadFile :updateTableData="updateTableData"/>
    </div>
</template>

<script>
import UploadFile from './uploadFile.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    props: ['height'],
    mounted () {
        this.updateTableData()
    },
    methods: {
        filterStatus (value, row) {
            return row.auditStatus === value
        },
        filterHandler (value, row, column) {
            const property = column['property']
            return row[property] === value
        },
        statusType (auditStatus) {
            if (auditStatus === '审核未通过') return 'info'
            if (auditStatus === '审核中') return 'primary'
            if (auditStatus === '审核通过') return 'success'
            return 'warning'
        },
        updateTableData () {
            axios.post('lclgl/getAuditInfo')
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
        }
    },
    data () {
        return {
            auditInfo: [],
            allAuditStatus: [
                {text: '待审核', value: '待审核'},
                {text: '审核中', value: '审核中'},
                {text: '审核通过', value: '审核通过'},
                {text: '审核未通过', value: '审核未通过'}
            ]
        }
    },
    computed: {
        ...mapState(['staffInfo'])
    },
    components: {
        UploadFile
    }
}
</script>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .el-table .failed-row {
        background: rgb(180, 204, 224);
    }
</style>
