<template>
    <div>
        <el-select v-model="proId" clearable placeholder="请选择项目" style="float:left;">
            <el-option
            v-for="item in pros"
            :key="item.value"
            :label="item.proName"
            :value="item.proId">
            </el-option>
        </el-select>
        <el-upload
            class="upload-demo"
            ref="upload"
            multiple
            :on-success="clearSuccessFile"
            :action="action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :with-credentials='true'>
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('上传到服务器')" v-if="(staffInfo.type==='employee' || staffInfo.type==='manager') && staffInfo.statusType!=='学徒'">上传到服务器</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload('交由主管审核')" v-if="staffInfo.type==='employee'">交由主管审核</el-button>
        </el-upload>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import axios from 'axios'
export default {
    props: ['updateTableData'],
    data () {
        return {
            fileList: [],
            pros: [],
            proId: '',
            action: 'http://localhost:8080/lclgl/upload'
        }
    },
    computed: {
        ...mapState(['staffInfo'])
    },
    methods: {
        submitUpload (commitWay) {
            if (this.proId === '') {
                return this.$message({
                    type: 'warn',
                    message: '请选择项目'
                })
            }
            if (commitWay === '交由主管审核') {
                this.action = `http://localhost:8080/lclgl/upload/audit/${this.proId}`
            } else {
                this.action = `http://localhost:8080/lclgl/upload/submit/${this.proId}`
            }
            this.$nextTick(() => {
                 this.$refs.upload.submit()
            })
        },
        handleRemove (file, fileList) {
            console.log(file, fileList)
        },
        handlePreview (file) {
            console.log(file)
        },
        clearSuccessFile (msg, file, fileList) {
            this.fileList = fileList.filter(item => item.name !== file.name)
            if (this.updateTableData) this.updateTableData()
        },
        ...mapActions(['setStaffInfo'])
    },
    mounted () {
        if (!this.staffInfo.type) {
            this.setStaffInfo(JSON.parse(sessionStorage.getItem('staffInfo')))
        }
        axios.post('lclgl/getUnfinishedPros')
        .then(res => {
            this.pros = res.data.pros
        })
        .catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>
</style>
